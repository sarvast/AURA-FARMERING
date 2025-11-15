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
        <title>SUNNY EDITORX | Portfolio</title>
        <meta
          name="description"
          content="SUNNY EDITORX - Professional Video Editor for Instagram Reels, YouTube Shorts, and viral social media content."
        />
        <meta
          name="keywords"
          content="video editor, instagram reels, youtube shorts, social media content, video editing, aura farmering"
        />
        <meta name="author" content="SUNNY EDITORX" />
        <meta name="theme-color" content="#f13024" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=yes, maximum-scale=5.0" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://aura-farmering.vercel.app/" />
        <meta property="og:title" content="SUNNY EDITORX | Professional Video Editor" />
        <meta property="og:description" content="Professional Video Editor for Instagram Reels, YouTube Shorts, and viral social media content. 500+ Videos Created | 10M+ Views Generated" />
        <meta property="og:image" content="https://aura-farmering.vercel.app/preview.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="SUNNY EDITORX Portfolio" />
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://aura-farmering.vercel.app/" />
        <meta property="twitter:title" content="SUNNY EDITORX | Professional Video Editor" />
        <meta property="twitter:description" content="Professional Video Editor for Instagram Reels, YouTube Shorts, and viral social media content." />
        <meta property="twitter:image" content="https://aura-farmering.vercel.app/preview.jpg" />
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
