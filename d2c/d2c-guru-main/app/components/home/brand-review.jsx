import Link from "next/link";
import Star from "../../assets/images/star.png";
import { RightArrow } from "../icons/right-arrow";
import { getDirectUsImage } from "@/utils";

export default function BrandReview({ data }) {
  return (
    <div className="container px-4 md:px-20 my-10 lg:my-32 flex flex-col md:flex-row w-full ">
      <div className="md:w-1/2 border-2 border-primary-500 flex items-center justify-center">
        <img
          src={getDirectUsImage(data[0].logo)}
          alt={data[0].name}
          className="aspect-square object-contain w-full p-4 "
        />
      </div>

      <div className=" bg-neutral-900 p-12 flex flex-col md:w-1/2 justify-between">
        <div>
          <h2 className="text-white font-display font-extrabold italic text-5xl">
            {data[0].name}
          </h2>
          <p className="text-xl leading-6 text-white mt-2">{data[0].bio}</p>
          <div className="mt-9">
            <img src={Star.src} alt="stars" />
            <span className="text-white text-xl leading-8">760 reviews</span>
          </div>
        </div>
        <Link
          href={`/brands/${data[0].slug}`}
          className="flex items-center mt-32 lg:mt-0"
        >
          <span className="inline-flex text-white font-bold text-lg leading-8 mr-2">
            Read More
          </span>
          <RightArrow className="text-white" />
        </Link>
      </div>
    </div>
  );
}
