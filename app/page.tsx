// import { useEffect } from "react";
// import { useTheme } from "next-themes";
import Head from "next/head";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Info from "@/components/Info";


export default function Home() {

  return (
    <>
      <Head>
        <title>Theerat's Port</title>
        <link rel="icon" href="/Avatar-white.svg" />
      </Head>
      <Navbar
        navigationType={"single"}
        items={[
          {
            name: "Home",
            path: "#home",
          },
          { name: "Booking", path: "#booking" },
          {
            name: "Your Booking",
            path: "#your-booking",
          },
        ]}
      />
      <div className="lg:min-h-screen px-10 sm:px-20 md:px-32 lg:mb-12 lg:px-60 mx-auto max-w-[75rem]">
        <Info />
      </div>
      
    </>
  );
}