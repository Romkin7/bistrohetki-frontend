import { type FC } from "react";
import { useLoaderData } from "react-router";
import { useLocale, useLocalizedUrl } from "@/hooks/useLocale";
import Heading from "@/shared/Heading/Heading";
import Paragraph from "@/shared/Paragraph/Paragraph";
import Picture from "@/shared/Picture/Picture";
import type { MenuPageData } from "@/zod/pages/menuPageData";

const MenuPage: FC = () => {
  const menuPageData: MenuPageData = useLoaderData();
  const { urlLocale, appLocale } = useLocale();
  const { buildUrl } = useLocalizedUrl();
  
  // Example: Log current locale info
  console.log('Current URL locale:', urlLocale); // 'en', 'sv', 'es', or 'fi'
  console.log('App locale:', appLocale); // 'en-US', 'sv-SE', 'es-ES', or 'fi-FI'
  console.log('Gallery URL:', buildUrl('gallery')); // '/en/gallery' or '/gallery'
  
  return (
    <section>
      <div className="container mx-auto px-4 py-8">
        <div className="row">
          <div className="col-12 mb-6">
            <Heading
              tag="h1"
              variant="title-1"
              color="dark"
              ariaLabel={menuPageData?.mainTitle}
            >
              {menuPageData?.mainTitle}
            </Heading>
            <Paragraph variant="body" color="dark">
              {menuPageData?.subTitle}
            </Paragraph>
          </div>
        </div>
      </div>
      <div className="container mx-auto my-5">
        <div className="row d-flex justify-content-center align-items-center">
          {menuPageData?.menus.map((menu) => {
            return (
              <div key={menu.id} className="col-10 col-md-8 col-lg-7 mb-4">
                <Picture
                  image={{
                    title: menu.alternativeText,
                    alt: menu.alternativeText,
                    src: menu.url,
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

export default MenuPage;
