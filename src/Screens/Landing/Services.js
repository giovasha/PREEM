import Preem from '../../assets/Preem.png'
import Barcelo2 from '../../assets/Barcelo2.png'
import Istar from '../../assets/Istar.jpg'
import {Link} from 'react-scroll'
import grey2 from '../../assets/grey2.png'
import Kapitol from '../../assets/Kapitol.jpg'
import Panda from '../../assets/Panda.jpg'
import Fabrik from '../../assets/Fabrik.jpg'
import Icon from '../../assets/ico.png'

export default function Services(){
    return(
    <div id='Services' className="services">
    


    <ul className='ulVideo'>
    <li className='premContainer'> 
<img src={Preem} className='preem'/>
</li>  
<li>

<div className='gridContainer'>
<a href="../Barcelo/Barcelo" className='clubContainer'>
<img src={Barcelo2} className='clubs'/>
    <text className='clubsNames'>Teatro <br></br> Barcelo</text>

</a>

<a href="" className='clubContainer'>

    <img src={Kapitol} className='clubs'/>
    <text className='clubsNames'>Kapital</text>
</a>

<a href='' className='clubContainer'>

    <img src={Istar} className='clubs'/>
    <text className='clubsNames'>Istar</text>
</a>

<a href='' className='clubContainer'>

    <img src={Panda} className='clubs'/>
    <text className='clubsNames'>Panda</text>
</a>
<a href='' className='clubContainer'>

<img src={Fabrik} className='clubs'/>
<text className='clubsNames'>Fabrik</text>
</a>

<a href='' className='clubContainer'>

<img src={Icon} className='clubs'/>
<text className='clubsNames'>Icon</text>
</a>
</div>



</li>
</ul>
<img className='grey' src={grey2}/>
</div>)
}