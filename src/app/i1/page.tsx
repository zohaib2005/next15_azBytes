import Link from "next/link";

export default function I1() {
  return (
    <h2>
      I1 Page <Link href={"/i1/i2"}>I2</Link>
    </h2>
  );
}
