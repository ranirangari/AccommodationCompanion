import React from 'react'
import MainCarousel from '../../components/HomeCarousel/MainCarousel'
import HomeSectionCarousel from '../../components/HomeSectionCarousel/HomeSectionCarousel'
import { singlebed } from './../../../data/singlebed';

const HomePage = () => {
  return (
    <div>
      <MainCarousel/>
      
      <div className='space-y-10 py-20 flex flex-col justify-center px-5 lg:px-10'>
      <HomeSectionCarousel data={singlebed} sectionName={"Single Bed"}/>
      <HomeSectionCarousel data={singlebed} sectionName={"Double Bed"}/>
      <HomeSectionCarousel data={singlebed} sectionName={"Triple Bed"}/>

      </div>
    </div>
  )
}

export default HomePage
