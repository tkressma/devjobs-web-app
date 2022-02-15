import styles from "./Button.module.css";
export default function Button(props) {
  return <button className={styles.button}>{props.children}</button>;
}
