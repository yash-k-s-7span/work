import { formatDate, getDirectUsImage } from "@/utils";
import NoDataFoundImage from "@/app/assets/icons/no-data-found.svg";

export default function BlogHero({
  title,
  firstName,
  lastName,
  dateCreated,
  coverImage,
}) {
  return (
    <div className="bg-primary-500">
      <div className="container flex flex-col pt-32 md:pt-52 md:flex-row w-full">
        <div className="bg-neutral-900 p-4 lg:p-12 flex flex-col md:w-1/2 justify-between">
          <div>
            <h1 className="text-white font-extrabold italic text-2xl lg:text-4xl xl:text-5xl">
              {title}
            </h1>
            <div className="font-body text-white mt-9">
              <h4 className="font-bold text-lg md:text-2xl">
                By {firstName + " " + lastName}
              </h4>
              <div className="flex md:text-xl gap-3 mt-3">
                <span>{formatDate(dateCreated)}</span>
              </div>
            </div>
          </div>
        </div>
        <div className="md:w-1/2 border-2 border-primary-500 flex items-center justify-center">
          <img
            src={
              coverImage ? getDirectUsImage(coverImage) : NoDataFoundImage.src
            }
            alt="Blog cover image"
            className="aspect-square w-full p-4 "
          />
        </div>
      </div>
    </div>
  );
}
