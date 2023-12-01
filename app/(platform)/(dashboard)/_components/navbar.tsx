import { Plus } from "lucide-react";
import { OrganizationSwitcher, UserButton } from "@clerk/nextjs";

import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import { FormPopover } from "@/components/form/form-popover";

import { MobileSidebar } from "./mobile-sidebar";
import { ModeToggle } from "@/components/mode-toggle";

export const Navbar = () => {
  return (
    <nav className="fixed z-50 top-0 px-4 w-full h-14 border-b shadow-sm flex items-center">
      <MobileSidebar />
      <div className="flex items-center gap-x-4">
        <div className="hidden md:flex">
          <Logo />
        </div>
        

       
        
      </div>
      <div className="ml-auto flex items-center gap-x-2">
      <FormPopover align="start" side="bottom" sideOffset={18}>
        <Button variant="primary" size="sm" className="rounded-sm hidden md:block h-auto py-1.5 px-2" style={{ backgroundColor: '#4e3d8f', color: '#fff' }}>
  Create
</Button>


        </FormPopover>


        <FormPopover>
          <Button variant="primary" size="sm" className="rounded-sm block md:hidden "style={{ backgroundColor: '#4e3d8f', color: '#fff' }}>
            <Plus className="h-4 w-4" />
          </Button>
        </FormPopover>

        <OrganizationSwitcher
          hidePersonal
          afterCreateOrganizationUrl="/organization/:id"
          afterLeaveOrganizationUrl="/select-org"
          afterSelectOrganizationUrl="/organization/:id"
          appearance={{
            elements: {
              rootBox: {
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              },
            },
          }}
        />
        <ModeToggle></ModeToggle>

        <UserButton
          afterSignOutUrl="/"
          appearance={{
            elements: {
              avatarBox: {
                height: 30,
                width: 30,
              }
            }
          }}
        />
      </div>

      
    </nav>
  );
};
