export interface Category_Type {
  _id: string;
  name: string;
  description: string;
  categoryImage: string;
  Products: []; // Replace `any` with the specific type for products if available
  isActive: boolean;
  isPinned: boolean;
  createdAt: string; // ISO date string
  updatedAt: string; // ISO date string
  __v: number;
}
