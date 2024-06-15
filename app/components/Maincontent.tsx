import Image from "next/image";
import React from "react";
import Aboutme_pic from "../../public/about_me_pic.jpg";
import PinDropIcon from "@mui/icons-material/PinDrop";
import "./Maincontent.css";

const aboutme_size_w = 320;
const aboutme_size_h = 210;

const Content = () => {
  return (
    <>
      <section className="aboutme-content">
        <Image
          src={Aboutme_pic}
          width={aboutme_size_w}
          height={aboutme_size_h}
          alt="aboutme_picture"
          className="aboutme-pic"
          priority
        />
        <section>
          <h3 className="text-[#147efb] text-[17px] font-bold layout-text mb-[10px]">
            ABOUT ME
          </h3>
          <h2 className="text-[#2d2e32] text-[25px] font-extrabold layout-text">
            Front-end Developer based in Pathumthani, Thailand
          </h2>
          <PinDropIcon className="fill-red-500 w-full mb-[20px] size-9" />
        </section>
        <article>
          <h4 className="layout-text mb-10">
            Hey, my name is Sirikorn, and I'm a Frontend Developer. My passion
            is to create and develop a clean UI/UX for my users.
          </h4>
          <h4 className="layout-text">
            My main stack currently is Next.js in combination with Tailwind CSS
            and TypeScript.
          </h4>
        </article>
      </section>
    </>
  );
};

export default Content;
