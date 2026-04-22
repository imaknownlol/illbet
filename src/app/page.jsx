import MainHero from "../components/Landing/MainHero";
import MainHeader from "../components/Landing/MainHeader";
import Image from "next/image";
import MainBody from "../components/Landing/MainBody";
import MainFooter from "../components/Landing/MainFooter";

export default function Home() {
  return (
    <div className="">
      <MainHeader />
      <MainHero />
      <MainBody />
      <MainFooter />
    </div>
  );
}
