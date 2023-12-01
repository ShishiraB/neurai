import { Toaster } from "sonner";


import { ModalProvider } from "@/components/providers/modal-provider";
import { QueryProvider } from "@/components/providers/query-provider";
import { ClerkProvider } from '@clerk/nextjs';
import { dark } from '@clerk/themes';
import {neobrutalism} from "@clerk/themes";

const PlatformLayout = ({
  children
}: {
  children: React.ReactNode;
}) => {
  return (
    <ClerkProvider

appearance={{
        baseTheme: neobrutalism
      }}>
      <QueryProvider>
        <Toaster />
        <ModalProvider />
        {children}
      </QueryProvider>
    </ClerkProvider>
  );
};

export default PlatformLayout;
