'use client'
import { OrganizationProfile } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import { useTheme } from "next-themes";

const SettingsPage = () => {
  const { theme } = useTheme();
  return (
    <div className="w-full">
     <OrganizationProfile
      appearance={{
        elements: {
          rootBox: {
            boxShadow: "none",
            width: "100%"
          },
          card: {
            border: "1px solid #e5e5e5",
            boxShadow: "none",
            width: "100%"
          },
        },baseTheme: theme === "dark" ? dark : undefined,
      }}
     />
    </div>
  );
};

export default SettingsPage;
