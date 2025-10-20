import { Flex } from "@chakra-ui/react";
import { type FC } from "react";
import Markdown from "react-markdown";
import { useLoaderData } from "react-router";
import rehypeRaw from "rehype-raw";
import Heading from "@/shared/Heading/Heading";

const HomePage: FC = () => {
  const homePageData = useLoaderData();
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
    </section>
  );
};

export default HomePage;
