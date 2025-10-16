import { type FC } from "react";
import styles from "./Map.module.css";

const Map: FC = () => {
  return (
    <div className={`${styles.map} mb-10`}>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3205.1087588385485!2d-4.617530100000001!3d36.5514905!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd72e24596912a53%3A0x2815e38e53ef80fd!2sC.%20Sta.%20Rosa%2C%202%2C%2029640%20Fuengirola%2C%20M%C3%A1laga%2C%20Espanja!5e0!3m2!1sfi!2sfi!4v1743259199345!5m2!1sfi!2sfi"
        style={{ border: 0 }}
        allowFullScreen={true}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default Map;
