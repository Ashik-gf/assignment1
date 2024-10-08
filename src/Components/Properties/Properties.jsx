import React from 'react'
import Header from '../../util/Header/Header'
import BathRoomsvg from '../../util/PropertiesSvg/BathRoomsvg'
import Pscg from '../../util/PropertiesSvg/Pscg'
const properties = [
    {
        "id": 1,
        "img": "https://images.unsplash.com/photo-1601760562234-9814eea6663a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cmVhbGVzdGF0ZXxlbnwwfHwwfHw%3D&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=500&amp;q=60",
        "title": "Modern Design villa",
        "price": "$3000.00",
        "rooms": {
            "room": "Bedrooms",
            "quentity": "3",
            "room2": "Bathrooms",
            "quentity2": "2",
        },

    },
    {
        "id": 2,
        "img": "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YmVlZCUyMHJvb21zfGVufDB8fDB8fHww",
        "title": "Modern Design villa",
        "price": "$4000.00",
        "rooms": {
            "room": "Bedrooms",
            "quentity": "2",
            "room2": "Bathrooms",
            "quentity2": "2",
        },

    },
    {
        "id": 2,
        "img": "https://plus.unsplash.com/premium_photo-1699596809632-22848594654c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8YmVlZCUyMHJvb21zfGVufDB8fDB8fHww",
        "title": "Roof Top Design villa",
        "price": "$4000.00",
        "rooms": {
            "room": "Bedrooms",
            "quentity": "2",
            "room2": "Bathrooms",
            "quentity2": "2",
        },

    },
    {
        "id": 3,
        "img": "https://plus.unsplash.com/premium_photo-1706308078949-c6a3dbfb52fb?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmVlZCUyMHJvb21zfGVufDB8fDB8fHww",
        "title": "Red Painting Room",
        "price": "$1000.00",
        "rooms": {
            "room": "Bedrooms",
            "quentity": "1",
            "room2": "Bathrooms",
            "quentity2": "3",
        },

    },
    {
        "id": 4,
        "img": "https://images.unsplash.com/photo-1559841644-08984562005a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YmVkJTIwcm9vbXxlbnwwfHwwfHx8MA%3D%3D",
        "title": "Window Side Bed Room",
        "price": "$1500.00",
        "rooms": {
            "room": "Bedrooms",
            "quentity": "1",
            "room2": "Bathrooms",
            "quentity2": "3",
        },

    },
]
const Properties = () => {
    return (
        <section>
            <div class="container lg:px-12">
                <Header headerTag={"Properties"} headerDetails={"Grab your Dream Property"} headerDescriptions={"There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form."} />
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                    {
                        properties.map(p => (<div key={p.id} class="p-4 bg-white rounded-lg border border-gray-600/10">
                            <img
                                src={p.img}
                                alt="property"
                                className=' h-[250px] w-full object-cover'
                            />

                            <div class="p-6">
                                <h4 class="text-2xl font-bold cursor-pointer">{p.title}</h4>

                                <div class="mt-2">
                                    <span class="text-xl font-extrabold text-blue-600">{p.price}</span> /M
                                </div>
                            </div>
                            <div class="flex justify-between p-4 text-gray-700 border-t border-gray-300">
                                <div class="flex items-center">
                                    <Pscg />
                                    <p><span class="font-bold text-gray-900">{p.rooms.quentity}</span> {p.rooms.room}</p>
                                </div>
                                <div class="flex items-center">
                                    <BathRoomsvg />
                                    <p><span class="font-bold text-gray-900">{p.rooms.quentity2}</span> {p.rooms.room}</p>
                                </div>
                            </div>
                        </div>))
                    }



                </div>
            </div>
        </section>
    )
}

export default Properties