import { Fragment, useContext, useEffect, useRef } from "react";
import ScreenWrapper from "../reusables/screen-wrapper/ScreenWrapper";
import styles from "./About.module.css";
import Section from "../reusables/section/Section";
import { Context } from "../../Context";
// import { getFileFromUrl } from "../../utils/helpers";

export default function About() {
  const nameRef = useRef(null);
  const descriptionRef = useRef(null);
  const priceRef = useRef(null);

  const {
    name,
    setName,
    description,
    setDescription,
    pics,
    setPics,
    price,
    setPrice,

    screen,
    setScreen
  } = useContext(Context);

  function handleNext(e) {
    e.preventDefault()

    const x = pics.some(pic => {
      if(pic != null) return true
    })
    if(!x) return(alert("Select atleast one picture"))

    setScreen("entry2")
  }

  function handleBack() {
    setScreen("home")
  }

  useEffect(()=> {
  },[screen])

  return (
    
    <>{screen == "entry1" && (
      <ScreenWrapper
        screenTitle="About"
        nextButtonText="Next"
        nextFunc={handleNext}
        backFunc={handleBack}
      >
        <input
          type="text"
          className="text-input"
          required
          placeholder="Name"
          value={name}
          ref={nameRef}
          onChange={(e) => setName(e.target.value)}
        />
        <div className={styles.textAreaWrapper}>
        <textarea
          className={`text-input ${styles.desc}`}
          required
          maxLength={2000}
          placeholder="Description"
          value={description}
          ref={descriptionRef}
          onChange={(e) => setDescription(e.target.value)}
        />
        <span className={styles.charCount}>{!description ? "2000" : `${description.length}/2000`}</span>
        </div>

        <Section sectionTitle="Cover Photos" sectionDesc="(Upload upto 5 photos)">
          <div className={styles.uploadButtons}>
            

            {pics.map((pic,index) => (
              <Fragment key={index}>
                <label htmlFor={`photo${index}`} >
                  <div className={styles.photoUploadButton}>
                    {
                      pic ? <img src={pic} className={styles.previewPic} alt="preview" /> : '+'
                    }
                  </div>
                </label>
                <input
                  className={styles.photo}
                  type="file"
                  accept="image/*"
                  id={`photo${index}`}
                  onChange={(e) =>
                    setPics((prev) =>
                      prev.map((pic, index) => {
                        if (index == e.target.id.match(/\d+$/)[0]) {
                          return URL.createObjectURL(e.target.files[0]);
                        } else return pic;
                      })
                    )
                  }
                />
              </Fragment>
            ))}
          </div>
        </Section>

        <Section sectionTitle="Price" sectionDesc="">
          <input
            type="number"
            required
            className="text-input"
            value={price}
            step="0.01"
            min="0"
            placeholder="$0.00"
            ref={priceRef}
            onChange={(e) => setPrice(e.target.value)}
          />
        </Section>
      </ScreenWrapper>)}
    </>
  );
}
