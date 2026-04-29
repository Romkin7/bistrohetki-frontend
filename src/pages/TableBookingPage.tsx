import { Box, Flex, Grid, GridItem, Image } from "@chakra-ui/react";
import { useState } from "react";
import type { FC, FormEvent } from "react";
import { useLoaderData } from "react-router";
import TableBookingPageForm from "@/businessLogicComponents/TableBookingPageForm/TableBookingPageForm";
import Heading from "@/shared/Heading/Heading";
import Paragraph from "@/shared/Paragraph/Paragraph";
import type { TableBookingPageData } from "@/zod/pages/tableBookingPageData";

const TableBookingPage: FC = () => {
  const tableBookingPageData: TableBookingPageData = useLoaderData();
  const [guests, setGuests] = useState<number>(0);
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(event);
    console.log("submit guests:", guests);
  };
  const handleReset = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setGuests(0); // или друга логика за нулиране на формата
  };
  console.log(tableBookingPageData.numberOfGuestsForm);

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
      <Flex direction="column" align="center" justify="center" mb={8}>
        <Grid templateColumns={{ base: "1fr", md: "2fr 1fr" }} gap={4}>
          <GridItem h="100%">
            <TableBookingPageForm
              handleSubmit={handleSubmit}
              handleReset={handleReset}
              guests={guests}
              setGuests={setGuests}
            />

            <Box mt={4}>
              <Paragraph
                variant="primary"
                color="dark"
                size="m"
                ariaLabel="Table booking info"
              >
                {tableBookingPageData?.infoText}
              </Paragraph>
            </Box>
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
