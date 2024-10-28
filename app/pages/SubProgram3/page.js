import React from "react";
import styles from "./SubProgram3.module.scss";
const SubProgram3 = () => {
  return (
    <div className={styles.SubProgram3}>
      <div className={styles.SubProgram3Banner}>
        <img src="/image/program1.jpg" alt="" />
      </div>
      <div className={styles.SubProgram3Container}>
        <div className={styles.SubProgram3Head}>
          <div className={styles.SubProgram3HeadContent}>
            <h2>Main About Course</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
              commodi optio maxime asperiores nesciunt laborum distinctio
              quibusdam hic perferendis repellat? Distinctio temporibus ipsum
              corrupti consectetur cumque autem, itaque natus perspiciatis.{" "}
            </p>
          </div>

          <div className={styles.SubProgram3HeadBtn}>
            <button>Register Now</button>
          </div>
        </div>
        <div className={styles.SubProgram3Contents}>
          <div className={styles.SubProgram3Content}>
            <img src="/image/event1.jpeg" alt="" />
            <div className={styles.subContentText}>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Tempora possimus illo, veritatis incidunt vitae quisquam
                perspiciatis esse cupiditate aliquid quo inventore asperiores
                qui optio eveniet expedita voluptas odio cum. Quibusdam?
              </p>
            </div>
          </div>
          <div className={styles.SubProgram3Content1}>
            <img src="/image/event2.jpeg" alt="" />
            <div className={styles.subContentText}>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Tempora possimus illo, veritatis incidunt vitae quisquam
                perspiciatis esse cupiditate aliquid quo inventore asperiores
                qui optio eveniet expedita voluptas odio cum. Quibusdam?
              </p>
            </div>
          </div>
          <div className={styles.SubProgram3Content}>
            <img src="/image/event3.jpeg" alt="" />
            <div className={styles.subContentText}>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Tempora possimus illo, veritatis incidunt vitae quisquam
                perspiciatis esse cupiditate aliquid quo inventore asperiores
                qui optio eveniet expedita voluptas odio cum. Quibusdam?
              </p>
            </div>
          </div>
          <div className={styles.SubProgram3Content1}>
            <img src="/image/event1.jpeg" alt="" />
            <div className={styles.subContentText}>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Tempora possimus illo, veritatis incidunt vitae quisquam
                perspiciatis esse cupiditate aliquid quo inventore asperiores
                qui optio eveniet expedita voluptas odio cum. Quibusdam?
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubProgram3;
