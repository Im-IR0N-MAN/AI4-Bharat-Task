import styles from "./Modal.module.css";
import { useEffect } from "react";
import CancelIcon from "@mui/icons-material/Cancel";
import { Button } from "@mui/material";

const ModalOverlay = ({ user, onClick }) => {
  const { address, phone, website } = user.row;

  // Function to handle the keydown event
  function handleKeyDown(event) {
    if (event.keyCode === 27) {
      // Esc key
      onClick();
    }
  }
  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  });

  return (
    <div className={styles["modal-overlay"]}>
      <ul className={styles.list}>
        <li>
          <span className={styles.span}>Address: </span>
          {`${address.street}, ${address.suite}, ${address.city}, ${address.zipcode}`}
        </li>
        <li>
          <span className={styles.span}>Phone: </span>
          {phone}
        </li>
        <li>
          <span className={styles.span}>Website: </span>{" "}
          <a className={styles.anc} href={website}>
            {website}
          </a>
        </li>
      </ul>
      <br />
      <Button className={styles.btn} onClick={onClick}>
        <CancelIcon />
      </Button>
    </div>
  );
};

export default ModalOverlay;
