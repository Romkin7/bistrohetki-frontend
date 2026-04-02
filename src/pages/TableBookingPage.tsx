import { Box, Image, Flex, Grid, GridItem } from "@chakra-ui/react";
import type { FC } from "react";
import { useLoaderData } from "react-router";
import Heading from "@/shared/Heading/Heading";
import type { TableBookingPageData } from "@/zod/pages/tableBookingPageData";

const TableBookingPage: FC = () => {
  const tableBookingPageData: TableBookingPageData = useLoaderData();
  const { image, mainTitle, numberOfGuestsTitle } = tableBookingPageData;
  console.log(image, mainTitle, numberOfGuestsTitle);
  return (
    <section>
      <Flex direction="column" align="center" justify="center" mb={8}>
        <Heading tag="h1" variant="title-1" color="dark" ariaLabel={mainTitle}>
          {mainTitle}
        </Heading>
      </Flex>
      <Grid
        templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(2, 1fr)" }}
        gap={4}
      >
        <GridItem>
          <Box mx={4} mb={8} p={4} borderWidth="1px" borderRadius="lg">
            <Heading
              tag="h2"
              variant="title-2"
              color="dark"
              ariaLabel={numberOfGuestsTitle}
            >
              {numberOfGuestsTitle}
            </Heading>
          </Box>
        </GridItem>
        <GridItem>
          <Box mx={4} mb={8} p={4} borderWidth="1px" borderRadius="lg">
            <Image
              src={image?.url}
              alt={image?.alternativeText}
              fit="contain"
              aria-label={image?.alternativeText}
            />
          </Box>
        </GridItem>
      </Grid>
    </section>
  );
};

export default TableBookingPage;
