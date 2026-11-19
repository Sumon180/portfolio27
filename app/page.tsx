import Image from "next/image";
import Hero from "./sections/hero/Hero";
import About from "./sections/about/About";

export default function Home() {
  return (
    <div>
      <Hero />
      <About />
    </div>
  );
}
