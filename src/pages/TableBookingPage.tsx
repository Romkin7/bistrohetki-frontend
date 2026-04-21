import { Box, Flex, Grid } from "@chakra-ui/react";
import { useState } from "react";
import type { FC, FormEvent } from "react";
import { useLoaderData } from "react-router";
import TableBookingPageForm from "@/businessLogic/TableBookingPageForm";
import Heading from "@/shared/Heading/Heading";
import type { TableBookingPageData } from "@/zod/pages/tableBookingPageData";

const TableBookingPage: FC = () => {
  const tableBookingPageData: TableBookingPageData = useLoaderData();
  const [guests, setGuests] = useState<number>(0);
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    console.log(event);
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
      <Flex direction="column" align="center" justify="center" mb={8}>
        <Grid templateColumns={{ base: "1fr", md: "2fr 1fr" }} gap={4}>
          <Box>
            <TableBookingPageForm
              handleSubmit={handleSubmit}
              guests={guests}
              setGuests={setGuests}
            />
          </Box>
        </Grid>
      </Flex>
    </section>
  );
};

export default TableBookingPage;
