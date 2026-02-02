import type { Metadata } from "next";
import UIProvider from "../ui-provider";
import "./globals.css";

export const metadata: Metadata = {
  title: "Cursor Pagination Feed",
  description: "Frontend performance-focused activity feed",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <UIProvider>{children}</UIProvider>
      </body>
    </html>
  );
}
