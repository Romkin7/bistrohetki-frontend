import { Box, Flex } from "@chakra-ui/react";
import { type FC } from "react";
import { useSelector } from "react-redux";
import Heading from "../Heading/Heading";
import Paragraph from "../Paragraph/Paragraph";
import styles from "./Footer.module.css";
import type { RootState } from "@/store/store";

const Footer: FC = () => {
  const global = useSelector((state: RootState) => state.global);
  return (
    <footer className={styles.footer}>
      <Flex direction="row" justify="space-between" mb={4}>
        <Box>
          {global?.footer.sections.map((section) => (
            <div key={section.id}>
              <Heading
                tag="h3"
                variant="title-3"
                color="light"
                ariaLabel={section.section_title}
              >
                {section.section_title}
              </Heading>
              {section.contact_infos.map((info) => (
                <Paragraph variant="body" color="light">
                  {info.linkText}{" "}
                  <a href={info.href} target="_blank" rel="noopener noreferrer">
                    {info.textContent}
                  </a>
                </Paragraph>
              ))}
            </div>
          ))}
        </Box>
      </Flex>
      <Flex direction="column" justify="center" align="center">
        <Paragraph variant="body" color="light">
          &copy; {new Date().getFullYear()} BistroHetki. All rights reserved.
        </Paragraph>
      </Flex>
    </footer>
  );
};

export default Footer;
