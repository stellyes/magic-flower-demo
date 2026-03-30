import Image from "next/image";
import type { Metadata } from "next";
import Link from "next/link";
import { categories } from "@/data/products";

export const metadata: Metadata = {
  title: "Menu | Magic Flower Cannabis",
  description:
    "Explore our curated selection of flower, pre-rolls, edibles, topicals, tinctures, and accessories at Magic Flower Cannabis in San Francisco.",
};

export default function Menu() {
  return (
    <>
      {/* Hero */}
      <section className="bg-forest text-cream py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-6">
            Our Menu
          </h1>
          <p className="text-cream/80 text-lg leading-relaxed max-w-2xl mx-auto">
            Every product is hand-picked for quality, safety, and value. Our
            inventory changes with the seasons — stop by or call to ask about
            what&apos;s fresh.
          </p>
          <div className="flex flex-wrap justify-center gap-3 mt-8">
            <span className="bg-gold/20 text-gold-light text-xs font-medium px-3 py-1.5 rounded-full">
              First-time customers: 10% off all items
            </span>
            <span className="bg-gold/20 text-gold-light text-xs font-medium px-3 py-1.5 rounded-full">
              Senior &amp; Veteran: 10% off
            </span>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 bg-cream">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((cat) => (
              <Link
                key={cat.slug}
                href={`/menu/${cat.slug}`}
                className="group bg-warm-white rounded-2xl border border-cream-dark hover:shadow-lg hover:border-forest/20 transition-all overflow-hidden"
              >
                {cat.image ? (
                  <div className="relative h-40 w-full">
                    <Image
                      src={cat.image}
                      alt={cat.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                ) : (
                  <div className="h-40 w-full bg-forest/5 flex items-center justify-center">
                    <span className="text-6xl">{cat.icon}</span>
                  </div>
                )}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h2 className="font-heading text-xl font-bold text-forest">
                      {cat.name}
                    </h2>
                    <span className="text-xs text-charcoal-light bg-cream-dark px-2 py-1 rounded-full">
                      {cat.products.length} items
                    </span>
                  </div>
                  <p className="text-charcoal-light text-sm leading-relaxed line-clamp-2">
                    {cat.description}
                  </p>
                  <span className="inline-block mt-4 text-copper text-sm font-semibold group-hover:text-copper-light transition-colors">
                    Browse {cat.name} &rarr;
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-plum/10 py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h3 className="font-heading text-2xl font-bold text-forest mb-4">
            Menu Always Evolving
          </h3>
          <p className="text-charcoal-light leading-relaxed mb-4">
            We carry <strong>477+ products</strong> across all categories. Our
            selection rotates to bring you the best of what California has to
            offer. For real-time availability and daily specials, give us a call
            or visit us in person.
          </p>
          <p className="text-sm text-charcoal-light/70 mb-6">
            All prices include tax. Rewards members earn $1 for every $20 spent.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-copper hover:bg-copper-light text-cream px-8 py-3 rounded-full font-medium transition-colors text-sm uppercase tracking-wide"
            >
              Get in Touch
            </Link>
            <a
              href="tel:+14159137489"
              className="border border-forest/30 hover:border-forest text-forest px-8 py-3 rounded-full font-medium transition-colors text-sm uppercase tracking-wide"
            >
              Call (415) 913-7489
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
