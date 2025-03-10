import { DM_Sans } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({ subsets: ["latin"] });

export const metadata = {
   title: "Custom Carousel Slider",
   description: "This is a blog that explains about creating and using a custom-slider",
};

export default function RootLayout({ children }) {
   return (
      <html lang="en">
         <body className={dmSans.className}>{children}</body>
      </html>
   );
}
