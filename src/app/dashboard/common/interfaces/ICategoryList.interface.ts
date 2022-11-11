export interface ICategoryList{
  label: string;
  data: string;
  expandedIcon: string;
  collapsedIcon: string;
  children: ICategoryList[];
}
