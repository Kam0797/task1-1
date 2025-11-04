import { useContext, useRef } from 'react'
import KeyValueField from '../reusables/key-value-field/KeyValueField'
import ScreenWrapper from '../reusables/screen-wrapper/ScreenWrapper'
import Section from '../reusables/section/Section'
import TextField from '../reusables/text-field/TextField'
import './AdditionalDetails.css'
import { Context } from '../../Context'
import { addPost } from '../../utils/helpers'

export default function AdditionalDetails() {


  const categoryRef = useRef(null);

  const {name, description, pics, price, benefits, setBenefits, addlDetails, setAddlDetails, category, setCategory, categories, screen, setScreen} = useContext(Context);
 
  const categoriesList = ["Category", ...categories]

  async function handleNext(e) {
    console.log("from nextfunc")
    e.preventDefault()

    //data saving code here
    const postData = {
      postname: name,
      description: description,
      photos: pics,
      price: price,
      benefits: benefits,
      addlDetails: addlDetails,
      category: category      
    }
    await addPost(postData)
    setScreen("home")
  }
  
  function handleBack() {
    setScreen("entry1")
  }

  return(
    <>{screen == "entry2" && (
      <ScreenWrapper screenTitle='Additional Details' nextButtonText='Next' nextFunc={handleNext} backFunc={()=>handleBack()}>
        <Section sectionTitle='Benefits' Child={TextField} childValue='' state={benefits} setState={setBenefits} addButtonLabel='+ Add'>

        </Section>
        <Section sectionTitle='Additional Details' Child={KeyValueField} childValue={{key: "", value: ""}} state={addlDetails} setState={setAddlDetails} addButtonLabel="+ Add" >

        </Section>
        <select className='text-input' required value={category} ref={categoryRef} onChange={()=> setCategory(categoryRef.current.value)}>

          {
            categoriesList.map((cat, index) => {
              return <option value={index}>{cat}</option>
            })
          }
        </select>
      </ScreenWrapper>)}
    </>
  )
}