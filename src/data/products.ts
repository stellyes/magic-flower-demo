export type Product = {
  name: string;
  brand: string;
  slug: string;
  thc?: string;
  weight?: string;
  price: number;
  salePrice?: number;
};

export type Category = {
  name: string;
  slug: string;
  icon: string;
  description: string;
  image?: string;
  products: Product[];
};

function slugify(str: string): string {
  return str
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function makeProductSlug(name: string, brand: string): string {
  return slugify(`${name}-${brand}`);
}

export const categories: Category[] = [
  {
    name: "Flower",
    slug: "flower",
    icon: "🌿",
    description:
      "Premium strains from trusted California cultivators. Indica, sativa, and hybrid options to match your mood.",
    image: "/magicflower-product5.webp",
    products: [
      { name: "Rapper Weed", brand: "FIG FARMS", slug: makeProductSlug("Rapper Weed", "FIG FARMS"), thc: "31.05%", weight: "3.5g", price: 49.5 },
      { name: "GMO", brand: "SENSE", slug: makeProductSlug("GMO", "SENSE"), thc: "31.3%", weight: "3.5g", price: 49.5 },
      { name: "Black Cherry Gushers", brand: "Sticky", slug: makeProductSlug("Black Cherry Gushers", "Sticky"), thc: "30.05%", weight: "3.5g", price: 36.0 },
      { name: "Glacierz - Berry Bliss", brand: "Waferz", slug: makeProductSlug("Glacierz Berry Bliss", "Waferz"), thc: "37.65%", weight: "7g", price: 54.0 },
      { name: "Fidel Runtz", brand: "BOB Stash", slug: makeProductSlug("Fidel Runtz 3.5g", "BOB Stash"), thc: "34.78%", weight: "3.5g", price: 23.0 },
      { name: "Fidel Runtz", brand: "BOB Stash", slug: makeProductSlug("Fidel Runtz 14g", "BOB Stash"), thc: "34.78%", weight: "14g", price: 60.0 },
      { name: "Governmint Oasis", brand: "CANNATRUST", slug: makeProductSlug("Governmint Oasis", "CANNATRUST"), thc: "35.67%", weight: "3.5g", price: 24.0 },
      { name: "Blueberry Thin Mint", brand: "Dime Bag", slug: makeProductSlug("Blueberry Thin Mint", "Dime Bag"), thc: "31.29%", weight: "3.5g", price: 24.0 },
      { name: "Animal Cocktail", brand: "Dovetail", slug: makeProductSlug("Animal Cocktail", "Dovetail"), thc: "30.73%", weight: "3.5g", price: 25.0, salePrice: 15.0 },
      { name: "Jealousy", brand: "Dovetail", slug: makeProductSlug("Jealousy", "Dovetail"), thc: "27.21%", weight: "7g", price: 40.0, salePrice: 24.0 },
    ],
  },
  {
    name: "Pre-Rolls",
    slug: "pre-rolls",
    icon: "🌀",
    description:
      "Grab-and-go convenience without compromising quality. Singles, multi-packs, and infused options available.",
    image: "/magicflower-product3.webp",
    products: [
      { name: "Fidel Runtz Single", brand: "BOB Stash", slug: makeProductSlug("Fidel Runtz Single", "BOB Stash"), thc: "34.78%", weight: "1g", price: 8.0 },
      { name: "Black Cherry Gushers", brand: "Sticky", slug: makeProductSlug("Black Cherry Gushers Pre-Roll", "Sticky"), thc: "30.05%", weight: "1g", price: 10.0 },
      { name: "Blueberry Thin Mint 5-Pack", brand: "Dime Bag", slug: makeProductSlug("Blueberry Thin Mint 5-Pack", "Dime Bag"), thc: "31.29%", weight: "2.5g", price: 18.0 },
      { name: "GMO Infused", brand: "SENSE", slug: makeProductSlug("GMO Infused", "SENSE"), thc: "38.2%", weight: "1g", price: 15.0 },
      { name: "Animal Cocktail Mini", brand: "Dovetail", slug: makeProductSlug("Animal Cocktail Mini", "Dovetail"), thc: "30.73%", weight: "0.5g", price: 5.0, salePrice: 3.5 },
    ],
  },
  {
    name: "Vape Pens",
    slug: "vape-pens",
    icon: "💨",
    description:
      "Discreet, portable, and potent. Live resin, distillate, and full-spectrum cartridges from top California brands.",
    image: "/magicflower-product1.webp",
    products: [
      { name: "Live Resin - GMO", brand: "SENSE", slug: makeProductSlug("Live Resin GMO", "SENSE"), thc: "89.4%", weight: "1g", price: 45.0 },
      { name: "Distillate - Blue Dream", brand: "Dime Bag", slug: makeProductSlug("Distillate Blue Dream", "Dime Bag"), thc: "91.2%", weight: "0.5g", price: 22.0 },
      { name: "Full Spectrum - Gelato", brand: "FIG FARMS", slug: makeProductSlug("Full Spectrum Gelato", "FIG FARMS"), thc: "85.7%", weight: "1g", price: 52.0 },
      { name: "Live Rosin - Berry Bliss", brand: "Waferz", slug: makeProductSlug("Live Rosin Berry Bliss", "Waferz"), thc: "78.3%", weight: "0.5g", price: 38.0 },
      { name: "Disposable - Governmint Oasis", brand: "CANNATRUST", slug: makeProductSlug("Disposable Governmint Oasis", "CANNATRUST"), thc: "88.1%", weight: "1g", price: 30.0 },
    ],
  },
  {
    name: "Edibles",
    slug: "edibles",
    icon: "🍬",
    description:
      "Tasty, precisely dosed treats. Perfect for those who prefer a smoke-free experience.",
    image: "/magicflower-product2.webp",
    products: [
      { name: "Sour Gummies 100mg", brand: "Kanha", slug: makeProductSlug("Sour Gummies 100mg", "Kanha"), thc: "100mg", weight: "10pc", price: 22.0 },
      { name: "Dark Chocolate Bar", brand: "Défoncé", slug: makeProductSlug("Dark Chocolate Bar", "Defonce"), thc: "90mg", weight: "1 bar", price: 24.0 },
      { name: "Watermelon Chews", brand: "PLUS", slug: makeProductSlug("Watermelon Chews", "PLUS"), thc: "100mg", weight: "10pc", price: 20.0 },
      { name: "CBN Sleep Gummies", brand: "Camino", slug: makeProductSlug("CBN Sleep Gummies", "Camino"), thc: "5mg THC/5mg CBN", weight: "20pc", price: 25.0 },
      { name: "Peanut Butter Cups", brand: "Big Pete's", slug: makeProductSlug("Peanut Butter Cups", "Big Petes"), thc: "100mg", weight: "2pc", price: 18.0, salePrice: 14.0 },
    ],
  },
  {
    name: "Drinks & Beverages",
    slug: "drinks-beverages",
    icon: "🥤",
    description:
      "Refreshing cannabis-infused beverages. Fast-acting, sessionable, and perfect for social occasions.",
    products: [
      { name: "Lemon Ginger Tonic", brand: "Cann", slug: makeProductSlug("Lemon Ginger Tonic", "Cann"), thc: "2mg THC/4mg CBD", weight: "12oz", price: 6.0 },
      { name: "Blood Orange Cardamom", brand: "Cann", slug: makeProductSlug("Blood Orange Cardamom", "Cann"), thc: "5mg THC", weight: "12oz", price: 7.0 },
      { name: "Sparkling Water - Grapefruit", brand: "Lagunitas Hi-Fi", slug: makeProductSlug("Sparkling Water Grapefruit", "Lagunitas Hi-Fi"), thc: "10mg THC", weight: "12oz", price: 8.0 },
      { name: "Cold Brew Coffee", brand: "Somatik", slug: makeProductSlug("Cold Brew Coffee", "Somatik"), thc: "10mg THC", weight: "8oz", price: 12.0 },
    ],
  },
  {
    name: "Wellness",
    slug: "wellness",
    icon: "🧴",
    description:
      "Topicals, tinctures, and wellness products for targeted relief and daily balance — no high required.",
    products: [
      { name: "CBD Relief Balm", brand: "Papa & Barkley", slug: makeProductSlug("CBD Relief Balm", "Papa Barkley"), thc: "CBD 600mg", weight: "2oz", price: 42.0 },
      { name: "1:1 Tincture", brand: "Care By Design", slug: makeProductSlug("1-1 Tincture", "Care By Design"), thc: "1:1 THC:CBD", weight: "15ml", price: 38.0 },
      { name: "CBN Sleep Drops", brand: "Kikoko", slug: makeProductSlug("CBN Sleep Drops", "Kikoko"), thc: "5mg CBN/2mg THC", weight: "30ml", price: 32.0 },
      { name: "Transdermal Patch", brand: "Mary's Medicinals", slug: makeProductSlug("Transdermal Patch", "Marys Medicinals"), thc: "20mg THC", weight: "1 patch", price: 14.0 },
      { name: "Bath Bomb - Lavender", brand: "Kush Queen", slug: makeProductSlug("Bath Bomb Lavender", "Kush Queen"), thc: "25mg CBD", weight: "1pc", price: 12.0 },
    ],
  },
  {
    name: "Accessories",
    slug: "accessories",
    icon: "✨",
    description:
      "Everything you need to enhance your experience, from artisan glass to rolling papers.",
    image: "/magicflower-product4.webp",
    products: [
      { name: "Classic Rolling Papers", brand: "RAW", slug: makeProductSlug("Classic Rolling Papers", "RAW"), weight: "32 leaves", price: 3.0 },
      { name: "Herb Grinder - 4 Piece", brand: "Santa Cruz Shredder", slug: makeProductSlug("Herb Grinder 4 Piece", "Santa Cruz Shredder"), weight: "Medium", price: 45.0 },
      { name: "Glass Spoon Pipe", brand: "GRAV", slug: makeProductSlug("Glass Spoon Pipe", "GRAV"), weight: "4 inch", price: 25.0 },
      { name: "Smell-Proof Stash Bag", brand: "Revelry", slug: makeProductSlug("Smell-Proof Stash Bag", "Revelry"), weight: "Small", price: 20.0 },
      { name: "Hemp Wick", brand: "Bee Line", slug: makeProductSlug("Hemp Wick", "Bee Line"), weight: "200ft", price: 8.0 },
    ],
  },
];

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}

export function getProductBySlug(
  categorySlug: string,
  productSlug: string
): { category: Category; product: Product } | undefined {
  const category = getCategoryBySlug(categorySlug);
  if (!category) return undefined;
  const product = category.products.find((p) => p.slug === productSlug);
  if (!product) return undefined;
  return { category, product };
}
