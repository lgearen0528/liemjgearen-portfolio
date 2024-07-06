import Intro from "@/components/intro";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <Intro />
      <h1>Experiences</h1>
      <h1>Projects</h1>
      <h1>Contact</h1>
    </main>
  );
}
