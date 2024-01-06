import Footer from "~/components/common/Footer";
import Header from "~/components/common/HeaderSessionAuto";
import Hero from "~/components/landing/Hero";
import Services from "~/components/landing/Services";
import Showcase from "~/components/landing/Showcase";
import Why from "~/components/landing/Why";

export default function Home() {
  return (
    <>
      <Header />
      <main className="bg-primaryBase flex min-h-screen flex-col items-center justify-center">
        <Hero />
        <Showcase />
        <Services />
        <Footer />
      </main>
    </>
  );
}
