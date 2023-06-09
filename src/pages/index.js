import Features from "@/components/features";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import Objectives from "@/components/objectives";
import Technologies from "@/components/stack";


export default function Home() {
  return (
    <main className="">
      <Hero />
      <Features/>
      <Objectives/>
      <Technologies/>
      <Footer/>
    </main>
  );
}
