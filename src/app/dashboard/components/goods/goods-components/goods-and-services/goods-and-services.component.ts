import {Component, OnInit} from '@angular/core';
import {GoodsService} from "../../services/goods.service";
import {GoodsCommunicationService} from "../../services/goods-communication.service";
import {ITableView} from "../../../../common/interfaces/ITableView.interface";
import {MessageService, TreeNode} from "primeng/api";
import {CategoryService} from "../../../../common/services/category.service";

@Component({
  selector: 'app-goods-and-services',
  templateUrl: './goods-and-services.component.html',
  styleUrls: [
    './goods-and-services.component.scss',
    '../../../../common/styles/panel-general-style.scss',
    '../../../../common/styles/pop-up-style.scss',
  ],
})
export class GoodsAndServicesComponent implements OnInit {
  //toggles
  goodsPopUpToggle = false;
  itemsArrayToggle = false;

  //main arrays
  cols!: any[];
  allItems: ITableView[] = [];
  filteredItemsByCategory: ITableView[] = [];

  selectedProducts!: ITableView[];
  selectedCategory!: TreeNode;

  constructor(
    private goodsService: GoodsService,
    private communicationService: GoodsCommunicationService,
    private messageService: MessageService,
    public categoryService: CategoryService
  ) {
  }

  ngOnInit() {
    this.getAllItems();

    this.categoryService.getCategoryList();

    // communication with pop-up
    this.communicationService.closePopUp.subscribe(
      next => {
        this.goodsPopUpToggle = next;
      },
      error => {
        console.log(error);
      }
    )

    this.communicationService.updateItemTable.subscribe(
      next => this.getAllItems(),
      error => {
        console.log(error)
      }
    )

    this.cols = [
      {field: 'itemImage', header: 'Зображення'},
      {field: 'type', header: 'Тип'},
      {field: 'itemName', header: 'Назва товару'},
      {field: 'code', header: 'Код товару'},
      {field: 'unitOfMeasurement', header: 'Од. вимір.'},
      {field: 'purchasePrice', header: 'Закупівельна ціна'},
      {field: 'salePrice', header: 'Ціна продажу'},
    ];

  }

  getAllItems() {
    this.allItems = [];

    this.goodsService.getAllGoods().subscribe(
      (response) => {
        response.forEach(item => {
          this.allItems.push(item);
        })
      },
      (error) => this.messageService.add({
        severity:'error',
        summary:'Помилка',
        detail:'Помилка завантаження товарів'
      })
    );

    this.goodsService.getAllServices().subscribe(
      (response) => {
        response.forEach(item => {
          this.allItems.push(item)
        })
      },
      (error) => this.messageService.add({
        severity:'error',
        summary:'Помилка',
        detail:'Помилка завантаження сервісів'
      })
    );

  }

  getEventValue(event: any): string {
    return event.target.value;
  }

  nodeSelectToggle: boolean = false

  nodeSelect(event: any) {
    console.log(event);
    if(!this.nodeSelectToggle){
      this.filteredItemsByCategory = []
      this.allItems.forEach(item => {
        console.log(item)
        if(event.node.data === item.itemGroup){
          console.log('here')
          this.filteredItemsByCategory.push(item)
        }
      })
      console.log(this.filteredItemsByCategory)
      this.itemsArrayToggle = true;
    }else {
      return;
    }
    this.nodeSelectToggle = true;
  }

  nodeUnselect(event: any) {
    this.nodeSelectToggle = false;
    this.itemsArrayToggle = false;
    // this.filteredItemsByCategory = [];
    // this.itemsArrayToggle = false;
    console.log(event + 'unselected');
  }
}
