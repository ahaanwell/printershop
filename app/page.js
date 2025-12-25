import Categories from "@/components/Categories";
import CustomerReviews from "@/components/CustomerReviews";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ProductsList from "@/components/ProductsList";
import WhyShopWithUs from "@/components/WhyShopWithUs";
import WorkspacePrintersSection from "@/components/WorkspacePrintersSection";
import Image from "next/image";

export default function Home() {
  return (
    <>
     <Header/>
     <HeroSection/>
     <Categories/>
     <WorkspacePrintersSection/>
     <ProductsList/>
     <CustomerReviews/>
     <WhyShopWithUs/>
     <Footer/>
    </>
  );
}
