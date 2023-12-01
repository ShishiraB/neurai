import { ThemeProvider } from "@/components/providers/theme-provider";
import { Footer } from "./_components/footer";
import { Navbar } from "./_components/navbar";
import { ClerkProvider } from '@clerk/nextjs';
import { dark } from '@clerk/themes';


const MarketingLayout = ({
  children
}: {
  children: React.ReactNode;
}) => {
  return (

    <ThemeProvider
        attribute='class'
        defaultTheme='system'
        enableSystem
        disableTransitionOnChange
        storageKey='neurai-theme'
        >
    <div className="h-full">
      <Navbar />
      <main className="pt-40 pb-20">
        {children}
      </main>
      <Footer />
    </div>

    </ThemeProvider>

  );
};

export default MarketingLayout;
