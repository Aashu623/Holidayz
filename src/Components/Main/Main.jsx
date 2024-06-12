import React, {useEffect}from 'react';
import './Main.css';
import Tajmahal from '../../Assets/img.jpg'
import Bali from '../../Assets/bali.jpg'
import EiffileTower from '../../Assets/eiffiltower.jpg'
import Peru from '../../Assets/peru.jpg'
import Bangkok from '../../Assets/bangkok.jpg'
import LondonEye from '../../Assets/londonEye.jpg'
import Maldives from '../../Assets/maldives.jpg'
import Borabora from '../../Assets/borabora.jpg'

import Card from './Card/Card';
import Aos from 'aos';
import 'aos/dist/aos.css';
function Main() {
  useEffect(()=>{
    Aos.init({duration:2000})
  },[])
  const Data = [
    {
      id:1,
      imgsrc:Tajmahal,
      destTitle:'Taj Mahal',
      location:'India',
      grade:'CULTURAL RELAX',
      fees:'$500',
      description:`The Taj Mahal is an ivory-white marble mausoleum on the right bank of the river Yamuna in Agra, Uttar Pradesh, India. It was commissioned in 1631 by the fifth Mughal emperor, Shah Jahan.`
    },
    {
      id:2,
      imgsrc:EiffileTower,
      destTitle:'Eiffil Tower',
      location:'Paris, Frans',
      grade:'CULTURAL RELAX',
      fees:'$800',
      description:'The Eiffel Tower is a wrought-iron lattice tower on the Champ de Mars in Paris, France. Constructed from 1887, it is named after the engineer Gustave Eiffel, whose company designed and built the tower.'
    },
    {
      id:3,
      imgsrc:LondonEye,
      destTitle:'London Eye',
      location:'London, UK',
      grade:'CULTURAL RELAX',
      fees:'$600',
      description:`The London Eye, or the Millennium Wheel, is a cantilevered observation wheel on the South Bank of the River Thames in London. It is Europe's tallest cantilevered observation wheel.`
    },
    {
      id:4,
      imgsrc:Peru,
      destTitle:'Machu Picchu',
      location:'Peru',
      grade:'ADVENTURE',
      fees:'$700',
      description:`Huayna Picchu is a mountain in Peru, rising over Machu Picchu, the so-called Lost City of Incas. This place is popular among tourists as the sunrise from the Sun Gate is simply spectacular.`
    },
    {
      id:5,
      imgsrc:Maldives,
      destTitle:'Maldives',
      location:'Maldives',
      grade:'CULTURAL RELAX',
      fees:'$1200',
      description:`The Maldives is an archipelagic state and country in South Asia, situated in the Indian Ocean. It lies southwest of Sri Lanka and India, about 750 kilometres from the Asian continent's mainland`
    },
    {
      id:6,
      imgsrc:Bangkok,
      destTitle:'Bangkok',
      location:'Thailand',
      grade:'VACATION',
      fees:'$1500',
      description:`Glitterati and vibrant is how Bangkok can be described. With lots of floating markets and perfect nightlife, you are about to have the best time of your life at this amazing place. The place is a unique blend of urban spiritual life.`
    },
    {
      id:7,
      imgsrc:Borabora,
      destTitle:'Bora Bora',
      location:'New Zealand',
      grade:'CULTURAL RELAX',
      fees:'$700',
      description:'The epitome of romance, Bora Bora is one of the best travel destinations in the World. This place is known for its luxurious stays and adventurous activities. '
    },
    {
      id:8,
      imgsrc:Bali,
      destTitle:'Bali',
      location:'Indonesia',
      grade:'CULTURAL RELAX',
      fees:'$800',
      description:`Bali is a province of Indonesia and the westernmost of the Lesser Sunda Islands. East of Java and west of Lombok, the province includes the island of Bali and a few smaller offshore islands.`
    },
    {
      id:9,
      imgsrc:Borabora,
      destTitle:'Bora Bora',
      location:'New Zealand',
      grade:'CULTURAL RELAX',
      fees:'$700',
      description:'The epitome of romance, Bora Bora is one of the best travel destinations in the World. This place is known for its luxurious stays and adventurous activities. '
    }
  ]
  return (
    <section className="main container section">
      <div className="secTitle">
        <h3 data-aos='fade-right' className="title">Most visited destinations</h3>
      </div>
      <div className="secContent grid">
          {
          Data.map((props)=>{
              return (
                <Card  key={props.id}{...props}/>
              )
          })
          }
      </div>
    </section>
  )
}

export default Main