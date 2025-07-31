import Product from "@/components/Product/page";
import Review from "@/components/Review/page";
import { Suspense } from "react";

export default async function ProductReview() {
  return (
    <div>
      <h2>Product Review</h2>
      <Suspense fallback="Product Loading...">
        <Product />
      </Suspense>
      <Suspense fallback="Review Loading...">
        <Review />
      </Suspense>
    </div>
  );
}
