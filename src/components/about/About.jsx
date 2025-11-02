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

  function handleNext() {
    console.log("xxx")
    setScreen("entry2")
  }

  function handleBack() {
    console.log("yyy")
    setScreen("home")
  }

  useEffect(()=> {
    console.log("PICS",screen);
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
          placeholder="Name"
          value={name}
          ref={nameRef}
          onChange={(e) => setName(e.target.value)}
        />
        <textarea
          className="text-input"
          placeholder="Description"
          value={description}
          ref={descriptionRef}
          onChange={(e) => setDescription(e.target.value)}
        />

        <Section sectionTitle="Upload Photos" sectionDesc="(Upto 5 photos)">
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
            type="text"
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
