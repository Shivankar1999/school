'use client'
import Footer from "@/components/Fotter";
import CollegePage from "@/components/Mainsection";
import Navbar from "@/components/Navbar";
import ProfilePage from "@/components/Profile";
import Image from "next/image";

export default function Home() {
  return (
    <>
 
   <Navbar />
   <ProfilePage/>
   <CollegePage />
   <Footer />
   </>
  );
}
