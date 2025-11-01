import DeleteButton from "../delete-button/DeleteButton";
import styles from "./KeyValueField.module.css";

export default function KeyValueField({ initVal, index, setItems, isLastItem=false }) {
  // const apdatedIndex = {key: `k${index}`, value: `v${index}`}
  return (
    <>
      <div className={styles.keyValueFieldWrapper} key={index}>
        <input
          type="text"
          value={initVal.key}
          className="text-input"
          placeholder="Attribute"
          id={`k${index}`}
          onInput={(e) =>
            setItems((prev) =>
              prev.map((item, index) => {
                console.log("eeee:", e.target.id)
                if (e.target.id.match(/\d+$/)[0] == index)
                  return { key: e.target.value, value: item.value };
                else return item;
              })
            )
          }
        />
        <input
          type="text"
          value={initVal.value}
          className="text-input"
          placeholder="Value"
          id={`v${index}`}
          onInput={(e) =>
            setItems((prev) =>
              prev.map((item, index) => {
                console.log("eefff:", e.target.id)
                if (e.target.id.match(/\d+$/)[0] == index)
                  return { key: item.key, value: e.target.value };
                else return item;
              })
            )
          }
        />
        {isLastItem && <DeleteButton setItems={setItems}/>}
      </div>
    </>
  );
}
