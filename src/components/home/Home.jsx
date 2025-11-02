import { useContext, useEffect, useState } from 'react'
import ScreenWrapper from '../reusables/screen-wrapper/ScreenWrapper'
import './Home.css'
import { Context } from '../../Context'
import Card from '../reusables/card/Card'
import { getPosts } from '../../utils/helpers'

export default function Home() {


  const [loadedPosts, setLoadedPosts] = useState()
  const {screen, setScreen} = useContext(Context)
  
  async function loadPosts() {
    const posts = await getPosts()
    console.log("postssss", posts)
    setLoadedPosts(posts)
  }
  function addFunc() {
    setScreen("entry1")
  }

  useEffect(()=> {
    loadPosts();
  },[screen])




  return(
    <>{screen == "home" && (
      <ScreenWrapper screenTitle='Digital Products' nextButtonText='' addFunc={addFunc} >
        {
          loadedPosts?.map(post => {
            console.log("depug: ", post, "pC:", typeof post.photos[0], URL.createObjectURL(post.photos[0])??"")
            return <Card path={URL.createObjectURL(post.photos[0])} desc={post.description} id={post.id} price={post.price} />
          })
        }
      </ScreenWrapper>
    )}
    </>
  )
}