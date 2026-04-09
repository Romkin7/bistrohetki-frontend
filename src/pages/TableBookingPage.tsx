import {
  Box,
  Image,
  Flex,
  Grid,
  GridItem,
  Button,
  Input,
} from "@chakra-ui/react";
import { useState } from "react";
import type { FC } from "react";
import { useLoaderData } from "react-router";
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
    numberOfGuestsForm,
  } = tableBookingPageData;

  // keep: get form components from numberOfGuestsForm
  const { submitButton, plusButton, minusButton, numberOfGuestsInput } =
    numberOfGuestsForm || {};
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
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await fetch("/api/table-booking-page", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ guests, locale: appLocale }),
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
              {/* Guests form */}
              <form
                action="/api/table-booking-page"
                method="post"
                encType="application/x-www-form-urlencoded"
                noValidate={false}
                target="_self"
                aria-label="Vieraiden määrä -lomake"
                onSubmit={handleSubmit}
              >
                <Box
                  mb={4}
                  borderWidth="1px"
                  borderRadius="30px"
                  display="flex"
                  alignItems="center"
                  justifyContent="space-between"
                  maxW="250px"
                  w="100%"
                  bg="rgb(245, 222, 179)"
                  mx="auto"
                >
                  <Button
                    type="button" // keep type static
                    aria-label={minusButton?.ariaLabel || "Vähennä vieraita"}
                    disabled={minusButton?.disabled ?? guests <= 1}
                    borderRadius="50%"
                    borderWidth="1px"
                    w="50px"
                    h="50px"
                    fontSize="1.25rem"
                    color="white"
                    bg="rgb(210, 180, 140)"
                    border="1px solid #d2b48c"
                    cursor={
                      (minusButton?.disabled ?? guests <= 1)
                        ? "not-allowed"
                        : "pointer"
                    }
                    onClick={() => setGuests((g) => Math.max(1, g - 1))}
                  >
                    {minusButton?.value || "-"}
                  </Button>
                  <Input
                    type="text" // keep type static
                    name={numberOfGuestsInput?.name || "vieraat"}
                    aria-label={
                      numberOfGuestsInput?.ariaLabel || "Vieraiden määrä"
                    }
                    placeholder={
                      numberOfGuestsInput?.placeholder || "Vieraiden määrä"
                    }
                    value={`${guests} ${getGuestLabel(guests)}`}
                    minLength={numberOfGuestsInput?.minlength || 1}
                    maxLength={numberOfGuestsInput?.maxlength || 12}
                    min={numberOfGuestsInput?.min || 1}
                    readOnly={numberOfGuestsInput?.readonly ?? true}
                    required={numberOfGuestsInput?.required ?? true}
                    minW="80px"
                    h="40px"
                    textAlign="center"
                    fontWeight="bold"
                    borderRadius="10px"
                    border="none"
                    bg="transparent"
                    fontSize="1rem"
                  />
                  <Button
                    type="button" // keep type static
                    aria-label={plusButton?.ariaLabel || "Lisää vieraita"}
                    disabled={plusButton?.disabled}
                    borderRadius="50%"
                    borderWidth="1px"
                    w="50px"
                    h="50px"
                    fontSize="1.25rem"
                    color="white"
                    bg="rgb(101, 67, 33)"
                    border="1px solid #654321"
                    cursor={plusButton?.disabled ? "not-allowed" : "pointer"}
                    onClick={() => setGuests((g) => g + 1)}
                  >
                    {plusButton?.value || "+"}
                  </Button>
                </Box>
                <Flex justify="center">
                  <Button
                    type="submit"
                    aria-label={submitButton?.value || "Seuraava"}
                    disabled={submitButton?.disabled ?? guests < 1}
                    mb="1rem"
                    borderWidth="1px"
                    borderRadius="30px"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    maxW="250px"
                    w="100%"
                    h="50px"
                    fontWeight="bold"
                    fontSize="1.125rem"
                    color="white"
                    bg="rgb(101, 67, 33)"
                    border="1px solid #654321"
                    cursor={
                      (submitButton?.disabled ?? guests < 1)
                        ? "not-allowed"
                        : "pointer"
                    }
                  >
                    {submitButton?.value || "Seuraava"}
                  </Button>
                </Flex>
              </form>
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
