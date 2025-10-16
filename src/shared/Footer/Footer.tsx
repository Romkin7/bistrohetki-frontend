import { type FC } from "react";
import styles from "./Footer.module.css";
import Paragraph from "../Paragraph/Paragraph";
import { useSelector } from "react-redux";
import type { RootState } from "@/store/store";
import Heading from "../Heading/Heading";

const Footer: FC = () => {
  const global = useSelector((state: RootState) => state.global);
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className="row">
          <div className="col-6 mb-3 text-center">
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
                    {info.linkText}:{" "}
                    <a
                      href={info.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {info.textContent}
                    </a>
                  </Paragraph>
                ))}
              </div>
            ))}
          </div>
        </div>
        <div className="row">
          <div className="col-12 mb-3 text-center">
            <Paragraph variant="body" color="light">
              &copy; {new Date().getFullYear()} BistroHetki. All rights
              reserved.
            </Paragraph>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
