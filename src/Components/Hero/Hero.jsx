import React from 'react'
import Button from '../../util/Button/Button'
import FramSvg from '../../util/FramSvg/FramSvg'
import HomeSvg from '../../util/HomeSvg'
import hero from "../../assets/images/hero/hero-image.png"

const Hero = () => {
    return (

        <div id="home" class="  relative overflow-hidden bg-primary pt-[120px] md:pt-[130px] lg:pt-[160px]">
            <div class="container ">
                <div class="-mx-4 flex flex-wrap items-center">
                    <div class="w-full px-4">
                        <div class="hero-content  mx-auto max-w-[780px] text-center">
                            <h1
                                class="mb-6 text-3xl font-bold leading-snug text-white sm:text-4xl sm:leading-snug lg:text-5xl lg:leading-[1.2]">
                                We'll build house of your dream
                            </h1>
                            <p class="mx-auto mb-9 max-w-[600px] text-base font-medium text-white sm:text-lg sm:leading-[1.44]">
                                We have 9000 more review and our customers trust on out property and quality products.
                            </p>
                            <ul class="mb-10 flex flex-wrap items-center justify-center gap-5">
                                <Button title={"Book Now"} className={'inline-flex items-center justify-center rounded-md bg-white px-7 py-[14px] text-center text-base font-medium text-dark shadow-1 transition duration-300 ease-in-out hover:bg-gray-2 hover:text-body-color'} />

                                <Button title={'Contact Now'} className={'flex items-center gap-4 rounded-md bg-white/[0.12] px-6 py-[14px] text-base font-medium text-white transition duration-300 ease-in-out hover:bg-white hover:text-dark'}
                                />
                            </ul>

                        </div>
                    </div>

                    <div class="w-full px-4">
                        <div class=" relative z-10 mx-auto max-w-[845px]">
                            <div class="mt-16">
                                <img src={hero} alt="hero"
                                    class="mx-auto max-w-full rounded-t-xl rounded-tr-xl" />
                            </div>
                            <HomeSvg />
                            <FramSvg />
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Hero