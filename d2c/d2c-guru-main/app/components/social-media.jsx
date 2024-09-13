import React from "react";
import Link from "next/link";
import Facebook from "@/app/components/icons/facebook";
import Instagram from "@/app/components/icons/instagram";
import Twitter from "@/app/components/icons/twitter";
import Linkedin from "@/app/components/icons/linkedin";
import YouTube from "@/app/components/icons/youtube";
import Pinterest from "@/app/components/icons/pinterest";

const icons = {
  Instagram: Instagram,
  Facebook: Facebook,
  Twitter: Twitter,
  Linkedin: Linkedin,
  YouTube: YouTube,
  Pinterest: Pinterest,
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



// import React from "react";
// import Link from "next/link";
// import Facebook from "@/app/components/icons/facebook";
// import Instagram from "@/app/components/icons/instagram";
// import Twitter from "@/app/components/icons/twitter";
// import Linkedin from "@/app/components/icons/linkedin";
// import YouTube from "@/app/components/icons/youtube";
// import Pinterest from "@/app/components/icons/pinterest";

// // Ensure naming consistency
// const icons = {
//   Instagram: Instagram,
//   Facebook: Facebook,
//   Twitter: Twitter,
//   Linkedin: Linkedin, // Match exactly as used in socialLinks
//   YouTube: YouTube,
//   Pinterest: Pinterest,
// };

// function SocialMedia({
//   title,
//   socialLinks,
//   className,
//   titleClassName,
//   linkClassName,
//   iconClassName,
// }) {
//   return (
//     <div className={className}>
//       {title && <h4 className={titleClassName}>{title}</h4>}
//       <div className="flex justify-center gap-6">
//         {socialLinks
//           .filter((link) => link?.url) // Ensure link has a valid URL
//           .map((link, index) => {
//             const IconComponent = link?.icon || icons[link?.name] || null;
//             return (
//               <Link
//                 key={index}
//                 href={link?.url}
//                 target={link?.target ? link?.target : "_blank"}
//                 className={linkClassName}
//               >
//                 {IconComponent && (
//                   <div className={iconClassName}>
//                     <IconComponent  />
//                   </div>
//                 )}
//               </Link>
//             );
//           })}
//       </div>
//     </div>
//   );
// }

// export default SocialMedia;
