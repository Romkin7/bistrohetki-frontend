import { type FC } from "react";
import styles from "./Footer.module.css";

const Footer: FC = () => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <p className="text-center">
          &copy; {new Date().getFullYear()} BistroHetki. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
