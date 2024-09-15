import type { Metadata } from "next";
import '@radix-ui/themes/styles.css'
import { Theme } from '@radix-ui/themes'
import { AuthButtonServer } from "./api/AuthButton.server";

export const metadata: Metadata = {
  title: "Foodie",
  description: "Food ",
};
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
          <Theme 
            appearance="dark" 
            scaling="100%" 
            accentColor="mint" 
            grayColor="gray" 
            radius="medium"
            
            >
            {/* <AuthButtonServer /> */}
            {children}
          </Theme>
        </body>
    </html>
  );
}
