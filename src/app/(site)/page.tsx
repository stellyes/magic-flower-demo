import Image from "next/image";
import Link from "next/link";

const categories = [
  {
    name: "Flower",
    description: "Hand-selected strains grown with care by trusted local cultivators.",
    icon: "🌿",
  },
  {
    name: "Pre-Rolls",
    description: "Ready to enjoy. Perfectly rolled with premium flower every time.",
    icon: "🌀",
  },
  {
    name: "Edibles",
    description: "Delicious gummies, chocolates, and baked goods crafted for consistency.",
    icon: "🍬",
  },
  {
    name: "Topicals",
    description: "Soothing balms and lotions for targeted relief and relaxation.",
    icon: "🧴",
  },
  {
    name: "Tinctures",
    description: "Precise, easy-to-dose drops for personalized wellness routines.",
    icon: "💧",
  },
  {
    name: "Accessories",
    description: "Quality papers, pipes, and tools to complete your experience.",
    icon: "✨",
  },
];

const testimonials = [
  {
    quote: "Walking into Magic Flower feels like visiting a friend. They actually listen to what you need.",
    name: "Marissa T.",
    detail: "Loyal customer since day one",
    image: "/magicflower-customers7.webp",
  },
  {
    quote: "Best dispensary vibes in the city. Knowledgeable staff, great selection, no pretension.",
    name: "James L.",
    detail: "Lower Nob Hill neighbor",
    image: "/magicflower-customers8.webp",
  },
  {
    quote: "They helped me find the perfect tincture for my sleep issues. Life-changing honestly.",
    name: "David K.",
    detail: "Wellness-focused customer",
    image: "/magicflower-customers5..webp",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-forest text-cream overflow-hidden">
        <Image
          src="/magicflower-customers3.webp"
          alt="Inside Magic Flower Cannabis dispensary"
          fill
          className="object-cover opacity-60"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-gold-light/45 via-gold-light/35 to-gold-light/55" />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-24 md:py-36 flex flex-col items-center text-center">
          <Image
            src="/logo.png"
            alt="Magic Flower Cannabis"
            width={140}
            height={140}
            className="mb-8 [filter:drop-shadow(0_0_6px_rgba(255,255,255,0.8))_drop-shadow(0_0_20px_rgba(255,255,255,0.4))]"
          />
          <h1 className="font-heading text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Wellness Rooted in
            <span className="text-gold-light block mt-1">Community</span>
          </h1>
          <p className="text-lg md:text-xl text-cream/80 max-w-2xl mb-10 leading-relaxed">
            San Francisco&apos;s newest 100% equity-owned dispensary. We believe
            cannabis is personal — and so is how we serve you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/menu"
              className="bg-copper hover:bg-copper-light text-cream px-8 py-3 rounded-full font-medium transition-colors text-sm uppercase tracking-wide"
            >
              Browse Our Menu
            </Link>
            <Link
              href="/about"
              className="border border-cream/30 hover:border-gold-light hover:text-gold-light text-cream px-8 py-3 rounded-full font-medium transition-colors text-sm uppercase tracking-wide"
            >
              Our Story
            </Link>
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="bg-cream py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative rounded-2xl overflow-hidden aspect-[4/5]">
              <Image
                src="/magicflower-customers1.webp"
                alt="Magic Flower Cannabis owners in the shop"
                fill
                className="object-cover"
              />
            </div>
            <div className="text-center md:text-left">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-forest mb-6">
                More Than a Dispensary
              </h2>
              <p className="text-charcoal-light text-lg leading-relaxed mb-8">
                Magic Flower was born from a simple belief: everyone deserves access
                to quality cannabis in a space that feels welcoming, safe, and
                personal. We&apos;re not a chain. We&apos;re your neighbors —
                passionate about plants, people, and this incredible city we call
                home.
              </p>
              <Link
                href="/about"
                className="inline-block text-copper font-semibold hover:text-copper-light transition-colors border-b-2 border-copper hover:border-copper-light"
              >
                Learn more about our story &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-20 bg-warm-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-forest mb-4">
              What We Carry
            </h2>
            <p className="text-charcoal-light text-lg max-w-2xl mx-auto">
              Thoughtfully curated products from trusted growers and makers.
              Something for everyone, from first-timers to connoisseurs.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((cat) => (
              <div
                key={cat.name}
                className="bg-cream rounded-2xl p-8 text-center hover:shadow-lg transition-shadow border border-cream-dark"
              >
                <span className="text-4xl mb-4 block">{cat.icon}</span>
                <h3 className="font-heading text-xl font-bold text-forest mb-2">
                  {cat.name}
                </h3>
                <p className="text-charcoal-light text-sm leading-relaxed">
                  {cat.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Neighborhood */}
      <section className="relative bg-plum text-cream py-20 overflow-hidden">
        <Image
          src="/magicflower-storefront3.webp"
          alt="Magic Flower Cannabis storefront in Lower Nob Hill"
          fill
          className="object-cover opacity-25"
        />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
            Proud to Be in Lower Nob Hill
          </h2>
          <p className="text-cream/80 text-lg leading-relaxed mb-6">
            Our neighborhood is a melting pot of food, culture, nightlife, and
            community. We&apos;re right in the heart of it — an easy walk from
            Union Square, the Tenderloin, and Polk Street. Come for the cannabis,
            stay for the conversation.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-10 text-center">
            <div>
              <p className="text-3xl font-bold text-gold-light">2024</p>
              <p className="text-cream/60 text-sm mt-1">Established</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-gold-light">100%</p>
              <p className="text-cream/60 text-sm mt-1">Equity Owned</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-gold-light">SF</p>
              <p className="text-cream/60 text-sm mt-1">Born & Raised</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-cream py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-forest text-center mb-14">
            What Our Community Says
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t) => (
              <blockquote
                key={t.name}
                className="bg-warm-white rounded-2xl overflow-hidden border border-cream-dark"
              >
                <div className="relative h-48 w-full">
                  <Image
                    src={t.image}
                    alt={t.name}
                    fill
                    className="object-cover object-top"
                  />
                </div>
                <div className="p-8">
                  <p className="text-charcoal italic leading-relaxed mb-6">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <footer>
                    <p className="font-semibold text-forest">{t.name}</p>
                    <p className="text-sm text-charcoal-light">{t.detail}</p>
                  </footer>
                </div>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative bg-forest text-cream py-16 overflow-hidden">
        <Image
          src="/magicflower-storefron2.webp"
          alt="Magic Flower Cannabis exterior"
          fill
          className="object-cover opacity-20"
        />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
            Come Say Hello
          </h2>
          <p className="text-cream/70 text-lg mb-8">
            We&apos;d love to meet you. Stop by, explore our menu, and let us
            help you find exactly what you&apos;re looking for.
          </p>
          <Link
            href="/contact"
            className="bg-copper hover:bg-copper-light text-cream px-10 py-3 rounded-full font-medium transition-colors text-sm uppercase tracking-wide inline-block"
          >
            Visit Us
          </Link>
        </div>
      </section>
    </>
  );
}
