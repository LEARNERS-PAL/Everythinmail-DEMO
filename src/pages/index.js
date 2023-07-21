import Features from "@/components/features";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import Objectives from "@/components/objectives";
import Technologies from "@/components/stack";


export default function Home() {
  return (
    <main className="">
      <Hero />
      <Technologies/>
      <Objectives/>
      <Features/>
      <Footer/>
    </main>
  );
}
