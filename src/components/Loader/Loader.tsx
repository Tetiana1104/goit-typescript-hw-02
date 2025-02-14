import { TailSpin } from "react-loader-spinner";
import s from "./Loader.module.css";

const Loader: React.FC = () => (
  <div className={s.loader}>
    <TailSpin height="50" width="50" color="#1e90ff" ariaLabel="loading" />
  </div>
);

export default Loader;
