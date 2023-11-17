import video from '../../assets/video.mp4'
import Header from './Header'
import Preem from "../../assets/Preem.png"
import Services from './Services'
import {Link } from 'react-scroll'
import { useState } from 'react'
export default function Video(){
    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)
    const closeMenu = () => setClick(false)
return(
    <div className='videoMain'>
   
        <video className='video' src={video} autoPlay loop muted
        /> 
      
     
        <div className='content'>
      


<a>
<Link className='NightlifeButton' smooth duration={500} to='Services'>
<h1 className='button'> Explore the Nightlife</h1>
</Link></a>


        </div>
      <div className='content2'>
      <Header></Header>
      
      </div>

    </div>
)

}