import { useState } from "react";
import styles from "./Section.module.css";
// import TextField from '../text-field/TextField';

export default function Section({
  sectionTitle,
  sectionDesc,
  Child,
  childValue,
  addButtonLabel,
  children,
}) {
  const [items, setItems] = useState([childValue, childValue]);

  function addChild() {
    setItems((prev) => [...prev, childValue]);
  }

  return (
    <>
      <div className={styles.sectionWrapper}>
        <div className={styles.sectionHead}>
          <div className={styles.sectionTitle}>{sectionTitle}</div>
          <div className={styles.sectionDesc}>{sectionDesc}</div>
          <button className={styles.actionButton} onClick={() => addChild()}>
            {addButtonLabel}
          </button>
        </div>
        <div className={styles.sectionContent}>
          {children ??
            items.map((item, index) => {
              let isLastItem = false;
              if(index == items.length-1) isLastItem = true;

              return <Child
                initVal={item}
                index={`${sectionTitle}${index}`}
                setItems={setItems}
                isLastItem={isLastItem}
              />
})}
        </div>
      </div>
    </>
  );
}

{
  /* <input type='text' key={index} id={`${sectionTitle}${index}`} value={item.value}} */
}
