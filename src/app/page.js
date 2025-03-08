import Benefit from "@/components/Benefit/Benefit";
import Benefits from "@/components/Benefits/Benefits";
import Clients from "@/components/Clients";
import Growth from "@/components/Growth/Growth";
import Navbar from "@/components/Navbar";
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
    
    {/* <Benefits/> */}
   
   
    
    </>
  );
}
