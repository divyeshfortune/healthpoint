import CardService from "@/components/CardService";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import MedicineService from "@/components/MedicineService";
import SupportGroups from "@/components/SupportGroups";
import TeamDoctors from "@/components/TeamDoctors";

export default function Home() {
  return (
    <>
      <Header/>
      <Hero/>
      <MedicineService/>
      <CardService/>
      <SupportGroups/>
      <TeamDoctors/>
    </>
  );
}
