
import Backdrop from "./Backdrop"
import ModalOverlay from "./ModalOverlay";
import ReactDOM from "react-dom";
import styles from "./Modal.module.css"


const portalElement = document.getElementById('overlays');
 
const Modal = ({ data, onHideModal }) => {
  return (
    <>
     
      {ReactDOM.createPortal(
        <div
          className={styles[("modal-container", "backdrop")]}
          onClick={onHideModal}
        >
          <ModalOverlay user={data} onClick={onHideModal} />
        </div>,
        portalElement
      )}
    </>
  );
};

export default Modal;