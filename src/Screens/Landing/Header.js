import logov5 from "../../assets/Preem.png"
import {Link} from 'react-scroll'
export default function Header(){

    return <div id="Header" className="header">
  <div className="logos">
  <ul className="ul">
  <li>
 <img  src={logov5} className="logo"/> 
 </li>
 <li>
    <Link to="Header" className="title">PreemProm</Link>
    </li>

    </ul>
    </div>
    <ul className="ul">
        <li>
        <Link to="Services" smooth duration={500}>
            Services
        </Link>
</li>
<li>
        <a href="Team">
         Team
        </a>
</li>
<li>
        <a href="Contact">
         Contact Us
        </a>
     
        </li>
    </ul>

</div>
}


