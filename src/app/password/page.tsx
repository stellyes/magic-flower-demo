"use client";

import Image from "next/image";
import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

function PasswordForm() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const searchParams = useSearchParams();

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // Set cookie then do a full page redirect so middleware re-evaluates
    document.cookie = `mf-auth=${password}; path=/; max-age=${60 * 60 * 24 * 30}; SameSite=Lax`;
    const next = searchParams.get("next") || "/";
    window.location.href = next;
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 w-full max-w-xs">
      <div>
        <input
          type="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
            setError(false);
          }}
          placeholder="Enter password"
          className="w-full border border-cream-dark rounded-xl px-4 py-3 text-sm text-center focus:outline-none focus:ring-2 focus:ring-forest/30 bg-cream"
          autoFocus
        />
        {error && (
          <p className="text-red-500 text-xs text-center mt-2">
            Incorrect password. Please try again.
          </p>
        )}
      </div>
      <button
        type="submit"
        className="bg-copper hover:bg-copper-light text-cream px-8 py-3 rounded-full font-medium transition-colors text-sm uppercase tracking-wide w-full"
      >
        Enter Site
      </button>
    </form>
  );
}

export default function PasswordPage() {
  return (
    <div className="min-h-screen bg-forest flex flex-col items-center justify-center px-4">
      <div className="text-center mb-8">
        <Image
          src="/logo.png"
          alt="Magic Flower Cannabis"
          width={100}
          height={100}
          className="mx-auto mb-6"
          style={{ filter: "drop-shadow(0 0 12px rgba(255,255,255,0.4))" }}
        />
        <h1 className="font-heading text-3xl font-bold text-cream mb-2">
          Magic Flower Cannabis
        </h1>
        <p className="text-cream/60 text-sm">
          This site is password protected.
        </p>
      </div>
      <Suspense>
        <PasswordForm />
      </Suspense>
    </div>
  );
}
