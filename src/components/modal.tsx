import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IData } from "@/pages";
import styles from "../styles/Modal.module.css";
import { Dispatch, ReactNode, SetStateAction } from "react";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
const Modal = (props: {
  children: ReactNode;
  selectedData: IData | undefined;
  visible: boolean;
  setVisible: Dispatch<SetStateAction<boolean>>;
}) => {
  if (props.visible) {
    return (
      <div
        className={styles.modalBackground}
        onClick={() => {
          props.setVisible(false);
        }}
      >
        <div className={styles.modalContents}>
          <FontAwesomeIcon
            className={styles.modalLike}
            icon={faHeart}
            size="lg"
            style={{ color: "red" }}
            onClick={() => {
              alert("hello");
            }}
          />
          {props.children}
          <div
            className={styles.modalDescription}
            style={{ color: props?.selectedData?.color || "white" }}
          >
            <div>
              <div>{props.selectedData?.canvas || "unknown"}</div>
              <div>{props?.selectedData?.method || "unknown"}</div>
              <div>{props?.selectedData?.author || "unknown"}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  return <></>;
};

export default Modal;
