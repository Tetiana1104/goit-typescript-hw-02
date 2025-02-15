import { useEffect, ReactNode } from "react";
import ReactModal from "react-modal";
import styles from "./ImageModal.module.css";

type Image = {
  urls: {
    regular: string;
  };
  alt_description?: string;
  description?: string;
  // user: {
  user?: {
    name: string;
  } | null;
};

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  children?: ReactNode;
  image?: Image | null;
  onNavigate?: (direction: "next" | "prev") => void;
};

// const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children, image }) => {
const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  children,
  image,
  onNavigate,
}) => {
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }

    return () => document.body.classList.remove("no-scroll");
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [onClose]);

  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onClose}
      className={styles.modal}
      overlayClassName={styles.overlay}
      ariaHideApp={false}
    >
      {image && (
        <div className={styles.content}>
          <img
            src={image.urls.regular}
            alt={image.alt_description || "Image"}
            className={styles.image}
          />
          <p className={styles.description}>
            {image.description || "No description available"}
          </p>
          {/* <p className={styles.author}>Author: {image.user.name}</p> */}
          <p className={styles.author}>
            Author: {image.user?.name || "Anonymous"}
          </p>
        </div>
      )}
      <button onClick={onClose} className={styles.closeBtn}>
        ✕
      </button>

      {onNavigate && (
        <div className={styles.navButtons}>
          <button onClick={() => onNavigate("prev")} className={styles.prevBtn}>
            ⬅️ Назад
          </button>
          <button onClick={() => onNavigate("next")} className={styles.nextBtn}>
            Вперед ➡️
          </button>
        </div>
      )}

      {children}
    </ReactModal>
  );
};

export default Modal;
