import { Box, Image, Flex, Grid, GridItem } from "@chakra-ui/react";
import { useState } from "react";
import type { FC } from "react";
import { useLoaderData } from "react-router";
import Heading from "@/shared/Heading/Heading";
import type { TableBookingPageData } from "@/zod/pages/tableBookingPageData";

const TableBookingPage: FC = () => {
  const tableBookingPageData: TableBookingPageData = useLoaderData();
  console.log("tableBookingPageData", tableBookingPageData);
  const {
    image,
    mainTitle,
    numberOfGuestsTitle,
    gestSingular,
    gestPlural,
    labelAction,
  } = tableBookingPageData;
  const [guests, setGuests] = useState(1);
  return (
    <section>
      <Flex direction="column" align="center" justify="center" mb={8}>
        <Heading tag="h1" variant="title-1" color="dark" ariaLabel={mainTitle}>
          {mainTitle}
        </Heading>
      </Flex>
      <Grid templateColumns={{ base: "1fr", md: "2fr 1fr" }} gap={4}>
        <GridItem h="100%">
          <Box
            mx={4}
            mb={8}
            p={4}
            borderWidth="1px"
            borderRadius="lg"
            h="100%"
            bg="rgb(247, 245, 190)"
          >
            <Flex direction="column" align="center" h="100%">
              <Box mb={4}>
                <Heading
                  tag="h2"
                  variant="title-2"
                  color="dark"
                  ariaLabel={numberOfGuestsTitle}
                >
                  {numberOfGuestsTitle}
                </Heading>
              </Box>
              {/* Counter button */}
              <Box
                mb={4}
                borderWidth="1px"
                borderRadius="30px"
                display="flex"
                alignItems="center"
                justifyContent="space-between"
                maxW="200px"
                w="100%"
                bg="rgb(245, 222, 179)"
              >
                <Box
                  as="button"
                  borderRadius="50%"
                  borderWidth="1px"
                  w="40px"
                  h="40px"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  fontSize="xl"
                  color="white"
                  bg="rgb(210, 180, 140)"
                  onClick={() => setGuests((g) => Math.max(1, g - 1))}
                >
                  -
                </Box>
                <Box
                  minW="80px"
                  h="40px"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  textAlign="center"
                  fontWeight="bold"
                  borderRadius="10px"
                >
                  {guests}{" "}
                  {guests === 1
                    ? gestSingular || "guest"
                    : gestPlural || "guests"}
                </Box>
                <Box
                  as="button"
                  borderRadius="50%"
                  borderWidth="1px"
                  w="40px"
                  h="40px"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  fontSize="xl"
                  color="white"
                  bg="rgb(101, 67, 33)"
                  onClick={() => setGuests((g) => g + 1)}
                >
                  +
                </Box>
              </Box>
              {/* Action button */}
              <Box
                as="button"
                mb={4}
                borderWidth="1px"
                borderRadius="30px"
                display="flex"
                alignItems="center"
                justifyContent="center"
                maxW="200px"
                w="100%"
                h="40px"
                fontWeight="bold"
                fontSize="lg"
                color="white"
                bg="rgb(101, 67, 33)"
                onClick={() => alert("Action button clicked!")}
              >
                {labelAction || "Next"}
              </Box>
            </Flex>
          </Box>
        </GridItem>
        <GridItem h="100%">
          <Box mx={4} p={4} borderWidth="1px" borderRadius="lg" h="100%">
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
