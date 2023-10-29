import Link from "next/link";
import { Button } from "@nextui-org/button";
import { ThemeSwitcher } from "./components/ThemeSwitcher";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="dark:text-blue-500 text-red-500">Firebase</h1>
      <Link
        href="/learn"
        className="text-2xl font-bold underline hover:underline-offset-4"
      >
        Learn
      </Link>
      <Button>Hello</Button>
      <ThemeSwitcher />
    </main>
  );
}
