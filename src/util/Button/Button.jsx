import React from 'react'

const Button = ({ title, className }) => {
    return (
        <div>
            <div>
                <a href="https://links.tailgrids.com/play-download"
                    className={`${className} `}>
                    {title}
                </a>
            </div>
        </div>
    )
}

export default Button