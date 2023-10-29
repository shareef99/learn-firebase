import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Link
        href="/learn"
        className="text-2xl font-bold underline hover:underline-offset-4"
      >
        Learn
      </Link>
    </main>
  );
}
