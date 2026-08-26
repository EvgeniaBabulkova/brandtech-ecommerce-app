import type { Product, PromotionalSpot } from "./catalog";

export type GridItem =
  | {
      type: "product";
      data: Product;
    }
  | {
      type: "promotion";
      data: PromotionalSpot;
    };
