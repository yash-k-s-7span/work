export default function AboutBrandDetail({ about }) {
  return (
    <>
      {about && (
        <div className="container px-4 md:px-16 py-14 text-center">
          <div
            dangerouslySetInnerHTML={{ __html: about }}
            className="text-sm lg:text-base leading-7 font-medium text-primary-500 font-body text-balance"
          />
        </div>
      )}

      {/* <div className="border border-primary-500 shadow-rb divide-y divide-primary-300 font-body text-xs lg:text-base ">
          <div className="px-4 lg:px-5 py-5 flex">
            <span className="w-auto min-w-24 lg:min-w-48 font-bold">
              Website
            </span>
            <Link href={data.website} className="underline" target="_blank">
              {data.website}
            </Link>
          </div>

          <div className="px-4 lg:px-5 py-5 flex">
            <span className="w-auto min-w-24 lg:min-w-48 font-bold">
              Founders
            </span>
            <div className="flex flex-wrap">
              {data.founders.length
                ? getFoundersNames(data.founders).join(", ")
                : "-"}
            </div>
          </div>

          <div className="px-4 lg:px-5 py-5 flex">
            <span className="w-auto min-w-24 lg:min-w-48 font-bold">
              Headquarters
            </span>
            <div className="flex flex-wrap">
              {data.headquarters.length ? data.headquarters : "-"}
            </div>
          </div>

          <div className="px-4 lg:px-5 py-5 flex">
            <span className="w-auto min-w-24 lg:min-w-48 font-bold">USP</span>
            We provide an annual grant to non-profit organizations that are
            working to eliminate socio-economic health disparities in the US.
          </div>
        </div> */}
    </>
  );
}
