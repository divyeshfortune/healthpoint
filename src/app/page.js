import Blog from "@/components/Blog";
import CardService from "@/components/CardService";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import MedicineService from "@/components/MedicineService";
import SupportGroups from "@/components/SupportGroups";
import TeamDoctors from "@/components/TeamDoctors";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <>
      <Header/>
      <Hero/>
      <MedicineService/>
      <CardService/>
      <SupportGroups/>
      <TeamDoctors/>
      <Testimonials/>
      <Blog/>
      <Contact/>
      <Footer/>
    </>
  );
}
