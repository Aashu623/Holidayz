import React,{useEffect}from 'react'
import './Footer.css'
import video from '../../Assets/video2.mp4'
import {MdOutlineTravelExplore} from 'react-icons/md'
import { FiChevronRight, FiSend } from 'react-icons/fi'
import {AiOutlineTwitter,AiFillInstagram,AiFillYoutube} from 'react-icons/ai';
import {FaTripadvisor} from 'react-icons/fa';
import Aos from 'aos';
import 'aos/dist/aos.css';
function Footer() {
  useEffect(()=>{
    Aos.init({duration:2000})
  },[])
  return (
    <section className='footer'>
      <div className="videoDiv">
        <video src={video} loop autoPlay muted type='videp/mp4'></video>
      </div>

      <div className="secContent container">
        <div data-aos='fade-up' className="contactDiv flex">
          <div className="text ">
            <small className='small'>KEEP IN TOUCH</small>
            <h2 className='heading'>Travel with us</h2>
          </div>

          <div className="inputDiv flex">
            <input type="text" placeholder='Enter Email Address' />
            <button data-aos='fade-up'  className='btn flex' type='submit'>
              SEND<FiSend className='btn-icon'/>
            </button>
          </div>
        </div>

        <div className="footerCard flex">
          <div className="footerIntro flex">
            <div className="logoDiv">
              <a href="/" className="logo flex">
                <MdOutlineTravelExplore className='icon'/> Holiday'z
              </a>
            </div>
            <div data-aos='fade-up' className="footerParagraph">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam culpa eaque sit tempore alias, reiciendis, porro delectus placeat voluptates incidunt laudantium. Fugiat neque consequuntur facilis totam est tempore obcaecati dolorem? x
            </div>
            <div data-aos='fade-up' className="footerSocials flex">
              <AiOutlineTwitter className='social-icon'/>
              <AiFillYoutube className='social-icon'/>
              <AiFillInstagram className='social-icon'/>
              <FaTripadvisor className='social-icon'/>
            </div>
          </div>

          <div className="footerLinks grid">
            {/* group one */}
            <div data-aos='fade-up' data-aos-duration='3000'className="linkGroup">
              <span className="groupTitle">OUR AGENCY</span>

              <li className="footerList flex">
                <FiChevronRight className='icon'/>
                Services
              </li>
              <li className="footerList flex">
                <FiChevronRight className='icon'/>
                Insurance
              </li>
              <li className="footerList flex">
                <FiChevronRight className='icon'/>
                Agency
              </li>
              <li className="footerList flex">
                <FiChevronRight className='icon'/>
                Tourism
              </li>
              <li className="footerList flex">
                <FiChevronRight className='icon'/>
                Payment
              </li>
            </div>
            {/* group two */}
            <div data-aos='fade-up'data-aos-duration='4000' className="linkGroup">
              <span className="groupTitle">PARTNERS</span>

              <li className="footerList flex">
                <FiChevronRight className='icon'/>
                Bookings
              </li>
              <li className="footerList flex">
                <FiChevronRight className='icon'/>
                Rentcars
              </li>
              <li className="footerList flex">
                <FiChevronRight className='icon'/>
                HostelWorld
              </li>
              <li className="footerList flex">
                <FiChevronRight className='icon'/>
                Trivago
              </li>
              <li className="footerList flex">
                <FiChevronRight className='icon'/>
                TripAdvisor
              </li>
            </div>
            {/* group three */}
            <div data-aos='fade-up'data-aos-duration='5000' className="linkGroup">
              <span className="groupTitle">LAST MINUTE</span>

              <li className="footerList flex">
                <FiChevronRight className='icon'/>
                London
              </li>
              <li className="footerList flex">
                <FiChevronRight className='icon'/>
                California
              </li>
              <li className="footerList flex">
                <FiChevronRight className='icon'/>
                Indonesia
              </li>
              <li className="footerList flex">
                <FiChevronRight className='icon'/>
                Europe
              </li>
              <li className="footerList flex">
                <FiChevronRight className='icon'/>
                Oceania
              </li>
            </div>
          </div>

          <div className="footerDiv flex">
            <small>BEST TRAVEL WEBSITE THEME</small>
            <small>Developed By <a href="https://github.com/Aashu623" target='_blank' rel="noopener noreferrer">Aashish Kushwah</a></small>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Footer;