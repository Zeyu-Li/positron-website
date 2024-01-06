import Footer from "~/components/common/Footer";
import Header from "~/components/common/HeaderSessionAuto";
import Hero from "~/components/landing/Hero";
import Showcase from "~/components/landing/Showcase";
import Why from "~/components/landing/Why";

export default function Home() {
  return (
    <>
      <Header />
      <main className="bg-primary flex min-h-screen flex-col items-center justify-center">
        <Hero />
        <Showcase />
        <Footer />
      </main>
    </>
  );
}
