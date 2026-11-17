# ecommerce_demo

A clothing-store storefront built as a single-page React app. It shows how a real shop handles browsing, product pages, size selection and a cart without page reloads.

**Live demo:** https://ecommerce-demo-eight-xi.vercel.app

## Stack

- React 19 (JavaScript, JSX)
- React Router 7
- Tailwind CSS 4
- Vite 6
- Deployed on Vercel

## Features

- **Shopping cart** with global state (React Context): add items by size, change quantities, remove items, live totals.
- **Product catalog** with category pages (tops, bottoms, casual, formal, gym, party, on sale, new arrivals).
- **Product detail pages** with size picker and validation before adding to the cart.
- **Search by keyword** through a dynamic route (`/products/:query`).
- **Responsive layout** with home-page carousels for brands and customer reviews.

## Run locally

Requirements: Node.js 18+.

```bash
git clone https://github.com/Brayanketchup/ecommerce_demo.git
cd ecommerce_demo
npm install
npm run dev
```

Then open http://localhost:5173. Build for production with `npm run build`.
