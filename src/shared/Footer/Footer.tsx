import { type FC } from "react";
import styles from "./Footer.module.css";
import Paragraph from "../Paragraph/Paragraph";

const Footer: FC = () => {
  return (
    <footer className={styles.footer}>
      <div className="container">
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
