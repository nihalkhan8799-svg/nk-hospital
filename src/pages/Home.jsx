import HomeAbout from "../components/HomeAbout";
import QuickAccess from "../components/QuickAccess";
import HeroSection from "../components/HeroSection";
import TrustSection from "../components/TrustSection";
import ServicesSection from "../components/ServicesSection";
import FeaturedDoctors from "../components/FeaturedDoctors";
import AppointmentCTA from "../components/AppointmentCTA";

function Home() {
  return (
    <>
      <HeroSection />

      <QuickAccess />

      <HomeAbout />

      <TrustSection />

      <ServicesSection />

      <FeaturedDoctors />

      <AppointmentCTA />
    </>
  );
}

export default Home;