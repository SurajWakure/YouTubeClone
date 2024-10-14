import React, { useDebugValue, useEffect, useState } from 'react'
import './PlayVideo.css'
import video from '../../assets/video.mp4'
import like from '../../assets/like.png'
import dislike from '../../assets/dislike.png'
import share from '../../assets/share.png'
import save from '../../assets/save.png'
import jack from '../../assets/jack.png'
import user_profile from '../../assets/user_profile.jpg'
import {apiKey, valueconvertor} from '../../data'
import moment from 'moment'
import { useParams } from 'react-router-dom'
moment

const PlayVideo = () => {
    const {videoId}=useParams()
     const [apidata,setApidata]=useState(null);
     const [channelData,setChannelData]=useState(null);
     const [commentdata,setcommentdata]=useState([]);


     const fetchvidData= async ()=>{
        const videodetailsurl=`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${apiKey}`;
        await fetch(videodetailsurl).then(res=>res.json()).then(data=>setApidata(data.items[0]))
     } 

     const fetchotherdata = async()=>{
        //fetching chanel data 
        const chanel_data_url=` https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${apidata.snippet.channedlId}&key=${apiKey}`;
        await fetch(chanel_data_url).then(res=>res.json()).then(data=>setChannelData(data.items[0]));
        //fetching comment data 
        const commenturl=`https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&maxResults=50&videoId=${videoId}&key=${apiKey}`;
        await fetch(commenturl).then(res=>res.json()).then(data=>setcommentdata(data.items))

     }

    useEffect(()=>{
        fetchvidData(); 
    },[videoId])

    useEffect(()=>{
        fetchotherdata();
    },[apidata])

  return (
    <div className='play-video'>
      {/* <video src={video} controls autoPlay muted></video> */}
      <iframe src={`https://www.youtube.com/embed/${videoId}?autoplay=1`} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      <h3>{apidata?apidata.snippet.title:"title here"}</h3>
      <div className="play-video-info">
        <p>{apidata?valueconvertor(apidata.statistics.viewCount):"16K"} views &bull; {apidata?moment(apidata.snippet.publishedAt).fromNow():"Not Available"} </p>
        <div>
            <span><img src={like} alt="" /> {apidata?valueconvertor(apidata.statistics.viewCount):155}</span>
            <span><img src={dislike} alt="" /></span>
            <span><img src={share} alt="" /> share</span>
            <span><img src={save} alt="" /> save</span>
        </div>
      </div>
      <hr />
      <div className="publisher">
        <img src={channelData?channelData.snippet.thumbnails.default.url:""} alt="" />
        <div>
            <p>{apidata?apidata.snippet.channelTitle:""}</p>
            <span>1M Subscribers</span>
        </div>
        <button>{channelData?channelData.statistics.subscribersCount:"1M"}Subscribe</button>
      </div>
      <div className="vid-description">
        <p>{apidata?apidata.snippet.description.slice(0,250):"No description"}</p>
        <hr />
        <h4>{apidata?valueconvertor(apidata.statistics.commentCount):102}Comments</h4>
        {commentdata.map((item,index)=>{
                return(
                    <div key={index} className="comment">
                    <img src={item.snippet.toplevelComment.snippet.otherProfileImageUrl} alt="" />
                    <div>
                        <h3>{item.snippet.topLevelComment.snippet.authorDisplayName}<span>{}</span></h3>
                        <p>{item.snippet.topLevelComment.snippet.textDisplay}</p>
                        <div className="connent-action">
                            <img src={like} alt="" />
                            <span>{valueconvertor(item.snippet.topLevelComment.snippet.likeCount)}</span>
                            <img src={dislike} alt="" />
                        </div>
                    </div>
                </div>    
                )
        })}
         
      </div>
    </div>
  )
}

export default PlayVideo
