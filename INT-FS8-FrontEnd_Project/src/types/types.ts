export type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  images: string[];
  creationAt: string;
  updatedAt: string;
  category: {
    id: number;
    name: string;
    image: string;
    creationAt: string;
    updatedAt: string;
  };
};
export type CartProducts = Product & {
  counter: number;
};

export type SortingType = "lowestPrice" | "highestPrice" | "AZ" | "ZA" | "reset";