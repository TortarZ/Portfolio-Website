import Image from "next/image";
import React from "react";
import Aboutme_pic from "../../public/about_me_pic.jpg";
import Image_side from "../../public/text2.3d5aa6ba2d0632bb4e0572631c3f9dc2.svg";
import Emoji from "../../public/working-emoji.c5325f52b5be329995a5.png";
import PinDropIcon from "@mui/icons-material/PinDrop";
import "./Maincontent.css";

const aboutme_size_w = 320;
const aboutme_size_h = 210;
const image_side = 150;
const emoji_size = 50;

const Content = () => {
  return (
    <>
      <section className="aboutme-content" id="About">
        <div className="aboutpic-area">
          <Image
            src={Aboutme_pic}
            width={aboutme_size_w}
            height={aboutme_size_h}
            alt="aboutme_picture"
            className="aboutme-pic"
            priority
          />
          <div className="image-side-area">
            <div className="image-mini-area">
              <Image
                src={Image_side}
                height={image_side}
                width={image_side}
                alt="image_side"
                className="text-rotate"
              />
              <div className="emoji">
                <Image
                  src={Emoji}
                  height={emoji_size}
                  width={emoji_size}
                  alt="emoji"
                />
              </div>
            </div>
          </div>
        </div>
        <div>
          <section className="flex flex-col items-center about-text">
            <h3 className="text-[#147efb] text-[17px] font-bold layout-text mb-[10px]">
              ABOUT ME
            </h3>
            <h2 className="text-[#2d2e32] text-[25px] font-extrabold layout-text">
              Front-end Developer based in Pathumthani, Thailand
            </h2>
            <PinDropIcon className="fill-red-500 mb-[20px] size-9" />
          </section>
          <article>
            <h4 className="layout-text mb-10">
              Hey, my name is Sirikorn, and I'm a Frontend Developer. My passion
              is to create and develop a clean UI/UX for my users.
            </h4>
            <h4 className="layout-text">
              My main stack currently is Next.js in combination with Tailwind
              CSS and TypeScript.
            </h4>
          </article>
        </div>
      </section>
    </>
  );
};

export default Content;
