export interface IService{
  id?: string | number;
  type: string;
  itemName: string;
  description: string;
  itemGroup: string;
  code: number;
  access: string;
  department: string;
  generalAccess?: boolean;
  salePrice: number;
}
