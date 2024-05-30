'use client';

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu"

export default function Header(){
  return (
    <header className="div p-5 text-white flex justify-between align-center">
      <div className="logo">
        <h1 className="text-3xl">NEUN</h1>
      </div>
      <div className="mr-10 mt-2 text-md">
        {/* <a className="ml-6" href="/#hello">Link One</a> */}
        {/* <a className="ml-6" href="/#hello">Link Two</a> */}
        {/* <a className="ml-6" href="/#hello">Link Three</a> */}
      </div>
    </header>
  );
}