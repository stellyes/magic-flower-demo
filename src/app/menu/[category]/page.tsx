import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { categories, getCategoryBySlug } from "@/data/products";
import ProductCard from "@/components/ProductCard";

export function generateStaticParams() {
  return categories.map((c) => ({ category: c.slug }));
}

export function generateMetadata({ params }: { params: Promise<{ category: string }> }) {
  return params.then(({ category }) => {
    const cat = getCategoryBySlug(category);
    if (!cat) return { title: "Not Found" };
    return {
      title: `${cat.name} | Magic Flower Cannabis`,
      description: cat.description,
    };
  });
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category: categorySlug } = await params;
  const category = getCategoryBySlug(categorySlug);
  if (!category) notFound();

  return (
    <>
      {/* Hero */}
      <section className="relative bg-forest text-cream py-16 overflow-hidden">
        {category.image && (
          <Image
            src={category.image}
            alt={category.name}
            fill
            className="object-cover opacity-20"
          />
        )}
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-cream/60 mb-6">
            <Link href="/menu" className="hover:text-cream transition-colors">
              Menu
            </Link>
            <span>/</span>
            <span className="text-cream">{category.name}</span>
          </nav>

          <div className="flex items-center gap-4">
            {category.image ? (
              <div className="relative w-16 h-16 rounded-xl overflow-hidden flex-shrink-0 hidden sm:block">
                <Image
                  src={category.image}
                  alt={category.name}
                  fill
                  className="object-cover"
                />
              </div>
            ) : (
              <span className="text-4xl hidden sm:block">{category.icon}</span>
            )}
            <div>
              <h1 className="font-heading text-3xl md:text-4xl font-bold">
                {category.name}
              </h1>
              <p className="text-cream/70 mt-2 max-w-xl">
                {category.description}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="py-12 bg-cream">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between mb-8">
            <p className="text-charcoal-light text-sm">
              {category.products.length} product
              {category.products.length !== 1 ? "s" : ""}
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {category.products.map((product) => (
              <ProductCard
                key={product.slug}
                product={product}
                href={`/menu/${category.slug}/${product.slug}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Back link */}
      <section className="bg-warm-white py-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <Link
            href="/menu"
            className="text-copper font-semibold hover:text-copper-light transition-colors border-b-2 border-copper hover:border-copper-light"
          >
            &larr; Back to all categories
          </Link>
        </div>
      </section>
    </>
  );
}
