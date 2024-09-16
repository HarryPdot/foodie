import "@radix-ui/themes/styles.css";

import { Theme } from "@radix-ui/themes";
import type { Metadata } from "next";

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
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
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
