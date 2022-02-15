import styles from "./Button.module.css";
export default function Button(props) {
  let styling = `${styles.button} ${props.className ? props.className : ""}`;
  return <button className={styling}>{props.children}</button>;
}
