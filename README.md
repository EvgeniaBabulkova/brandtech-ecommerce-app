# BrandTech Storefront

[Check it out](https://brandtech-ecommerce-app.vercel.app/) <-----------

A small e-commerce storefront built with Vue 3 and Nuxt SSR, powered by a local catalog JSON containing products, categories and promotional placements.

## Overview

This project turns the provided product dataset into a storefront that supports a category-driven product listing, sorting and filtering via URL state, promotional grid placements and a variant-aware product detail page. The app is implemented as a Server-Side Rendered Nuxt application using the Composition API.

## Features

- **Product Details & Variants** – Product gallery, pricing, stock information, and variant selection with dynamic image updates.
- **Product Listing** – Responsive grid-based catalog with promotional spots dynamically inserted at specified positions.
- **Category Navigation** – Data-driven main and sidebar navigation with active category states and URL-based filtering.
- **Product Sorting & Filtering** – Sort by price and filter by category, brand, and color, with state reflected in URL query parameters.
- **Breadcrumb Navigation** – Category-aware breadcrumbs on product pages.
- **SEO** – Dynamic product-specific title and description metadata using Nuxt's `useSeoMeta()`.
- **Image Optimization** – Optimized WebP product images with lazy loading and loading skeletons.
- **Server-Side Rendering** – Built with Nuxt and Vue 3 Composition API with SSR support.

## Technologies Used

- Vue 3
- Nuxt 4
- TypeScript
- Sass
- Composition API
- SSR rendering

## Project Preview
<img width="1892" height="972" alt="image" src="https://github.com/user-attachments/assets/a102a053-9d16-4ee2-827a-937ab3a61fee" />
<img width="1887" height="1097" alt="image" src="https://github.com/user-attachments/assets/9b64e85f-5a10-4942-8c0e-e939ec9cbd3c" />

## Project Structure

```text
app/
├── app.vue
├── assets/
│   └── styles/
│       ├── _mixins.scss
│       └── main.css
├── components/
│   ├──  ui/
│       ├── ArrowButton.vue
│       ├── Breadcrumbs.vue
│       ├── MultiSelect.vue
│       └── SelectorButton.vue
│   ├── pdp/
│   │   ├── ProductControls.vue
│   │   ├── ProductGallery.vue
│   │   ├── ProductSizeSelector.vue
│   │   └── ProductVariantSelector.vue
│   ├── plp/
│   │   ├── ProductCard.vue
│   │   ├── PromotionalSpot.vue
│   │   ├── Sidebar.vue
│   │   ├── SidebarCategory.vue
│   │   └── Sort.vue
│   └── NavBar.vue
├── composables/
│   ├── useCatalog.ts
├── data/
├── layouts/
├── pages/
│   ├── index.vue
│   └── product/
│       └── [id].vue
└── types/

```

## Run Locally

```bash
npm install
npm run dev
```
