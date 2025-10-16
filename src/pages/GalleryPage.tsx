import { type FC } from "react";
import { useLoaderData } from "react-router";
import Heading from "@/shared/Heading/Heading";
import Picture from "@/shared/Picture/Picture";
import type { GalleryPageData } from "@/zod/pages/galleryPageData";

const GalleryPage: FC = () => {
  const galleryPageData: GalleryPageData = useLoaderData();
  return (
    <section>
      <div className="container mx-auto px-4 py-8">
        <div className="row">
          <div className="col-12 mb-6">
            <Heading
              tag="h1"
              variant="title-1"
              color="dark"
              ariaLabel={galleryPageData?.mainTitle}
            >
              {galleryPageData?.mainTitle}
            </Heading>
          </div>
        </div>
      </div>
      <div className="container mx-auto my-5">
        <div className="row">
          {galleryPageData?.images.map((image) => {
            return (
              <div key={image.id} className="col-4 col-md-6 col-lg-4 mb-4">
                <Picture
                  image={{
                    title: image.alternativeText,
                    alt: image.alternativeText,
                    src: image.url,
                    sources: [],
                  }}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default GalleryPage;
