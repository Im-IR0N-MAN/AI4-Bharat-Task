import styles from "./Modal.module.css";

const Backdrop = ({onClick}) => {
    return <div className={styles.backdrop} onClick={onClick} />;
};

export default Backdrop;
