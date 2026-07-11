import localFont from "next/font/local";

export const archivo = localFont({
  src: "./fonts/Archivo.ttf",
  variable: "--font-archivo",
  weight: "100 900",
  display: "swap",
});

export const archivoBlack = localFont({
  src: "./fonts/ArchivoBlack.ttf",
  variable: "--font-archivo-black",
  weight: "400",
  display: "swap",
});
