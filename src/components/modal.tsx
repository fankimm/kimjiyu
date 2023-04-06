import { IData } from "@/pages";
import styles from "../styles/Modal.module.css";
import {
  Dispatch,
  ReactNode,
  SetStateAction,
  useEffect,
  useState,
} from "react";
const Modal = (props: {
  children: ReactNode;
  visible: boolean;
  setVisible: Dispatch<SetStateAction<boolean>>;
  setData: Dispatch<SetStateAction<IData[] | undefined>>;
  data: IData[] | undefined;
  id: number;
}) => {
  const { children, visible, setVisible, setData, data, id } = props;
  const dataOnlyAboutThis = data?.find((item) => item.id === id);
  const [userId, setUserId] = useState("");
  useEffect(() => {
    const idFromLocalStorage = localStorage.getItem("userId");
    if (idFromLocalStorage) {
      setUserId(idFromLocalStorage);
    }
  }, []);
  const handleLikeClick = async () => {
    const isAlreadyLiked = dataOnlyAboutThis?.liked.some(
      (d) => d.userId === userId
    );
    const param = {
      id,
      userId,
    };
    setData((prev) => {
      return prev?.map((p) => {
        if (p.id === dataOnlyAboutThis?.id) {
          const userId = localStorage.getItem("userId");
          if (userId) {
            const isAlreadyLiked = p.liked.some((l) => l.userId === userId);
            return {
              ...p,
              liked: isAlreadyLiked
                ? p.liked.filter((l) => l.userId !== userId)
                : [...p.liked, { userId }],
            };
          }
        }
        return p;
      });
    });
    await fetch("/api/like", {
      method: isAlreadyLiked ? "DELETE" : "POST",
      body: JSON.stringify(param),
    })
      .then((res) => {
        return res.json();
      })
      .catch((err) => {
        alert(`catch : ${err}`);
      });
  };
  if (visible) {
    return (
      <div
        className={styles.modalBackground}
        onClick={(e) => {
          if (e.target === e.currentTarget) {
            setVisible(false);
          }
        }}
      >
        <div className={styles.modalContents}>
          <div
            onClick={handleLikeClick}
            className={styles.modalLike}
            style={{
              color: dataOnlyAboutThis?.liked.find((l) => l.userId === userId)
                ? "red"
                : dataOnlyAboutThis?.color,
            }}
          >
            ♥
          </div>

          {children}
          <div
            className={styles.modalDescription}
            style={{ color: dataOnlyAboutThis?.color || "white" }}
          >
            <div>
              <div>{dataOnlyAboutThis?.canvas || "unknown"}</div>
              <div>{dataOnlyAboutThis?.method || "unknown"}</div>
              <div>{dataOnlyAboutThis?.author || "unknown"}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  return <></>;
};

export default Modal;
