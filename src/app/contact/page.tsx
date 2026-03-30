"use client";

import Image from "next/image";
import { useState } from "react";

const hours = [
  { day: "Every Day", time: "9:00 AM — 10:00 PM" },
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <>
      {/* Hero */}
      <section className="bg-forest text-cream py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-6">
            Come Visit Us
          </h1>
          <p className="text-cream/80 text-lg leading-relaxed max-w-2xl mx-auto">
            We&apos;d love to see you. Whether you have a question, want to
            learn about our products, or just want to say hi — our door is
            always open.
          </p>
        </div>
      </section>

      <section className="py-20 bg-cream">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-warm-white rounded-2xl p-8 md:p-10 border border-cream-dark">
              <h2 className="font-heading text-2xl font-bold text-forest mb-6">
                Send Us a Message
              </h2>

              {submitted ? (
                <div className="text-center py-12">
                  <span className="text-4xl block mb-4">💌</span>
                  <h3 className="font-heading text-xl font-bold text-forest mb-2">
                    Thank You!
                  </h3>
                  <p className="text-charcoal-light">
                    We&apos;ll get back to you as soon as possible.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-charcoal mb-1.5"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full border border-cream-dark rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-forest/30 bg-cream"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-charcoal mb-1.5"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full border border-cream-dark rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-forest/30 bg-cream"
                      placeholder="you@email.com"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-charcoal mb-1.5"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      className="w-full border border-cream-dark rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-forest/30 bg-cream resize-none"
                      placeholder="How can we help?"
                    />
                  </div>
                  <button
                    type="submit"
                    className="bg-copper hover:bg-copper-light text-cream px-8 py-3 rounded-full font-medium transition-colors text-sm uppercase tracking-wide w-full"
                  >
                    Send Message
                  </button>
                </form>
              )}
            </div>

            {/* Info */}
            <div className="space-y-8">
              {/* Location */}
              <div className="bg-warm-white rounded-2xl p-8 border border-cream-dark">
                <h3 className="font-heading text-xl font-bold text-forest mb-4">
                  Location
                </h3>
                <address className="not-italic text-charcoal-light leading-relaxed">
                  <p className="font-medium text-charcoal">
                    Magic Flower Cannabis
                  </p>
                  <p>906 Post St</p>
                  <p>San Francisco, CA 94109</p>
                  <p className="mt-3">Lower Nob Hill neighborhood</p>
                </address>
                <div className="mt-6 relative rounded-xl overflow-hidden h-48">
                  <Image
                    src="/magicflower-storefron2.webp"
                    alt="Magic Flower Cannabis storefront exterior"
                    fill
                    className="object-cover object-center"
                  />
                </div>
              </div>

              {/* Hours */}
              <div className="bg-warm-white rounded-2xl p-8 border border-cream-dark">
                <h3 className="font-heading text-xl font-bold text-forest mb-4">
                  Hours
                </h3>
                <div className="space-y-3">
                  {hours.map((h) => (
                    <div
                      key={h.day}
                      className="flex justify-between text-sm"
                    >
                      <span className="text-charcoal font-medium">{h.day}</span>
                      <span className="text-charcoal-light">{h.time}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Contact Details */}
              <div className="bg-warm-white rounded-2xl p-8 border border-cream-dark">
                <h3 className="font-heading text-xl font-bold text-forest mb-4">
                  Reach Out
                </h3>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center gap-3">
                    <span className="text-lg">📞</span>
                    <a
                      href="tel:+14159137489"
                      className="text-copper hover:text-copper-light transition-colors"
                    >
                      (415) 913-7489
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-lg">✉️</span>
                    <a
                      href="mailto:hello@magicflowercannabis.com"
                      className="text-copper hover:text-copper-light transition-colors"
                    >
                      hello@magicflowercannabis.com
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-lg">📸</span>
                    <a
                      href="#"
                      className="text-copper hover:text-copper-light transition-colors"
                    >
                      @magicflowercannabis
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
