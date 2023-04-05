
import { IData } from "@/pages";
import styles from "@/styles/Modal.module.css";
import { Dispatch, ReactNode, SetStateAction } from "react";
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
          {props.children}
          <div
            className={styles.modalDescription}
            style={{ color: props?.selectedData?.color || "white" }}
          >
            <div>{props.selectedData?.canvas || 'unknown'}</div>
            <div>{props?.selectedData?.method|| 'unknown'}</div>
            <div>{props?.selectedData?.author|| 'unknown'}</div>
          </div>
        </div>
      </div>
    );
  }
  return <></>;
};

export default Modal;
