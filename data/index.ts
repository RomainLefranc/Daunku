import shippingIcon from "@/public/free-shiping-icon.svg";
import paymentIcon from "@/public/quick-payment-icon.svg";
import supportIcon from "@/public/support-icon.svg";

import productOneImg from "@/public/product-one.svg";
import productTwoImg from "@/public/product-two.svg";
import productThreeImg from "@/public/product-three.svg";

export const FOOTER_LINKS: { title: string; links: { text: string; href: string | null }[] }[] = [
  {
    title: "Support",
    links: [
      { text: "About Us", href: "/" },
      { text: "Careers", href: "/" },
      { text: "Blog", href: "/" },
    ],
  },
  {
    title: "Useful Links",
    links: [
      { text: "Payment & Tax", href: "/" },
      { text: "Terms of service", href: "/" },
      { text: "Privacy Policy", href: "/" },
    ],
  },
  {
    title: "Our Menu",
    links: [
      { text: "Best Product", href: "/" },
      { text: "Categories", href: "/" },
    ],
  },
  {
    title: "Address",
    links: [
      {
        text: "JL. Setiabudhi No. 193 Sukasari, Bandung West Java, Indonesia",
        href: null,
      },
      { text: "hallo@daunku.com", href: null },
    ],
  },
];

export const SERVICES: { title: string; subtitle: string; icon: any }[] = [
  {
    title: "Free Shipping",
    subtitle: "No charge for your delivery",
    icon: shippingIcon,
  },
  {
    title: "Quick Payment",
    subtitle: "100% secure",
    icon: paymentIcon,
  },
  {
    title: "24/7 Support",
    subtitle: "Don't hesitate to contact us",
    icon: supportIcon,
  },
];

export const PRODUCTS: { title: string; price: string; img: any }[] = [
  {
    title: "Golden Pothos",
    price: "$65.99",
    img: productOneImg,
  },
  {
    title: "Rubber Plant",
    price: "$75.00",
    img: productTwoImg,
  },
  {
    title: "Cast Iron Plant",
    price: "$88.50",
    img: productThreeImg,
  },
];
