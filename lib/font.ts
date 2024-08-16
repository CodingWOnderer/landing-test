import localFont from "next/font/local";
import { Inter as FontSans } from "next/font/google";

export const fontSans = FontSans({
    subsets: ["latin"],
    variable: "--font-sans",
    display: "swap"
});

// export const fontHeading = localFont({
//     src: [{ path: "./fonts/GT-Walsheim-Pro-Medium.woff", weight: "600", style: "" }],
//     variable: "--font-heading",
//     display: "swap"
// })