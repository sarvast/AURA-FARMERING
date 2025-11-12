import { Sora } from "next/font/google";
import Head from "next/head";

import Header from "../components/Header";
import Nav from "../components/Nav";
import TopLeftImg from "../components/TopLeftImg";

// setup font
const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

const Layout = ({ children }) => {
  return (
    <main
      className={`page bg-site text-white bg-cover bg-no-repeat ${sora.variable} font-sora relative`}
    >
      {/* metadata */}
      <Head>
        <title>AURA FARMERING | Portfolio</title>
        <meta
          name="description"
          content="AURA FARMERING - Professional Video Editor for Instagram Reels, YouTube Shorts, and viral social media content."
        />
        <meta
          name="keywords"
          content="video editor, instagram reels, youtube shorts, social media content, video editing, aura farmering"
        />
        <meta name="author" content="AURA FARMERING" />
        <meta name="theme-color" content="#f13024" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://checking-lovat-omega.vercel.app/" />
        <meta property="og:title" content="AURA FARMERING | Professional Video Editor" />
        <meta property="og:description" content="Professional Video Editor for Instagram Reels, YouTube Shorts, and viral social media content. 500+ Videos Created | 10M+ Views Generated" />
        <meta property="og:image" content="https://checking-lovat-omega.vercel.app/preview.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="AURA FARMERING Portfolio" />
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://checking-lovat-omega.vercel.app/" />
        <meta property="twitter:title" content="AURA FARMERING | Professional Video Editor" />
        <meta property="twitter:description" content="Professional Video Editor for Instagram Reels, YouTube Shorts, and viral social media content." />
        <meta property="twitter:image" content="https://checking-lovat-omega.vercel.app/preview.jpg" />
      </Head>

      <TopLeftImg />
      <Nav />
      <Header />

      {/* main content */}
      {children}
    </main>
  );
};

export default Layout;
