import DeleteButton from "../delete-button/DeleteButton";
import styles from "./TextField.module.css";

export default function TextField({ initVal, index, setItems, isLastItem=false }) {
  return (
    <>
      <div className={styles.textInputWrapper} key={index}>
        <input
          className="text-input"
          value={initVal}
          type="text"
          placeholder="Add ..."
          id={index}
          onInput={(e) =>
            setItems((prev) =>
              prev.map((item, index) => {
                console.log("see", e.target.value, item, index, e.target.id.match(/\d+$/[0]))
                if (e.target.id.match(/\d+$/)[0] == index)
                  return e.target.value;
                else return item;
              })
            )
          }
        />
        {isLastItem && <DeleteButton setItems={setItems} />}
      </div>
    </>
  );
}

{
  /* <input type='text' key={index} id={`${sectionTitle}${index}`} value={item.value} onInput={(e)=>setItems(prev => prev.map((item, index)=> {if(e.target.id == index) return e.target.value; else return item} */
}
