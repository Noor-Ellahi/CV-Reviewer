"use client";

import axios from "axios";
import { useRef } from "react";


// Comps
import Navbar from "@/components/Navbar/Navbar";
import Hero from "@/components/Hero/Hero";
import HowItWorks from "@/components/HowItWorks";
import Footer from "@/components/Footer/Footer";



export default function Home() {

  return (
    // <div className="flex min-h-screen flex-col items-center justify-center">
    //   <input type="file" ref={fileRef} className="border border-red-300 p-2 w-50"/>
    //   <textarea ref={textRef} className="border border-red-300 p-2 w-50 h-50" placeholder="Enter text here..."></textarea>
    //   <button
    //    className="bg-blue-500 text-white px-4 py-2 rounded mt-4"
    //     onClick={review}
    //   >Review</button>
    // </div>

    <div>
      <Navbar />
      <Hero />
      <HowItWorks/>
      <Footer/>
    </div>
  );
}
