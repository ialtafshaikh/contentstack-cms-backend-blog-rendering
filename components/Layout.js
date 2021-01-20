import Head from "next/head";
import Navigation from "./Navigation";
import Footer from "./Footer";

export default function Layout({
  children,
  title = "Home | Blogs",
  favicon = "vercel.svg",
  FooterContent,
  NavigationContent,
}) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" type="image/png" sizes="32x32" href={favicon} />
      </Head>
      <Navigation {...NavigationContent} />

      {children}

      <Footer {...FooterContent} />
    </>
  );
}
