import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { StoreProvider } from "@config/store-provider";
import ThemeProvider from "@config/theme-provider";

import "@shared/styles/globals.scss";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "le vu trang dai",
  description: "front-end developer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <StoreProvider>
      <html lang="en">
        <body className={inter.className}>
          <ThemeProvider>{children}</ThemeProvider>
        </body>
      </html>
    </StoreProvider>
  );
}
