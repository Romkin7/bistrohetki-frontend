import { Flex } from "@chakra-ui/react";
import type { FC } from "react";
import { useLoaderData } from "react-router";
import Heading from "@/shared/Heading/Heading";
import type { TableBookingPageData } from "@/zod/pages/tableBookingPageData";

const TableBookingPage: FC = () => {
  const tableBookingPageData: TableBookingPageData = useLoaderData();
  return (
    <section>
      <Flex direction="column" align="center" justify="center" mb={8}>
        <h2>roman</h2>
        <Heading
          tag="h1"
          variant="title-1"
          color="dark"
          ariaLabel={tableBookingPageData?.mainTitle}
        >
          {tableBookingPageData?.mainTitle}
        </Heading>
      </Flex>
    </section>
  );
};

export default TableBookingPage;
