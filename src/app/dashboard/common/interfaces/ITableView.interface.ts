export interface ITableView{
  id?: string | number;
  type: string; //add before send to server
  goodImage?: string;
  itemName: string;
  itemGroup: string;
  description: string;
  code: number;
  article?: string;
  unitOfMeasurement: string; //add before send to server
  purchasePrice?: number;
  salePrice: number;
  access: string;
  department: string;
  generalAccess?: boolean;
}
