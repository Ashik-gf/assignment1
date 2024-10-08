import React from 'react'
import AboutDesctiptions from '../AboutDescriptions/AboutDesctiptions'
import Gallary from '../Gallary/Gallary'

const About = () => {
    return (
        <section id="about" class="bg-gray-1 pb-8 pt-20 dark:bg-dark-2 lg:pb-[70px] lg:pt-[120px]">
            <div class="container lg:px-20">
                <div>
                    <div class="-mx-4 flex flex-wrap items-center">
                        <AboutDesctiptions />
                        <Gallary />
                    </div>
                </div>
            </div>
        </section >
    )
}

export default About