import { ClipLoader } from "react-spinners";
import s from "./Loader.module.css";

const Loader = () => (
  <div className={s.loader}>
    <ClipLoader size={50} color="#1e90ff" aria-label="loading" />
  </div>
);

export default Loader;
