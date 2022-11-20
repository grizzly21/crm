export interface ICategoryList{
  id: string | number;
  label: string;
  data: string;
  expandedIcon: string;
  collapsedIcon: string;
  children?: ICategoryList[] | any [];
}
