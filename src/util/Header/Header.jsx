import React from 'react'

const Header = ({ headerTag, headerDetails, headerDescriptions }) => {
    return (
        <div class="mx-auto mb-12 max-w-[605px] text-center lg:mb-[70px]">
            <span class="mb-2 block text-lg font-semibold text-primary">
                {headerTag}
            </span>
            <h2 class="mb-3 text-3xl font-bold text-dark dark:text-white sm:text-4xl md:text-[40px] md:leading-[1.2]">
                {headerDetails}
            </h2>
            <p class="text-base text-body-color dark:text-dark-6">
                {headerDescriptions}
            </p>
        </div>
    )
}

export default Header