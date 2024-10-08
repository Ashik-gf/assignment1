import React from 'react'

const Svg = ({ d }) => {
    return (
        <div>
            <svg width="36"
                height="36"
                viewBox="0 0 36 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path d={d} fill="white" />
            </svg>
        </div>
    )
}

export default Svg