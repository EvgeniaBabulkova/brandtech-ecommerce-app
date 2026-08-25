import catalogData from "~/data/catalog.json";
import type { Catalog, Category } from "~/types/catalog";

export function useCatalog() {
  const route = useRoute();
  const catalog: Catalog = catalogData;
  const rootCategories = catalog.categories.categories ?? [];
  const adultsCategory = rootCategories.find((category) => category.id === "adults");

  const mainCategories: Category[] = [
    ...(adultsCategory?.categories ?? []),
    ...rootCategories.filter((category) => category.id !== "adults"),
  ];

  const activeCategoryId = computed(() => route.query.category?.toString() ?? "men");

  function findMainCategory(categories: Category[], categoryId: string): Category | undefined {
    const containsCategory = (category: Category): boolean => {
      if (category.id === categoryId) return true;
      return category.categories?.some((childCategory) => containsCategory(childCategory)) ?? false;
    };
    return categories.find((category) => containsCategory(category));
  }

  const activeMainCategory = computed(() => findMainCategory(mainCategories, activeCategoryId.value));

  return {
    products: catalog.products,
    categories: catalog.categories,
    mainCategories,
    promotionalSpots: catalog.promotionalSpots,

    activeCategoryId, // doesn't need to be high level
    activeMainCategory, // for the high level only
  };
}
