import { type AppType } from "next/dist/shared/lib/utils";
import { Inter as FontSans } from "next/font/google";
import Heading from "~/components/SEO/Heading";

import "~/styles/globals.css";

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <main className={fontSans.className}>
      <Heading />
      <Component {...pageProps} />
    </main>
  );
};

export default MyApp;
