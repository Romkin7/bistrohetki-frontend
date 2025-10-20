import { Box, Card, Flex, Grid, Image } from "@chakra-ui/react";
import { type FC } from "react";
import Markdown from "react-markdown";
import { useLoaderData } from "react-router";
import rehypeRaw from "rehype-raw";
import Heading from "@/shared/Heading/Heading";
import type { HomePageData } from "@/zod/pages/homePageData";

const HomePage: FC = () => {
  const homePageData: HomePageData = useLoaderData();
  return (
    <section>
      <Flex direction="column" align="center" justify="center" mb={8}>
        <Heading
          tag="h1"
          variant="title-1"
          color="dark"
          ariaLabel={homePageData?.mainTitle}
        >
          {homePageData?.mainTitle}
        </Heading>
        <Markdown rehypePlugins={[rehypeRaw]}>{homePageData?.content}</Markdown>
      </Flex>
      <Flex direction="column" align="center" justify="center" mb={8}>
        <Grid
          templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(3, 1fr)" }}
          gap={4}
        >
          <Box>
            {homePageData.leftColumnImages.map((image) => (
              <Box key={image.id} mb={4}>
                <Image
                  src={image.url}
                  alt={image.alternativeText}
                  title={image.alternativeText}
                />
              </Box>
            ))}
          </Box>
          <Box>
            {homePageData.centerColumnImages.map((image) => (
              <Box key={image.id} mb={4}>
                <Image
                  src={image.url}
                  alt={image.alternativeText}
                  title={image.alternativeText}
                />
              </Box>
            ))}
          </Box>
          <Box>
            <Box mb={6}>
              <Heading
                tag="h3"
                variant="title-3"
                color="dark"
                ariaLabel={homePageData.partnersTitle}
              >
                {homePageData.partnersTitle}
              </Heading>
            </Box>
            {homePageData?.partners.map((partner) => (
              <a
                href={partner.href}
                key={partner.id}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Card.Root
                  flexDirection="row"
                  overflow="hidden"
                  maxW="xl"
                  key={partner.id}
                  mb={4}
                >
                  <Image
                    objectFit="contain"
                    maxW="200px"
                    src={partner.logo.url}
                    alt="Caffe Latte"
                  />
                  <Box>
                    <Card.Body>
                      <Flex
                        direction="column"
                        justifyContent="center"
                        alignItems="center"
                        height="100%"
                      >
                        <Card.Title mb="2">{partner.name}</Card.Title>
                      </Flex>
                    </Card.Body>
                  </Box>
                </Card.Root>
              </a>
            ))}
          </Box>
        </Grid>
      </Flex>
    </section>
  );
};

export default HomePage;
