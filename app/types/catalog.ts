// Promotional Spot -----------------

// export type PromotionalSpotType = "1x1" | "2x1" | "2x2";
export type FocalPoint = { x: number; y: number };
export type PromotionalImage = {
  aspectRatio: string;
  imageUrl: string;
  focalPoint: FocalPoint;
  maxWidth: string;
  alt: string;
};

export type PromotionalSpot = {
  link: string;
  position: number;
  type: string;
  image: PromotionalImage;
  imageAltText: string;
  _alias: string;
};

// Category -----------------

export type Category = {
  id: string;
  parent_category_id: string;
  level: number;
  name: {
    en: string;
    dk: string;
  };
  categories?: Category[];
};

// Product -----------------

export type ProductSize = string | number;
export type ProductStock = string | number;
export type LocalizedName = {
  en?: string;
  dk?: string;
};

export type ProductVariant = {
  stock: ProductStock;
  color: string;
  size: ProductSize[];
  images?: string[];
};

export type Product = {
  id: number;
  brand: string;
  price: number;
  stock: ProductStock;
  color: string;
  size: ProductSize[];
  name: LocalizedName;
  images?: string[];
  variant?: ProductVariant[];
  categories: string[];
};

// Catalog -----------------

export type Catalog = {
  products: Product[];
  categories: Category;
  promotionalSpots: PromotionalSpot[];
};
