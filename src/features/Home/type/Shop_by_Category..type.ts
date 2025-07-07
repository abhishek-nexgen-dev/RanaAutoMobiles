export type ShopByCategoryType = {
  id: number | string;
  title: string;
  description?: string;
  imageUrl: string;
  link: string;
};

export interface ShopByCategoryContainerType {
  categories: ShopByCategoryType[];
}
