import React, { useEffect, useState } from 'react'
import './Redomended.css'
import { apiKey, valueconvertor } from '../../data'
import { Link } from 'react-router-dom';

const Reocmended = ({categoryId}) => {

  const [apidata,setApidata]=useState([]);

  const fetchData=async()=>{
    const relatedVideo=`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&videoCategoryId=${categoryId}&key=${apiKey}`;
    await fetch(relatedVideo).then(res=>res.json()).then(data=>setApidata(data.items))
  }

  useEffect (()=>{
fetchData();
  },[])

  return (
    <div className='recommended'>
      {apidata.map((item,index)=>{
        return(
          <Link to={`/video/${item.snippet.categoryId}/${item.id}`} key={index} className="side-video-list">
                  <img src={item.snippet.thumbnails.medium.url} alt="" />
                  <div className="vid-info">
                      <h4>{item.snippet.title}</h4>
                      <p>{item.snippet.channelTitle}</p>
                      <p>{valueconvertor(item.statistics.viewCount)}</p>
                  </div>
                </Link>
        )
      })}
      
      
    </div>
  )
}

export default Reocmended
