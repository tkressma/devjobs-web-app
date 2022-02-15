import styles from "./Container.module.css";

export default function Container(props) {
  return (
    <div
      className={`${styles.container} ${
        props.className ? props.className : ""
      }`}
    >
      {props.children}
    </div>
  );
}
