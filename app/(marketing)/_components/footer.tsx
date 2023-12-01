'use client';

import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";

export const Footer = () => {
  const handleClick = () => {
    window.open('https://github.com/ShishiraB/neurai.git', '_blank');
  };
  return (
    <div className="fixed bottom-0 w-full p-4 border-t">
      <div className="md:max-w-screen-2xl mx-auto flex items-center w-full justify-between">
        <Logo />
        <div className="space-x-4 md:block md:w-auto flex items-center justify-between w-full">
          <Button size="sm" variant="ghost" onClick={handleClick}>
            GitHub    
          </Button>
        </div>
      </div>
    </div>
  );
};
