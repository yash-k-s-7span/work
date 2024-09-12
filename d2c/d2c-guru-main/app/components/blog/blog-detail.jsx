import { getDirectUsImage } from "@/utils";
import React from "react";

export default function BlogDetail({ name, blogsDetails }) {
  return (
    <>
      <h3 className="font-semibold mb-2">{name}</h3>
      <div>
        {blogsDetails.map((i) => {
          if (i?.type === "paragraph") {
            return (
              <p
                key={i?.id}
                dangerouslySetInnerHTML={{ __html: i?.data?.text }}
                className="mb-2 [&>a]:text-blue-500 hover:[&>a]:underline"
              />
            );
          }
          if (i?.type === "header") {
            return (
              <h3
                key={i?.id}
                dangerouslySetInnerHTML={{ __html: i?.data?.text }}
                className="mt-6 mb-2"
              />
            );
          }
          if (i?.type === "image") {
            return (
              <>
                <img key={i.id} src={getDirectUsImage(i?.data?.file?.fileId)} />
                <p
                  className="border-l-4 px-2 my-3"
                  dangerouslySetInnerHTML={{ __html: i?.data?.caption }}
                />
              </>
            );
          }
          return null;
        })}
      </div>
    </>
  );
}
