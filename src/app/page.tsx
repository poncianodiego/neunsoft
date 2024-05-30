import Image from "next/image";

import Header from "@/components/header"
import Thunders from "@/components/thunders"

export default function Home() {

  const currentYear = new Date().getFullYear();

  return (
  <div className="main bg-black min-h-screen text-white">
    <Thunders></Thunders>
    <Header></Header>
    <div className="hero mt-48 md:mt-40 text-center px-5">
      <h1 className="text-5xl font-thin leading-relaxed">Revolutionazing Software Develoment</h1>
      {/* <h2 className="mt-4">Find Out Why</h2> */}
    </div>
    <footer className="absolute bottom-2 w-full text-center">
      <div className="footer text-white text-center p-5 font-thin text-sm">
        <p>&copy; {currentYear} NEUN - contact@neunsoft.com</p>
      </div>
    </footer>
  </div>
  );
}
