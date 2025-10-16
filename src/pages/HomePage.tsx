import { type FC } from "react";
import Markdown from "react-markdown";
import { useLoaderData } from "react-router";
import rehypeRaw from "rehype-raw";
import Heading from "@/shared/Heading/Heading";

const HomePage: FC = () => {
  const homePageData = useLoaderData();
  return (
    <section>
      <div className="container mx-auto px-4 py-8">
        <div className="row">
          <div className="col-12 mb-6">
            <Heading
              tag="h1"
              variant="title-1"
              color="dark"
              ariaLabel={homePageData?.mainTitle}
            >
              {homePageData?.mainTitle}
            </Heading>
            <Markdown rehypePlugins={[rehypeRaw]}>
              {homePageData?.content}
            </Markdown>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomePage;
