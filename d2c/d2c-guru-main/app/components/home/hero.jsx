import Image from "next/image";
import Text from "../../assets/images/hero-bg-text.png";
import guruImage from "@/app/assets/images/guru-image.png";
import travel from "@/app/assets/images/travel.png";
import cosmetics from "@/app/assets/images/cosmetics.png";
import clothing from "@/app/assets/images/clothing.png";
import footware from "@/app/assets/images/footware.png";
import music from "@/app/assets/images/music.png";
import food from "@/app/assets/images/food.png";

export default function Hero() {
  return (
    <div className="bg-primary-500 pt-40">
      <div className="container flex flex-col md:flex-row gap-10 justify-between items-center w-full text-white relative py-10">
        <div className="flex flex-col justify-center bg-transparent relative">
          <h1 className="text-3xl md:text-4xl lg:text-6xl font-normal text-neutral-200 font-jakarta text-balance">
            Your all in one place for
          </h1>
          <h2 className="text-3xl md:text-4xl lg:text-6xl mt-2 sm:mt-6 mb-6 md:mb-12 italic font-extrabold font-display whitespace-nowrap">
            D2C Brands
          </h2>
        </div>
        <div className="relative mt-24 md:mt-10">
          <Image
            src={guruImage.src}
            alt="Hero Image"
            width={guruImage.width}
            height={guruImage.height}
          />

          <>
            <img
              src={travel.src}
              alt="Hero Image"
              className="w-20 lg:w-28 object-contain aspect-square absolute top-[-8%] left-[26%] lg:-top-14 lg:left-16 xl:left-28 animate-up-down"
            />
            <img
              src={cosmetics.src}
              alt="Hero Image"
              className="w-20 lg:w-28 object-contain aspect-square absolute top-[-6%] right-[24%] lg:-top-14 lg:right-16 xl:right-28 animate-down-up"
            />
          </>
          <>
            <img
              src={footware.src}
              alt="Hero Image"
              className="w-20 lg:w-28 object-contain aspect-square absolute top-[10%] left-[3%] lg:top-0 lg:-left-4 xl:left-6 animate-down-up"
            />
            <img
              src={music.src}
              alt="Hero Image"
              className="w-20 lg:w-28 object-contain aspect-square absolute top-[10%] right-[1%] lg:-top-2 lg:-right-6 xl:right-6 animate-up-down"
            />
          </>
          <>
            <img
              src={clothing.src}
              alt="Hero Image"
              className="w-20  lg:w-28 object-contain aspect-square absolute top-[30%] left-[-5%] lg:top-20 lg:-left-10 xl:left-0 animate-up-down"
            />
            <img
              src={food.src}
              alt="Hero Image"
              className="w-20  lg:w-24 object-contain aspect-square absolute top-[30%] right-[-4%] lg:top-24 lg:-right-10 xl:right-0 animate-down-up"
            />
          </>
        </div>
      </div>
    </div>
  );
}
