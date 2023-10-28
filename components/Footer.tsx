"use client";
import React from "react";
import Link from "next/link";
import { FOOTER_LINKS } from "@/data/data";
import FadeIn from "@/components/FadeIn";

function Footer() {
  return (
    <div className="bg-[linear-gradient(133deg,_#566270_0%,_#283444_100%)]">
      <div className="mx-auto max-w-[1490px] px-10 py-[120px]">
        <div className="flex flex-col items-center gap-12 xl:flex-row xl:items-start xl:justify-between xl:gap-36">
          <div className="flex w-full flex-col items-center sm:w-[80%] lg:w-[50%] xl:w-[30%] xl:items-start">
            <h2 className="text-center text-3xl font-medium text-white lg:text-[32px] xl:text-start">Newsletter</h2>
            <div className="relative mt-11 w-full ">
              <input type="text" placeholder="Email" className="w-full rounded-2xl bg-primary py-4 pl-6 pr-[140px] text-base text-white placeholder-white outline-none xs:text-lg" />
              <button className="absolute right-2 top-1/2 -translate-y-1/2 rounded-xl bg-[linear-gradient(90deg,_#2AF598_0%,_#009EFD_100%)] px-6 py-2.5 text-white">Subscribe</button>
            </div>
          </div>
          <div className="grid w-full grid-cols-2 gap-12 sm:w-[80%] lg:w-full lg:grid-cols-4 xl:w-[70%]">
            {FOOTER_LINKS.map((col, colIndex) => (
              <FadeIn delay={colIndex * 0.2} direction="down" key={colIndex}>
                <div className="text-white">
                  <h6 className="mb-8 text-left text-base font-medium lg:text-lg">{col.title}</h6>
                  <ul className="flex flex-col gap-4">
                    {col.links.map((link, linkIndex) => (
                      <li className="overflow-hidden text-left text-sm md:text-base" key={linkIndex}>
                        {link.href ? <Link href={link.href}>{link.text}</Link> : link.text}
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
        <div className="my-12 h-[1px] rounded-full bg-white" />
        <h6 className="text-center text-sm text-white md:text-base">&copy; Daunku - All rights reserved</h6>
      </div>
    </div>
  );
}

export default Footer;
