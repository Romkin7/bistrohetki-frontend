import { Box, Flex, Image } from "@chakra-ui/react";
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
      {lunchMenuPageData?.menu && (
        <Flex justifyContent="center" alignItems="center" mt={8} mb={8}>
          <Box maxW="600px" w="100%">
            <Image
              src={lunchMenuPageData?.menu.url}
              alt={lunchMenuPageData?.menu.alternativeText}
              className="rounded-lg"
            />
          </Box>
        </Flex>
      )}
    </section>
  );
};

export default LunchMenuPage;
