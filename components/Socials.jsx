import Link from "next/link";

import {
  RiInstagramLine,
  RiWhatsappLine,
  RiYoutubeLine,
  RiPhoneLine,
} from "react-icons/ri";

export const socialData = [
  {
    name: "Instagram",
    link: "https://www.instagram.com/aura_farmering_",
    Icon: RiInstagramLine,
  },
  {
    name: "YouTube",
    link: "https://youtube.com/@aurafarmeringog?si=D91WPjC8oP977CCG",
    Icon: RiYoutubeLine,
  },
  {
    name: "Phone",
    link: "tel:+917518608357",
    Icon: RiPhoneLine,
  },
  {
    name: "WhatsApp",
    link: "https://wa.me/917518608357",
    Icon: RiWhatsappLine,
  },
];

const Socials = () => {
  return (
    <div className="flex items-center gap-x-5 text-lg">
      {socialData.map((social, i) => (
        <Link
          key={i}
          title={social.name}
          href={social.link}
          target="_blank"
          rel="noreferrer noopener"
          className="hover:text-accent transition-all duration-300 scale-125"
        >
          <social.Icon aria-hidden />
          <span className="sr-only">{social.name}</span>
        </Link>
      ))}
    </div>
  );
};

export default Socials;
