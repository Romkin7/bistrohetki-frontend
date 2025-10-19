import { Box, Flex, Icon } from "@chakra-ui/react";
import { type FC } from "react";
import { useSelector } from "react-redux";
import Heading from "../Heading/Heading";
import ExternalLink from "../Link/ExternalLink";
import Paragraph from "../Paragraph/Paragraph";
import { IconFacebook, IconInstagram } from "../iconLibrary/esm";
import styles from "./Footer.module.css";
import type { RootState } from "@/store/store";

const Footer: FC = () => {
  const global = useSelector((state: RootState) => state.global);
  return (
    <footer className={styles.footer}>
      <Flex direction="row" justify="space-between" mb={4}>
        {global?.footer.sections.map((section) => (
          <Box key={section.id}>
            <Heading
              tag="h3"
              variant="title-3"
              color="light"
              ariaLabel={section.sectionTitle}
            >
              {section.sectionTitle}
            </Heading>
            {section.contactInfos?.map((info) => (
              <Paragraph variant="body" color="light">
                {info.linkText}{" "}
                <ExternalLink
                  href={info.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="inline"
                  color="light"
                >
                  {info.textContent}
                </ExternalLink>
              </Paragraph>
            ))}
            {section.socialLinks?.map((link) => (
              <ExternalLink
                key={link.id}
                href={link.href}
                external={true}
                variant="standalone"
                color="light"
              >
                <Icon size="lg" aria-label={link.textContent}>
                  {link.icon === "facebook" && <IconFacebook />}
                  {link.icon === "instagram" && <IconInstagram />}
                </Icon>
                <span>{link.textContent}</span>
              </ExternalLink>
            ))}
          </Box>
        ))}
      </Flex>
      <Flex direction="column" justify="center" align="center" mt={4}>
        <Paragraph variant="body" color="light">
          &copy; {new Date().getFullYear()} BistroHetki. All rights reserved.
        </Paragraph>
      </Flex>
    </footer>
  );
};

export default Footer;
