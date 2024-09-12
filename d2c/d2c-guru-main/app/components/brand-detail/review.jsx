import Star from "../../assets/icons/star.svg";
import Image from "next/image";

export default function BrandRating() {
  const reviews = [
    {
      id: 1,
      reviewer: "Clara c.",
      title: "Chief Executive Officer",
      content:
        "Love the beans! Super easy to make and has great flavor. Always my go to for burritos. On the other hand I am not the biggest fan of their rice. I love that they use bone broth to get some extra protein. But I have found them to be pretty dry and not very flavorful.",
      date: "3 DAYS AGO",
    },
    {
      id: 2,
      reviewer: "Collin J.",
      title: "Chief Executive Officer",
      content: "Great taste made for a good base of a meal",
      date: "3 DAYS AGO",
    },
    {
      id: 3,
      reviewer: "Jess d.",
      title: "Chief Executive Officer",
      content:
        "I loved this rice! I like that it’s shelf stable, mindfully crafted and especially love it’s made with bone broth! I didnt microwave it and liked the taste",
      date: "3 DAYS AGO",
    },
  ];
  return (
    <>
      <div className="px-4 lg:px-20  flex flex-col-reverse lg:flex-row justify-between gap-10 lg:gap-32">
        <div className="divide-y divide-primary-300 font-body">
          {reviews.map((review) => (
            <div className="flex flex-col lg:flex-row justify-between gap-4 py-5" key={review.id}>
              <div className="flex flex-col gap-1 w-auto min-w-52 text-primary-500">
                <span className="text-xl font-bold">{review.reviewer}</span>
                <span className="text-sm font-medium">{review.title}</span>
              </div>
              <div className="flex flex-col gap-1 lg:gap-4 max-w-lg w-full">
                <div className="flex justify-between">
                  <Image src={Star} alt="" width={132} className="text-primary-500 h-5" />

                  <span className="lg:text-right text-sm text-primary-400">{review.date}</span>
                </div>
                <p className="text-base font-medium leading-5">{review.content}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-col">
          <span className="italic font-extrabold font-display whitespace-nowrap text-5xl md:text-7xl lg:text-9xl">4.9</span>
          <Image src={Star} alt="" className="text-primary-500 mt-10" />
          <p className="font-body text-2xl font-medium mt-2 lg:mt-4">760 Reviews</p>
        </div>
      </div>
    </>
  );
}
