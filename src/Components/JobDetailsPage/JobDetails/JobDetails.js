import styles from "./JobDetails.module.css";
import JobDetailsHeader from "./JobDetailsHeader";
export default function JobDetails(props) {
  return (
    <article className={styles["job__details"]}>
      <JobDetailsHeader />
      <section className={styles["job__description"]}>
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus
        hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet
        vel, dapibus id, mattis vel, nisi. Sed pretium, ligula sollicitudin
        laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu
        nibh. Nullam mollis. Ut justo. Suspendisse potenti. Sed egestas, ante et
        vulputate volutpat, eros pede semper est, vitae luctus metus libero eu
        augue. Morbi purus libero, faucibus adipiscing, commodo quis, gravida
        id, est. Sed lectus. Praesent elementum hendrerit tortor. Sed semper
        lorem at felis. Vestibulum volutpat, lacus a ultrices sagittis, mi neque
        euismod dui, eu pulvinar nunc sapien ornare nisl. Phasellus pede arcu,
        dapibus eu, fermentum et, dapibus sed, urna.
      </section>
      <section className={styles["job__requirements"]}>
        <h3 className={styles["job__requirements_title"]}>Requirements</h3>
        <p className={styles["job__requirements_description"]}>
          The ideal candidate is as passionate about solving challenges through
          technology. They are well-versed in building proof of concepts from
          scratch and taking these POCs to production and scale. The right fit
          will have the engineering experience to build and iterate quickly and
          is comfortable working with product and design to set the technical
          strategy and roadmap.
        </p>

        <ul>
          <li>test</li>
          <li>test</li>
          <li>test</li>
          <li>test</li>
        </ul>
      </section>

      <section className={styles["job__role"]}>
        <h3 className={"job__role_title"}>What You Will Do</h3>
        <p className={"job__role_description"}>
          We are looking for a Senior Software Engineer to join as one of our
          first hires. As we iterate on our MVP, you will have the opportunity
          to drive the vision and own the build behind our digital experience.
          You'll have the support of an experienced technical advisor, a Head of
          Product, and an external team to work with.
        </p>

        <ol>
          <li>test</li>
          <li>test</li>
          <li>test</li>
          <li>test</li>
        </ol>
      </section>
    </article>
  );
}
