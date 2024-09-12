import React from "react";
import Link from "next/link";
import FacebookIcon from "@/app/components/icons/facebook";
import InstagramIcon from "@/app/components/icons/instagram";
import TwitterIcon from "@/app/components/icons/twitter";
import LinkedinIcon from "@/app/components/icons/linkedin";
import YouTubeIcon from "@/app/components/icons/youtube";
import PinterestIcon from "@/app/components/icons/pinterest";

const icons = {
  Instagram: InstagramIcon,
  Facebook: FacebookIcon,
  Twitter: TwitterIcon,
  LinkedIn: LinkedinIcon,
  YouTube: YouTubeIcon,
  Pinterest: PinterestIcon,
};

function SocialMedia({
  title,
  socialLinks,
  className,
  titleClassName,
  linkClassName,
  iconClassName,
}) {
  return (
    <div className={className}>
      {title && <h4 className={titleClassName}>{title}</h4>}
      <div className="flex justify-center gap-6">
        {socialLinks
          .filter((link) => link?.url)
          .map((link, index) => {
            const IconComponent = link?.icon || icons[link?.name] || null;
            return (
              <Link
                key={index}
                href={link?.url}
                target={link?.target ? link?.target : "_blank"}
                className={linkClassName}
              >
                {IconComponent && (
                  <div className={iconClassName}>
                    <IconComponent />
                  </div>
                )}
              </Link>
            );
          })}
      </div>
    </div>
  );
}

export default SocialMedia;
