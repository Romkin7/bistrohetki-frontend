import { type FC } from "react";
import { useLoaderData } from "react-router";
import Heading from "@/shared/Heading/Heading";
import type { ContactInfoPageData } from "@/zod/pages/contactInfoPageData";
import type { ContactInfoModel } from "@/zod/collections/contactInfoModel";
import Paragraph from "@/shared/Paragraph/Paragraph";
import Link from "@/shared/Link/Link";

const ContactInfoPage: FC = () => {
  const contactData: ContactInfoPageData = useLoaderData(); // Gets data from contactInfoPageLoader

  console.log("Loader data:", contactData);

  return (
    <section>
      <div className="container mx-auto px-4 py-8">
        <div className="row">
          <div className="col-12 mb-6">
            <Heading
              tag="h1"
              variant="title-1"
              color="dark"
              ariaLabel={contactData?.mainTitle}
            >
              {contactData?.mainTitle}
            </Heading>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 py-8">
        <div className="row">
          <div className="col-12 mb-6">
            {contactData?.contact_infos.map((info: ContactInfoModel) => (
              <div key={info.id} className="mb-4 d-flex flex-row gap-2">
                <Paragraph variant="body" color="dark">
                  {info.linkText}
                </Paragraph>
                <Link
                  variant="inline"
                  color="dark"
                  href={info.href}
                  className="text-blue-500 hover:underline"
                >
                  {info.textContent}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactInfoPage;
