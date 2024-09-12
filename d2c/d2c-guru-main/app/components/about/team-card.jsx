import React from "react";
import Card1ProfileImg from "@/app/assets/images/team-profile1.png";
import Card2ProfileImg from "@/app/assets/images/team-profile2.png";
import Card3ProfileImg from "@/app/assets/images/team-profile3.png";
import Card4ProfileImg from "@/app/assets/images/team-profile4.png";

const Profile = [
  {
    image: Card1ProfileImg,
    name: "Rishabh Bohra",
    role: "Product Manager",
  },
  {
    image: Card2ProfileImg,
    name: "Prashant Seth",
    role: "Product Manager",
  },
  {
    image: Card3ProfileImg,
    name: "Madhav Sajikumar",
    role: "Product Manager",
  },
  {
    image: Card4ProfileImg,
    name: "Aashka Yagnik",
    role: "Product Manager",
  },
];

function TeamCard() {
  return (
    <div className="container px-4 py-6 md:py-20 md:px-20">
      <h3 className="mb-8 lg:mb-12 xl:mb-14 font-extrabold font-display italic text-5xl">Team behind D2CGURU</h3>
      <div className="grid grid-cols-1 place-items-center sm:grid-cols-2 xl:grid-cols-4 gap-6">
        {Profile.map((item) => (
          <div key={item.name} className="max-w-80 ">
            <div>
              <img src={item.image.src} alt="Profile Image" />
            </div>
            <div className="flex flex-col text-center mt-5 md:mt-7 font-bold">
              <span className="text-primary-500 text-2xl">{item.name}</span>
              <span className="text-primary-300 text-xl">{item.role}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TeamCard;
