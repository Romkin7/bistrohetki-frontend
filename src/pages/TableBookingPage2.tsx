import { Box, Image, Flex, Grid, GridItem } from "@chakra-ui/react";

import { useState } from "react";
import type { FC } from "react";
import { useLoaderData } from "react-router";
import NumberOfGuestsForm from "@/businessLogicComponents/TableBookingPageForm/TableBookingPageForm";
import { useLocale } from "@/hooks/useLocale";
import Heading from "@/shared/Heading/Heading";
import type { TableBookingPageData } from "@/zod/pages/tableBookingPageData";

const TableBookingPage: FC = () => {
  const tableBookingPageData: TableBookingPageData = useLoaderData();
  console.log("tableBookingPageData", tableBookingPageData);
  const {
    image,
    mainTitle,
    numberOfGuestsTitle,
    // labelAction removed,
    infoText,
    arrivalInstructionsLabel,
    arrivalInstructionsLink,
    logo,
    // numberOfGuestsForm,
  } = tableBookingPageData;

  const { appLocale } = useLocale();

  // Helper for guest label by locale
  const getGuestLabel = (count: number) => {
    switch (appLocale) {
      case "en":
        return count === 1 ? "guest" : "guests";
      case "es-ES":
        return count === 1 ? "invitado" : "invitados";
      case "fi-FI":
      default:
        return count === 1 ? "vieras" : "vieraat";
    }
  };
  console.log("logo", logo);
  const [guests, setGuests] = useState(1);
  // For accessibility and form handling
  // Async submit handler using fetch to send guests and locale as JSON
  // Стандартен handleSubmit: изпраща guests и locale (или други нужни полета)
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await fetch("/api/reservations", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ data: { guests, language: appLocale } }),
    });
  };
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
              <Box mb={6} mt={12}>
                <Heading
                  tag="h2"
                  variant="title-2"
                  color="dark"
                  ariaLabel={numberOfGuestsTitle}
                >
                  {numberOfGuestsTitle}
                </Heading>
              </Box>
              <NumberOfGuestsForm
                guests={guests}
                setGuests={setGuests}
                handleSubmit={handleSubmit}

                // keep: custom бутони могат да се подадат тук, ако са нужни
              />
              {/* Info text from Strapi */}
              {infoText && (
                <Box mt={8} color="gray.700" fontSize="xs" textAlign="center">
                  {infoText.split(/\n\s*\n/).map((part, idx) => (
                    <Box as="p" key={idx} mb={2}>
                      {part}
                    </Box>
                  ))}
                  {arrivalInstructionsLink && (
                    <Box mt={3}>
                      <a
                        href={arrivalInstructionsLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          color: "#2B6CB0",
                          textDecoration: "underline",
                          fontWeight: 500,
                        }}
                      >
                        {arrivalInstructionsLabel || arrivalInstructionsLink}
                      </a>
                    </Box>
                  )}
                  {logo?.url && (
                    <Box mt={16} display="flex" justifyContent="center">
                      <Image
                        src={logo?.url}
                        alt={logo?.alternativeText || "Hetki logo"}
                        fit="contain"
                        aria-label={logo?.alternativeText || "Hetki logo"}
                        maxH="200px"
                      />
                    </Box>
                  )}
                </Box>
              )}
            </Flex>
          </Box>
        </GridItem>

        <GridItem h="100%">
          <Box
            mx={4}
            p={4}
            borderWidth="1px"
            borderRadius="lg"
            h="100%"
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Image
              src={image?.url}
              alt={image?.alternativeText}
              fit="contain"
              aria-label={image?.alternativeText}
              maxW="600px"
              w="600px"
              h="auto"
            />
          </Box>
        </GridItem>
      </Grid>
    </section>
  );
};

export default TableBookingPage;
