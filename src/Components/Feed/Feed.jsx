import React, { useEffect, useState } from 'react'
import './Feed.css'
import thumb1 from '../../assets/thumbnail1.png'
import thumb2 from '../../assets/thumbnail2.png'
import thumb3 from '../../assets/thumbnail3.png'
import thumb4 from '../../assets/thumbnail4.png'
import thumb5 from '../../assets/thumbnail5.png'
import thumb6 from '../../assets/thumbnail6.png'
import thumb7 from '../../assets/thumbnail7.png'
import thumb8 from '../../assets/thumbnail8.png'
import { Link } from 'react-router-dom'
import { apiKey, valueconvertor } from '../../data'
import moment from 'moment'

const Feed = ({category}) => {
    const[data,setData]=useState([]);

    const fetchdata=async()=>{
        const videoListurl=`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&videoCategoryId=${category}&key=${apiKey}`;
        await fetch(videoListurl).then(response=>response.json()).then(data=>setData(data.items));

    }
    useEffect(()=>{
        fetchdata();
    },[category])


  return (
    <div className="feed">
        {data.map((item,index)=>{
            return(
                <Link to={`video/${item.snippet.categoryId}/${item.id}`} className='card'>
                <img src={item.snippet.thumbnails.medium.url} alt="" />
                <h2>{item.snippet.title}</h2>
                <h3>{item.snippet.channelTitle}</h3>
                <p>{valueconvertor(item.statistics.viewCount)}views &bull; {moment(item.snippet.publishedAt).fromNow()}</p>
            </Link>
            ) 
        })} 
    </div>
   
  )
}

export default Feed
