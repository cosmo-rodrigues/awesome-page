"use client";

import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

import * as MyComponents from ".";
import { ComponentProps } from "@/types/component-props";

interface HeaderProps extends ComponentProps {}

export const Header = ({ className }: HeaderProps) => {
  const pathname = usePathname();

  return (
    <header
      className={cn(
        `sticky top-0 z-30 py-6 transition-all ${
          pathname === "/" && "bg-[#fef9f5]"
        } font-aaux`,
        className,
      )}
    >
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <div className="hidden flex-col lg:flex">
            <MyComponents.Nav
              containerStyles="lg:flex gap-x-8 items-center"
              linkStyles="relative text-secondary hover:text-primary transition-all"
              underlineStyles="absolute left-0 top-full h-[3px] bg-secondary w-full mt-[9px]"
            />
            <div className="mt-[10px] h-[3px]  w-[60vw] bg-gradient-to-r from-gray-400 to-transparent" />
          </div>
          <div className="ml-auto flex items-center gap-x-6">
            <MyComponents.ProfileButton />
            <MyComponents.Logo className="h-[32px] w-[228px]" />
            <div className="lg:hidden">
              <MyComponents.MobileNav />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
