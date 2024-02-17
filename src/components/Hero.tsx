"use client";

import { cn } from "@/lib/utils";
import { ComponentProps } from "@/types/component-props";
import React from "react";

interface HeroProps extends ComponentProps {}

export const Hero = ({ children, className }: HeroProps) => {
  return (
    <main
      className={cn(
        `bg-hero h-[84vh] bg-cover bg-bottom bg-no-repeat py-12 lg:py-24 lg:pt-10 ${className}`,
      )}
    >
      <div className="container mx-auto">
        <>{children}</>
      </div>
    </main>
  );
};
