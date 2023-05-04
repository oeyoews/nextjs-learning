import Image from "next/image";
import Router from "next/router";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="font-bold text-5xl">NextJs Demo</h1>
    </main>
  );
}
