import React from 'react'
import './Video.css'
import PlayVideo from '../../Components/PlayVideo/PlayVideo'
import Reocmended from '../../Components/Reccomended/Reocmended'
import { useParams } from 'react-router-dom'

const Video = () => {
  const {videoId,categoryId}=useParams();
  return (
    <div className='play-container'>
      <PlayVideo videoId={videoId}/>
      <Reocmended categoryId={categoryId}/>
    </div>
  )
}

export default Video
