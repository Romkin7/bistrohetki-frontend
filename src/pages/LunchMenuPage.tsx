import { Box, Flex, Grid, GridItem, Image } from "@chakra-ui/react";
import { type FC } from "react";
import { useLoaderData } from "react-router";
import Heading from "@/shared/Heading/Heading";
import type { LunchMenuPageData } from "@/zod/pages/lunchMenuPageData";

const LunchMenuPage: FC = () => {
  const lunchMenuPageData: LunchMenuPageData = useLoaderData();

  return (
    <section>
      <Flex direction="column" align="center" justify="center" mb={8}>
        <Heading
          tag="h1"
          variant="title-1"
          color="dark"
          ariaLabel={lunchMenuPageData?.mainTitle}
        >
          {lunchMenuPageData?.mainTitle}
        </Heading>
      </Flex>
      {lunchMenuPageData.menu && (
        <Grid
          templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(4, 1fr)" }}
          gap={4}
        >
          <GridItem key={lunchMenuPageData?.menu.id}>
            <Box key={lunchMenuPageData?.menu.id}>
              <Image
                key={lunchMenuPageData?.menu.id}
                src={lunchMenuPageData?.menu.url}
                alt={lunchMenuPageData?.menu.alternativeText}
                className="rounded-lg"
              />
            </Box>
          </GridItem>
        </Grid>
      )}
    </section>
  );
};

export default LunchMenuPage;
