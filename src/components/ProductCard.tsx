import Link from "next/link";
import type { Product } from "@/data/products";

export default function ProductCard({
  product,
  href,
}: {
  product: Product;
  href?: string;
}) {
  const onSale = product.salePrice !== undefined;

  const content = (
    <>
      <div className="flex justify-between items-start gap-2">
        <div className="min-w-0">
          <p className="font-semibold text-charcoal text-sm truncate">
            {product.name}
          </p>
          <p className="text-xs text-charcoal-light">{product.brand}</p>
        </div>
        <div className="text-right flex-shrink-0">
          {onSale ? (
            <>
              <span className="text-xs text-charcoal-light line-through block">
                ${product.price.toFixed(2)}
              </span>
              <span className="text-sm font-bold text-copper">
                ${product.salePrice!.toFixed(2)}
              </span>
            </>
          ) : (
            <span className="text-sm font-bold text-forest">
              ${product.price.toFixed(2)}
            </span>
          )}
        </div>
      </div>
      <div className="flex items-center gap-2 mt-2">
        {product.thc && (
          <span className="text-[10px] font-medium bg-forest/8 text-forest px-2 py-0.5 rounded-full">
            {product.thc.includes("mg") || product.thc.includes("CBD")
              ? product.thc
              : `THC ${product.thc}`}
          </span>
        )}
        {product.weight && (
          <span className="text-[10px] font-medium bg-plum/8 text-plum-dark px-2 py-0.5 rounded-full">
            {product.weight}
          </span>
        )}
        {onSale && (
          <span className="text-[10px] font-bold bg-copper/15 text-copper px-2 py-0.5 rounded-full uppercase">
            Sale
          </span>
        )}
      </div>
    </>
  );

  const className =
    "bg-cream rounded-xl p-4 border border-cream-dark hover:border-forest/20 transition-colors block";

  if (href) {
    return (
      <Link href={href} className={className}>
        {content}
      </Link>
    );
  }

  return <div className={className}>{content}</div>;
}
