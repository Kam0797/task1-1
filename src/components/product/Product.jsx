import { useContext, useEffect, useState } from 'react'
import ScreenWrapper from '../reusables/screen-wrapper/ScreenWrapper'
import './Product.css'
import { Context } from '../../Context'
import { getPostById } from '../../utils/helpers'

export default function Product() {

  let id = sessionStorage.getItem('activeID')

  const {setScreen, screen} = useContext(Context)

  const [activePost, setActivePost] = useState(null)

  async function getThisPost() {
    if(!id) return
    const [post] = await getPostById(id)
    setActivePost(post)
  }

  useEffect(()=> {
    getThisPost()
  },[screen])

  function handleBack() {
    setScreen("home")
  }

  return(
    <>
      {screen == "product" && (
        <ScreenWrapper backFunc={handleBack} nextButtonText={`Buy for $${activePost?.price}`} nextFunc={()=>{}}>
          <div className='cover-pic-wrapper'>
            <img src={URL.createObjectURL(activePost?.photos[0])} className='cover-pic' alt='cover picture' />
          </div>
          <div className='space'></div>
          <div className='profile-bar'>
            <img src={'/task1-1/userPic.jpg'} className='profile-pic'  alt='User404' />
            <span className='username'>{'The Chill Guy'}</span>
          </div>
          <div className='cards-wrapper'>
            <div className='desc-card'>
              <div className='desc-short'>{activePost?.description.split('.')[0]}</div>
              <div className='price-badge'>{`$${activePost?.price}`} </div>
              <div className='desc-long'><span className='add-ellipsis'>{activePost?.description}</span> </div>
              {
                // destructure if you ensure detail is !null
                activePost?.addlDetails?.map(detail => 
                  detail && detail.key && detail.value ? <div className='detail' >
                    <span className='detail-key'>{detail.key}</span>
                    <span className='detail-value'>{detail.value}</span>
                    </div> : null
                )
              }
            </div>
            <div className='benefits-title'>Benefits</div>
            <div className='desc-card benefits'>
              {
                activePost?.benefits?.map(benefit => 
                  benefit ? <div className='benefit' >
                    {benefit}
                  </div> : null
                )
              }
            </div>
          </div>

        </ScreenWrapper>
      )}
    </>
  )
}