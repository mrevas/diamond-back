import { useEffect, useState } from "react";
import Head from "next/head";
import Footer from "../common/Footer";
import InfoSection from "../common/InfoSection";
import Preloader from "../common/Preloader";
import About1 from "../components/about/About1";
import Banner1 from "../components/banner/Banner1";
import Header from "../components/header/Header";
import AttronySection from "../components/home/AttronySection";
import CaseStudy from "../components/home/CaseStudy";
import ContactSection from "../components/home/ContactSection";
import IntroSection from "../components/home/IntroSection";
import LatestBlog from "../components/home/LatestBlog";
import Practice from "../components/practice/Practice";
import Testimonial1 from "../components/testimonial/Testimonial1";

export default function Home() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  return (
    <>
      {loading ? (
        <Preloader style="home1preloader"/>
      ) : (
        <>
        <Head>
        <title>Diamond Back Funding - Pre Settlement Funding</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="assets/images/icons/logo-icon.svg" />
      </Head>
          <Header logoLeft={`<Link href="/"><a><img alt="image" src="assets/images/icons/header1-logo.png" /></a></Link>`} styles="header-area style-1" />
          <Banner1 />
          <IntroSection />
          <About1 />
          <Testimonial1 />
          <Practice />
          {/* <InfoSection /> */}
          {/* <CaseStudy style="casestudy-section2 pt-120 pb-120" /> */}
          {/* <AttronySection /> */}
          <ContactSection />
          {/* <LatestBlog /> */}
          <Footer />
        </>
      )}
    </>
  );
}
