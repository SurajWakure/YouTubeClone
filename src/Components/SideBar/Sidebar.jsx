import React from 'react'
import './Sidebar.css'
import Home_image from '../../assets/home.png'
import Game_image from '../../assets/game_icon.png'
import Automobiles_image from '../../assets/automobiles.png'
import Sports_image from '../../assets/Sports.png'
import Entertainment_image from '../../assets/Entertainment.png'
import Tech_image from '../../assets/tech.png'
import Music_image from '../../assets/music.png'
import Blog_image from '../../assets/blogs.png'
import News_image from '../../assets/news.png'
import Jack_image from '../../assets/jack.png'
import Simon_image from '../../assets/simon.png'
import Tom_image from '../../assets/tom.png'
import Megan_image from '../../assets/megan.png'
import Camron_age from '../../assets/cameron.png'


const Sidebar = ({sidebar,category,setcategory}) => {
  return (
    <div className={`sidebar ${sidebar?"":"small-sidebar"}`}>
      <div className="shortcut-links">
        
            <div className={`side-links ${category===0?"active":""}`}  onClick={()=>setcategory(0)}>
            <img src={Home_image} alt=""></img><p>Home</p>
            </div>
            <div className={`side-links ${category===2?"active":""}`} onClick={()=>setcategory(2)}>
                <img src={Automobiles_image} alt=""></img><p>Automobile</p>
            </div>
            <div className={`side-links ${category===20?"active":""}`}  onClick={()=>setcategory(20)}>
                <img src={Game_image} alt=""></img><p>Game</p>
            </div>
            <div className={`side-links ${category===17?"active":""}`}  onClick={()=>setcategory(17)}>
                <img src={Sports_image} alt=""></img><p>Sports</p>
            </div>
            <div className={`side-links ${category===24?"active":""}`} onClick={()=>setcategory(24)}>
                <img src={Entertainment_image} alt=""></img><p>Entertainment</p>
            </div>
            <div className={`side-links ${category===28?"active":""}`}  onClick={()=>setcategory(28)}>
                <img src={Tech_image} alt=""></img><p>Technology</p>
            </div>
            <div className={`side-links ${category===10?"active":""}`}  onClick={()=>setcategory(10)}>
                <img src={Music_image} alt=""></img><p>Msic</p>
            </div>
            <div className={`side-links ${category===22?"active":""}`}  onClick={()=>setcategory(22)}>
                <img src={Blog_image} alt=""></img><p>Blog</p>
            </div>
            <div className={`side-links ${category===25?"active":""}`}  onClick={()=>setcategory(25)}>
                <img src={News_image} alt=""></img><p>News</p>
            </div>
                <hr />
      </div>
      <div className="subsribe-list">
        <h3>Subscribed</h3>
        <div className="side-link">
            <img src={Jack_image} alt="" />
            <p>PewDiePie</p>
        </div>
        <div className="side-link">
            <img src={Simon_image} alt="" />
            <p>Mr.Beast</p>
        </div>
      
        <div className="side-link">
            <img src={Tom_image} alt="" />
            <p>justin Bieber</p>
        </div>
        <div className="side-link">
            <img src={Megan_image} alt="" />
            <p>5-min-craft</p>
        </div> <div className="side-link">
            <img src={Camron_age} alt="" />
            <p>Nas Daily</p>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
