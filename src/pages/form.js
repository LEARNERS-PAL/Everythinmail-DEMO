import ContactForm from "@/components/contact-form";
import Navbar from "@/components/navbar";

export default function Form() {
  return (
    <main className="2xl:h-screen overflow-hidden font-serif">
      <Navbar />
      <ContactForm />
    </main>
  );
}
