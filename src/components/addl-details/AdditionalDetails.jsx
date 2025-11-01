import KeyValueField from '../reusables/key-value-field/KeyValueField'
import ScreenWrapper from '../reusables/screen-wrapper/ScreenWrapper'
import Section from '../reusables/section/Section'
import TextField from '../reusables/text-field/TextField'
import './AdditionalDetails.css'

export default function AdditionalDetails() {

  return(
    <>
      <ScreenWrapper screenTitle='Additional Details' nextButtonText='Next' nextFunc={()=>{}}>
        <Section sectionTitle='Benefits' Child={TextField } childValue='' addButtonLabel='+ Add'>

        </Section>
        <Section sectionTitle='Additional Details' Child={KeyValueField} childValue={{key: "", value: ""}} addButtonLabel="+ Add" >

        </Section>
        <select className='text-input'>
          <option selected>Category</option>
          <option >wtf</option>
          <option>idfc</option>
          <option>idgaf</option>
        </select>
      </ScreenWrapper>
    </>
  )
}