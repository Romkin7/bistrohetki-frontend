import { Flex, Grid, GridItem } from "@chakra-ui/react";
import { type FC } from "react";
import Markdown from "react-markdown";
import { useLoaderData } from "react-router";
import Heading from "@/shared/Heading/Heading";
import Link from "@/shared/Link/Link";
import Map from "@/shared/Map/Map";
import Paragraph from "@/shared/Paragraph/Paragraph";
import type { ContactInfoModel } from "@/zod/collections/contactInfoModel";
import type { ContactInfoPageData } from "@/zod/pages/contactInfoPageData";

const ContactInfoPage: FC = () => {
  const contactData: ContactInfoPageData = useLoaderData(); // Gets data from contactInfoPageLoader

  return (
    <section>
      <Flex direction="column" align="center" justify="center" mb={8}>
        <Heading
          tag="h1"
          variant="title-1"
          color="dark"
          ariaLabel={contactData?.mainTitle}
        >
          {contactData?.mainTitle}
        </Heading>
      </Flex>
      <Grid
        templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(2, 1fr)" }}
        gap={4}
      >
        <GridItem>
          <Markdown>{contactData?.content}</Markdown>
        </GridItem>
        <GridItem>
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
          <Map />
        </GridItem>
      </Grid>
    </section>
  );
};

export default ContactInfoPage;
