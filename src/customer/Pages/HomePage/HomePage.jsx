import React from 'react'
import HomeCarousel from '../../components/Carousel/HomeCarousel'
import HomeSectionCarousel from '../../components/HomeSectionCaousel/HomeSectionCarousel'
import MensKurta from '../../../Data/MensKurta'

const HomePage = () => {
  return (
    <div>
      <HomeCarousel/>
      <div className='space-y-10 py-20'>
        <HomeSectionCarousel data={MensKurta} sectionName={"Men's Kurta"} />
        <HomeSectionCarousel data={MensKurta} sectionName={"Men's Shoes"}/>
        <HomeSectionCarousel data={MensKurta} sectionName={"Men's Shirts"}/>
        <HomeSectionCarousel data={MensKurta} sectionName={"Women's Saree"}/>
        
      </div>
    </div>
  )
}

export default HomePage
