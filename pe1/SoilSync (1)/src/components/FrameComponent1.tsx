import { FunctionComponent } from "react";
import styles from "./FrameComponent1.module.css";

const FrameComponent1: FunctionComponent = () => {
  return (
    <section className={styles.soilSyncInner}>
      <div className={styles.textParent}>
        <div className={styles.text}>
          <div className={styles.titleDescription}>
            <div className={styles.title}>
              <div className={styles.contactNow}>Contact Now</div>
              <h1 className={styles.getInTouch}>GET IN TOUCH NOW</h1>
            </div>
            <div className={styles.dissuadeEcstaticAnd}>
              Ready to optimize your soil fertility management? Contact Soil
              Sync today to learn more about our innovative solutions and how we
              can help you achieve your agricultural goals.
            </div>
          </div>
          <div className={styles.contacts}>
            <div className={styles.phoneParent}>
              <div className={styles.phone}>Phone</div>
              <div className={styles.wrapper}>
                <div className={styles.div}>+123456789</div>
              </div>
            </div>
            <div className={styles.emailParent}>
              <div className={styles.email}>Email</div>
              <div className={styles.helpsoilsynccomWrapper}>
                <div className={styles.helpsoilsynccom}>help@soilsync.com</div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.nameParent}>
          <input className={styles.name} placeholder="Your Name" type="text" />
          <input
            className={styles.number}
            placeholder="Phone Number"
            type="text"
          />
          <input
            className={styles.email1}
            placeholder="Your Email"
            type="text"
          />
          <textarea
            className={styles.subject}
            placeholder="Your Message"
            rows={9}
            cols={33}
          />
          <button className={styles.button}>
            <div className={styles.discoverMore}>Send Message</div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent1;
