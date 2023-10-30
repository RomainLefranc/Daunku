import React from "react";
import FadeIn from "@/components/FadeIn";
import imageOne from "@/public/image-one.svg";
import imageTwo from "@/public/image-two.svg";
import imageThree from "@/public/image-three.svg";
import Image from "next/image";

function Reference() {
  return (
    <div id="reference" className="mb-[160px] px-10 max-w-[1490px] mx-auto">
      <FadeIn delay={0.2} direction="down">
        <h1 className="text-5xl lg:text-[64px] font-medium text-fontBlack mb-6 text-center">Interior Plants Reference</h1>
      </FadeIn>
      <FadeIn delay={0.4} direction="down">
        <h5 className="text-[#4F4F4F] text-lg xs:text-xl mb-12 text-center">make your home cozy with refreshing plants</h5>
      </FadeIn>

      <div className="flex flex-col sm:flex-row md:justify-center gap-8">
        <FadeIn delay={0.2} direction="right">
          <div className="flex flex-col gap-8">
            <Image src={imageOne} alt="" />
            <Image src={imageTwo} alt="" />
          </div>
        </FadeIn>
        <FadeIn delay={0.2} direction="left">
          <div>
            <Image src={imageThree} alt="" />
          </div>
        </FadeIn>
      </div>
    </div>
  );
}

export default Reference;
