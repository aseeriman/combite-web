import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import WorkflowOS from "@/components/WorkflowOS";
import WhatWeBuild from "@/components/WhatWeBuild";
import Blueprint from "@/components/Blueprint";
import ProofInPractice from "@/components/ProofInPractice";
import Process from "@/components/Process";
import Integrations from "@/components/Integrations";
import ControlByDesign from "@/components/ControlByDesign";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import CursorGlow from "@/components/CursorGlow";

export default function Home() {
  return (
    <div className="overflow-x-hidden bg-space">
      <CursorGlow />
      <Nav />
      <Hero />
      <WorkflowOS />
      <WhatWeBuild />
      <Blueprint />
      <ProofInPractice />
      <Process />
      <Integrations />
      <ControlByDesign />
      <FAQ />
      <FinalCTA />
      <Footer />
    </div>
  );
}
