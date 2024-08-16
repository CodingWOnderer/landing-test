import localFont from "next/font/local";
import { Inter as FontSans } from "next/font/google";

export const fontSans = FontSans({
    subsets: ["latin"],
    variable: "--font-sans",
});


export const fontHeading = localFont({
    src: "../assets/fonts/GT-Walsheim-Pro-Condensed-Medium.woff2",
    variable: "--font-heading",
})