import Link from "next/link";
import { notFound } from "next/navigation";
import { categories, getProductBySlug } from "@/data/products";
import ProductCard from "@/components/ProductCard";

export function generateStaticParams() {
  return categories.flatMap((c) =>
    c.products.map((p) => ({ category: c.slug, product: p.slug }))
  );
}

export function generateMetadata({
  params,
}: {
  params: Promise<{ category: string; product: string }>;
}) {
  return params.then(({ category, product }) => {
    const result = getProductBySlug(category, product);
    if (!result) return { title: "Not Found" };
    return {
      title: `${result.product.name} by ${result.product.brand} | Magic Flower Cannabis`,
      description: `${result.product.name} from ${result.product.brand}. ${result.product.thc ? `THC: ${result.product.thc}.` : ""} Available at Magic Flower Cannabis in San Francisco.`,
    };
  });
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ category: string; product: string }>;
}) {
  const { category: categorySlug, product: productSlug } = await params;
  const result = getProductBySlug(categorySlug, productSlug);
  if (!result) notFound();

  const { category, product } = result;
  const onSale = product.salePrice !== undefined;

  // Get other products from same category for "You may also like"
  const related = category.products
    .filter((p) => p.slug !== product.slug)
    .slice(0, 3);

  return (
    <>
      {/* Breadcrumb */}
      <section className="bg-forest text-cream py-4">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <nav className="flex items-center gap-2 text-sm text-cream/60">
            <Link href="/menu" className="hover:text-cream transition-colors">
              Menu
            </Link>
            <span>/</span>
            <Link
              href={`/menu/${category.slug}`}
              className="hover:text-cream transition-colors"
            >
              {category.name}
            </Link>
            <span>/</span>
            <span className="text-cream truncate">{product.name}</span>
          </nav>
        </div>
      </section>

      {/* Product Detail */}
      <section className="py-12 md:py-20 bg-cream">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="bg-warm-white rounded-2xl border border-cream-dark p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-10">
              {/* Product image placeholder */}
              <div className="bg-forest/5 rounded-2xl aspect-square flex items-center justify-center">
                <div className="text-center p-8">
                  <span className="text-6xl block mb-4">{category.icon}</span>
                  <p className="text-forest/40 text-sm">{category.name}</p>
                </div>
              </div>

              {/* Product info */}
              <div className="flex flex-col justify-center">
                <p className="text-copper text-sm font-semibold uppercase tracking-wide mb-1">
                  {product.brand}
                </p>
                <h1 className="font-heading text-3xl md:text-4xl font-bold text-forest mb-4">
                  {product.name}
                </h1>

                {/* Tags */}
                <div className="flex flex-wrap items-center gap-2 mb-6">
                  {product.thc && (
                    <span className="text-xs font-medium bg-forest/8 text-forest px-3 py-1 rounded-full">
                      {product.thc.includes("mg") ||
                      product.thc.includes("CBD")
                        ? product.thc
                        : `THC ${product.thc}`}
                    </span>
                  )}
                  {product.weight && (
                    <span className="text-xs font-medium bg-plum/8 text-plum-dark px-3 py-1 rounded-full">
                      {product.weight}
                    </span>
                  )}
                  {onSale && (
                    <span className="text-xs font-bold bg-copper/15 text-copper px-3 py-1 rounded-full uppercase">
                      Sale
                    </span>
                  )}
                </div>

                {/* Price */}
                <div className="mb-8">
                  {onSale ? (
                    <div className="flex items-baseline gap-3">
                      <span className="text-3xl font-bold text-copper">
                        ${product.salePrice!.toFixed(2)}
                      </span>
                      <span className="text-lg text-charcoal-light line-through">
                        ${product.price.toFixed(2)}
                      </span>
                    </div>
                  ) : (
                    <span className="text-3xl font-bold text-forest">
                      ${product.price.toFixed(2)}
                    </span>
                  )}
                  <p className="text-xs text-charcoal-light mt-1">
                    Tax included
                  </p>
                </div>

                {/* Add to Cart (placeholder) */}
                <button className="bg-copper hover:bg-copper-light text-cream px-8 py-3.5 rounded-full font-medium transition-colors text-sm uppercase tracking-wide w-full mb-3">
                  Add to Cart
                </button>
                <p className="text-xs text-charcoal-light text-center">
                  Or visit us at 906 Post St to purchase in-store
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* You May Also Like */}
      {related.length > 0 && (
        <section className="py-12 bg-warm-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <h2 className="font-heading text-2xl font-bold text-forest mb-6">
              You May Also Like
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {related.map((p) => (
                <ProductCard
                  key={p.slug}
                  product={p}
                  href={`/menu/${category.slug}/${p.slug}`}
                />
              ))}
            </div>
            <div className="text-center mt-8">
              <Link
                href={`/menu/${category.slug}`}
                className="text-copper font-semibold hover:text-copper-light transition-colors border-b-2 border-copper hover:border-copper-light"
              >
                &larr; Back to {category.name}
              </Link>
            </div>
          </div>
        </section>
      )}
    </>
  );
}
