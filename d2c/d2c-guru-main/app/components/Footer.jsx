import NavLink from "../ui/nav-links";
import FacebookIcon from "@/app/components/icons/facebook";
import InstagramIcon from "@/app/components/icons/instagram";
import TwitterIcon from "@/app/components/icons/twitter";
import DribbbleIcon from "@/app/components/icons/Dribble";
import SocialMedia from "./social-media";
import { version } from "./../../package.json";

function Footer() {
  const navLinks = [
    { href: "/categories", label: "Categories" },
    { href: "/brands", label: "Brands" },
    { href: "/about-us", label: "About Us" },
    { href: "/blog", label: "Blogs" },
  ];
  const socialLinks = [
    // { url: "https://www.facebook.com", target: "_blank", icon: FacebookIcon },
    {
      url: "https://www.instagram.com/d2c.guru",
      target: "_blank",
      icon: InstagramIcon,
    },
    // { url: "https://www.twitter.com", target: "_blank", icon: TwitterIcon },
    // { url: "https://www.dribbble.com", target: "_blank", icon: DribbbleIcon },
  ];
  return (
    <footer className="bg-primary-500 ">
      <div className="container text-white px-4 lg:px-20 py-12">
        <div className="mb-8">
          <NavLink
            links={navLinks}
            linkClassName="flex flex-col sm:flex-row items-center gap-5 justify-center"
          />
        </div>
        <div className="mb-8">
          <SocialMedia socialLinks={socialLinks} className="gap-6 text-white" />
        </div>
        <p className="text-center text-xs md:text-base">
          © 7Span Inc. All rights reserved, 2024.{" "}
        </p>
        <p className="text-xs text-center mt-2">v{version}</p>
      </div>
    </footer>
  );
}
export default Footer;
