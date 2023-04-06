import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IData } from "@/pages";
import styles from "../styles/Modal.module.css";
import {
  Dispatch,
  ReactNode,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
const Modal = (props: {
  children: ReactNode;
  visible: boolean;
  setVisible: Dispatch<SetStateAction<boolean>>;
  setData: Dispatch<SetStateAction<IData[] | undefined>>;
  data: IData[] | undefined;
  filename: string;
}) => {
  const { children, visible, setVisible, setData, data, filename } = props;
  const dataOnlyAboutThis = data?.find((item) => item.filename === filename);
  const [id, setId] = useState("");
  useEffect(() => {
    const idFromLocalStorage = localStorage.getItem("id");
    if (idFromLocalStorage) {
      setId(idFromLocalStorage);
    }
  }, []);
  const handleLikeClick = () => {
    const param = {
      filename,
      id,
    };
    fetch("/api/like", {
      method: "POST",
      body: JSON.stringify(param),
    })
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        if (res.status === 200) {
          setData((prev) => {
            return prev?.map((p) => {
              if (p.filename === dataOnlyAboutThis?.filename) {
                const id = localStorage.getItem("id");
                if (id) {
                  const isAlreadyLiked = p.liked.includes(id);
                  return {
                    ...p,
                    liked: isAlreadyLiked
                      ? p.liked.filter((l) => l !== id)
                      : [...p.liked, id],
                  };
                }
              }
              return p;
            });
          });
        } else {
          alert(JSON.stringify(res));
        }
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
          <div style={{ width: "50px" }} onClick={handleLikeClick}>
            <FontAwesomeIcon
              className={styles.modalLike}
              icon={faHeart}
              size="2xl"
              style={{
                color: data
                  ?.find(
                    (item) => item.filename === dataOnlyAboutThis?.filename
                  )
                  ?.liked.includes(id)
                  ? "red"
                  : dataOnlyAboutThis?.color,
              }}
            />
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
