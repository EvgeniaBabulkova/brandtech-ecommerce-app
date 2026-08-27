# BrandTech Storefront

[Check it out]() <-----------

A small e-commerce storefront built with Vue 3 and Nuxt SSR, powered by a local catalog JSON containing products, categories, and promotional placements.

## Overview

This project turns the provided product dataset into a storefront that supports a category-driven product listing, sorting and filtering via URL state, promotional grid placements and a variant-aware product detail page. The app is implemented as a Server-Side Rendered Nuxt application using the Composition API.

## Features

- **Product Details & Variants** – Product gallery, pricing, stock information, and variant selection with dynamic image updates.
- **Product Listing** – Grid-based catalog with promotional spots dynamically inserted at their specified positions.
- **Category Navigation** – Data-driven main and sidebar navigation with active category states and URL-based filtering.
- **Product Sorting & Filtering** – Sort products by price and filter the catalog with state reflected in URL query parameters.
- **Breadcrumb Navigation** – Category-aware breadcrumbs providing context on product pages.
- **SEO** – Dynamic product-specific title and description metadata using Nuxt's `useSeoMeta()`.
- **Image Optimization** – Optimized WebP product images with lazy loading and loading skeletons using Nuxt Image.
- **Server-Side Rendering** – Built with Nuxt and Vue 3 Composition API with SSR support.

## Technologies Used

- Vue 3
- Nuxt 4
- TypeScript
- Sass
- Composition API
- SSR rendering

## Project Preview

## Project Structure

```text
app/
├── assets/
│   └── css/
│       ├── _mixins.scss
│       └── main.css
├── components/
│   ├── NavBar.vue
│   ├── pdp/
│   │   ├── ProductGallery.vue
│   │   ├── ProductSizeSelector.vue
│   │   └── ProductVariantSelector.vue
│   ├── plp/
│   │   ├── ProductCard.vue
│   │   ├── PromotionalSpot.vue
│   │   ├── Sidebar.vue
│   │   ├── SidebarCategory.vue
│   │   └── Sort.vue
│   └── ui/
│       ├── ArrowButton.vue
│       ├── Breadcrumbs.vue
│       └── SelectorButton.vue
├── composables/
│   └── useCatalog.ts
├── data/
│   └── catalog.json
├── pages/
│   ├── index.vue
│   └── product/
│       └── [id].vue
├── types/
│   ├── catalog.ts
│   └── gridItem.ts
├── app.vue
└── layouts/
    └── default.vue
```

## Run Locally

```bash
npm install
npm run dev
```
