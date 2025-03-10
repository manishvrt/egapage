import Benefit from "@/components/Benefit/Benefit";
import Benefits from "@/components/Benefits/Benefits";
import Clients from "@/components/Clients";
import Forea from "@/components/Forea/Forea";
import Growth from "@/components/Growth/Growth";
import Insights from "@/components/Insights/Insights";
import Navbar from "@/components/Navbar";
import Progain from "@/components/Progain";
import Proview from "@/components/Proview";
import Stats from "@/components/Stats";
import WhoFor from "@/components/Who/WhoFor";
import WhoNot from "@/components/Who/WhoNot";
import Why from "@/components/Why/Why";
import Image from "next/image";

export default function Home() {
  return (
    <>
    <Navbar/>
    
    <Clients/>
    <Stats/>
    <Why/>
    {/* <Benefit/> */}
    <WhoNot/>
    <Forea/>
    <Insights/>
    <Proview/>
    <Progain/>
    
    {/* <Benefits/> */}
   
   
    
    </>
  );
}
