import type { Metadata } from "next";
import '@radix-ui/themes/styles.css'
import { Theme } from '@radix-ui/themes'
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
          <Theme appearance="dark" scaling="100%">
            {children}
          </Theme>
        </body>
    </html>
  );
}
