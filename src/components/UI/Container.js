import styles from "./Container.module.css";

export default function Container(props) {
  return (
    <div className={`${props.className} ${styles.container}`}>
      {props.children}
    </div>
  );
}
