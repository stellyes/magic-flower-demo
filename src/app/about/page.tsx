import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Story | Magic Flower Cannabis",
  description:
    "Learn about Magic Flower Cannabis — San Francisco's newest equity-owned dispensary, founded in 2024 with a mission to serve our community with care.",
};

const values = [
  {
    title: "Wellness First",
    description:
      "We believe cannabis is a tool for wellbeing. Every product on our shelves is chosen with your health and comfort in mind.",
    icon: "🌱",
  },
  {
    title: "Equity & Access",
    description:
      "As a 100% equity-owned dispensary, we're committed to making the cannabis industry more inclusive and representative of the communities it serves.",
    icon: "🤝",
  },
  {
    title: "Community Roots",
    description:
      "We're not just in Lower Nob Hill — we're part of it. We support local, shop local, and show up for our neighbors.",
    icon: "🏘️",
  },
  {
    title: "Quality You Can Trust",
    description:
      "We partner with growers and makers who share our standards. Every product is lab-tested, ethically sourced, and thoughtfully selected.",
    icon: "✅",
  },
];

const team = [
  {
    name: "Founder Name",
    role: "Founder & Owner",
    bio: "A lifelong San Francisco resident with a passion for plant medicine and community building.",
    image: "/magicflower-customers2.webp",
  },
  {
    name: "Team Member",
    role: "General Manager",
    bio: "Bringing years of cannabis industry experience and a genuine love for helping people find what works for them.",
    image: "/magicflower-customers4.webp",
  },
  {
    name: "Team Member",
    role: "Lead Budtender",
    bio: "Certified cannabis consultant who believes education is the best product we offer.",
    image: "/magicflower-customers6.webp",
  },
];

export default function About() {
  return (
    <>
      {/* Hero */}
      <section className="bg-forest text-cream py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-6">
            Our Story
          </h1>
          <p className="text-cream/80 text-lg leading-relaxed max-w-2xl mx-auto">
            Magic Flower Cannabis was founded in 2024 with a dream: to build a
            dispensary that feels like home. A place where every customer is
            known, every question is welcome, and every visit leaves you feeling
            cared for.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 bg-cream">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-heading text-3xl font-bold text-forest mb-6">
                Born from Belief
              </h2>
              <div className="space-y-4 text-charcoal-light leading-relaxed">
                <p>
                  When we opened our doors in Lower Nob Hill, we knew we were
                  stepping into something special. This neighborhood — alive with
                  food, culture, and creativity — deserved a cannabis shop that
                  matched its spirit.
                </p>
                <p>
                  As San Francisco&apos;s newest 100% equity-owned dispensary,
                  we carry a responsibility we don&apos;t take lightly. The
                  equity program exists to right historic wrongs, and we honor
                  that mission every day by building a business that puts people
                  before profit.
                </p>
                <p>
                  We take the time to learn your name, understand what
                  you&apos;re looking for, and guide you to products that
                  genuinely fit your needs. No upselling. No rush. Just real
                  care from real people.
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="relative rounded-3xl overflow-hidden aspect-[4/3]">
                <Image
                  src="/magicflower-storefront3.webp"
                  alt="Magic Flower Cannabis storefront"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative rounded-3xl overflow-hidden aspect-[4/3]">
                <Image
                  src="/magicflower-storefront1.webp"
                  alt="Inside Magic Flower Cannabis dispensary"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-warm-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-forest text-center mb-14">
            What We Stand For
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {values.map((v) => (
              <div
                key={v.title}
                className="bg-cream rounded-2xl p-8 border border-cream-dark"
              >
                <span className="text-3xl mb-4 block">{v.icon}</span>
                <h3 className="font-heading text-xl font-bold text-forest mb-3">
                  {v.title}
                </h3>
                <p className="text-charcoal-light leading-relaxed text-sm">
                  {v.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-cream">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-forest text-center mb-14">
            The People Behind the Plant
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member) => (
              <div
                key={member.name + member.role}
                className="text-center"
              >
                <div className="w-40 h-40 rounded-full bg-forest/10 mx-auto mb-6 overflow-hidden relative">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="font-heading text-lg font-bold text-forest">
                  {member.name}
                </h3>
                <p className="text-copper text-sm font-medium mb-3">
                  {member.role}
                </p>
                <p className="text-charcoal-light text-sm leading-relaxed">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
