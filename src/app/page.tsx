import Link from "next/link";

export default function Blog() {
  return (
    <div>
      <h2>Blog</h2>
      <Link href={"/server"}>Server</Link>
      <Link href={"/client"}>Client</Link>
    </div>
  );
}
