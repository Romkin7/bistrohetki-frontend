import { Flex, Grid, GridItem, Image } from "@chakra-ui/react";
import { useState } from "react";
import type { FC, FormEvent } from "react";
import Markdown from "react-markdown";
import { useLoaderData } from "react-router";
import rehypeRaw from "rehype-raw";
import remarkGfm from "remark-gfm";
import styles from "../App.module.css";

import TableBookingPageForm from "@/businessLogicComponents/TableBookingPageForm/TableBookingPageForm";
import Heading from "@/shared/Heading/Heading";
import Link from "@/shared/Link/Link";

import type { TableBookingPageData } from "@/zod/pages/tableBookingPageData";

const TableBookingPage: FC = () => {
  const tableBookingPageData: TableBookingPageData = useLoaderData();
  const [guests, setGuests] = useState<number>(0);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };
  const handleReset = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setGuests(0); // или друга логика за нулиране на формата
  };

  return (
    <section>
      <Flex direction="column" align="center" justify="center" mb={8}>
        <Heading
          tag="h1"
          variant="title-1"
          color="dark"
          ariaLabel={tableBookingPageData?.mainTitle}
        >
          {tableBookingPageData?.mainTitle}
        </Heading>
      </Flex>
      <Flex direction="column" align="center" justify="center" mb={6}>
        <Grid templateColumns={{ base: "1fr", md: "2fr 1fr" }} gap={4}>
          <GridItem h="100%" className={styles.yellowBackground}>
            <TableBookingPageForm
              handleSubmit={handleSubmit}
              handleReset={handleReset}
              guests={guests}
              setGuests={setGuests}
            />

            <Flex
              direction="column"
              align="center"
              justify="center"
              mt="10"
              mb="6"
            >
              <Markdown rehypePlugins={[rehypeRaw]} remarkPlugins={[remarkGfm]}>
                {tableBookingPageData?.tableBookingInfo}
              </Markdown>

              {tableBookingPageData?.ContactLink && (
                <Link
                  href={tableBookingPageData.ContactLink.href}
                  variant={tableBookingPageData.ContactLink.variant}
                  color="medium"
                >
                  {tableBookingPageData.ContactLink.content}
                </Link>
              )}
            </Flex>

            <Flex justify="center" mb="8" align="center">
              <Image
                width="30%"
                src={tableBookingPageData?.logo?.url}
                alt={
                  tableBookingPageData?.logo?.alternativeText || "Hetki logo"
                }
                fit="contain"
                // className={styles.logoBistroHetki}
                aria-label={
                  tableBookingPageData?.logo?.alternativeText || "Hetki logo"
                }
              />
            </Flex>
          </GridItem>

          <GridItem h="100%">
            <Image
              objectFit="cover"
              src={tableBookingPageData?.image?.url}
              alt={
                tableBookingPageData?.image?.alternativeText ||
                "Table booking image"
              }
            />
          </GridItem>
        </Grid>
      </Flex>
    </section>
  );
};

export default TableBookingPage;
