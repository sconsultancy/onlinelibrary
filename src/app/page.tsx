"use client";
import Navbar from "@/components/Navbar";
import Main from "@/components/Main";
import Services from "@/components/Services";
import Show from "@/components/Show";
import Footer from "@/components/Footer";
export default function Home() {
  return (
    <div>
      <Navbar></Navbar>
      <Main></Main>
      <Services></Services>
      <Show></Show>
      <Footer></Footer>
    </div>
  );
}
