import React from 'react'
import Button from '../../util/Button/Button'

const AboutDesctiptions = () => {
    return (
        <div class="w-full px-4 lg:w-1/2">
            <div class="mb-12 max-w-[540px] lg:mb-0">
                <h2
                    class="mb-5 text-3xl font-bold leading-tight text-dark dark:text-white sm:text-[40px] sm:leading-[1.2]">
                    Innovative Tools for Real Estate Excellence
                </h2>
                <p class="mb-10 text-base leading-relaxed text-body-color dark:text-dark-6">
                    The main ‘thrust’ is to focus on educating our clients on how to best navigate the real estate market
                    with interactive guides and personalized consultations led by industry experts.
                    <br />
                    <br />
                    The main ‘thrust' is to focus on educating attendees on how to
                    best protect highly vulnerable business applications with
                    interactive panel.
                </p>

                <Button title={'Know More'} className={'inline-flex items-center justify-center rounded-md border border-primary bg-primary px-7 py-3 text-center text-base font-medium text-white hover:border-blue-dark hover:bg-blue-dark'} />
            </div>
        </div>
    )
}

export default AboutDesctiptions