import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../environments/environment";
import {TreeNode} from "primeng/api";

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  public categoryList: TreeNode[] = [];

  constructor(private http: HttpClient) { }

  getCategoryList() {
    this.http.get<TreeNode[]>(`${environment.apiUrl}categoryList`)
      .subscribe(
        response => {
          this.categoryList = response;
        }
      );
  }

  addNewCategory(categoryName: string){
    return this.http.post(`${environment.apiUrl}categoryList`,
      this.composeCategoryItem(categoryName))
  }

  addNewCategoryAsChild(parent: string | number, categoryName: string){
    return this.http.patch(`${environment.apiUrl}`, categoryName)
  }

  private composeCategoryItem(categoryName: string){
    return {
      label: categoryName,
      data: categoryName.toLowerCase(),
      expandedIcon: 'pi pi-folder-open',
      collapsedIcon: 'pi pi-folder',
      children: [{}]
    }
  }
}
