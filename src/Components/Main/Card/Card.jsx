import React,{useEffect}from 'react'
import './Card.css';
import { HiOutlineLocationMarker, HiOutlineClipboardCheck } from 'react-icons/hi';
import Aos from 'aos';
import 'aos/dist/aos.css';

function Card(props) {
    useEffect(()=>{
        Aos.init({duration:2000})
      },[])

  return (
    <div data-aos='fade-up'key={props.id} className="singleDestination">
        <div className="imageDiv">
            <img src={props.imgsrc} alt={props.destTitle} />
        </div>
        <div className="cardInfo">
            <h4 className="destTitle">{props.destTitle}</h4>
            <div className="continent flex">
                <HiOutlineLocationMarker className='icon'/>
                <span className="name">{props.location}</span>
            </div>

            <div className="fees flex">
                <div className="grade">
                    <span>{props.grade}<small>+1</small></span>
                </div>
                <div className="price">
                    <h5>{props.fees}</h5>
                </div>
            </div>

            <div className="desc">
                <p>{props.description}</p>
            </div>
            <button className='btn flex'>
                DETAILS<HiOutlineClipboardCheck className='icon'/>
            </button>
        </div>
    </div>
  )
}

export default Card