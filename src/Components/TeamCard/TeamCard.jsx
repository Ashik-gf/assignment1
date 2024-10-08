import React from 'react';
import SocialMedia from '../../util/SocialMedia/SocialMedia';
import DotSvg from '../../util/Svg/DotSvg/DotSvg';

const TeamCard = ({ team }) => {
    const { name, rank, path, img } = team;
    return (
        <div class="w-full px-4 sm:w-1/2 lg:w-1/4 xl:w-1/4">

            <div class="group mb-8 rounded-xl bg-white px-5 pb-10 pt-12 shadow-testimonial dark:bg-dark dark:shadow-none">
                <div class="relative z-10 mx-auto mb-5 h-[120px] w-[120px]">
                    <img src={img} alt="team image" class="h-[120px] w-[120px] rounded-full" />
                    <span
                        class="absolute bottom-0 left-0 -z-10 h-10 w-10 rounded-full bg-secondary opacity-0 transition-all group-hover:opacity-100"></span>
                    <span class="absolute right-0 top-0 -z-10 opacity-0 transition-all group-hover:opacity-100">
                        <DotSvg />
                    </span>
                </div>

                <div class="text-center">
                    <h4 class="mb-1 text-lg font-semibold text-dark dark:text-white">
                        {name}
                    </h4>
                    <p class="mb-5 text-sm text-body-color dark:text-dark-6">
                        {rank}
                    </p>
                    <SocialMedia path={path} />
                </div>
            </div>
        </div>
    )
}

export default TeamCard