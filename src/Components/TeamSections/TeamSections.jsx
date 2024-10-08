import React from 'react'
import img1 from '../../assets/images/team/team-01.png'
import img2 from '../../assets/images/team/team-02.png'
import img3 from '../../assets/images/team/team-03.png'
import img4 from '../../assets/images/team/team-04.png'
import Header from '../../util/Header/Header'
import TeamCard from '../TeamCard/TeamCard'
const teams = [
    {
        "id": 1,
        "img": img1,
        "name": "Melissa Tatcher",
        "rank": "Marketing Expert",
        "path": {
            "fb": "/www.facebook.com",
            "twitter": "/www.twitter.com",
            "instagram": "/www.instagram.com"
        }
    },
    {
        "id": 2,
        "img": img2,
        "name": "Stuard Ferrel",
        "rank": "Digital Marketer",
        "path": {
            "fb": "/www.facebook.com",
            "twitter": "/www.twitter.com",
            "instagram": "/www.instagram.com"
        }
    },
    {
        "id": 1,
        "img": img3,
        "name": "Eva Hudson",
        "rank": "Creative Designer",
        "path": {
            "fb": "/www.facebook.com",
            "twitter": "/www.twitter.com",
            "instagram": "/www.instagram.com"
        }
    },
    {
        "id": 1,
        "img": img4,
        "name": "Jackie Sanders",
        "rank": "Founder of Facebook",
        "path": {
            "fb": "/www.facebook.com",
            "twitter": "/www.twitter.com",
            "instagram": "/www.instagram.com"
        }
    },

]
const TeamSections = () => {
    return (
        <section id="team" class="overflow-hidden bg-gray-1 pb-12 pt-20 dark:bg-dark-2 lg:pb-[90px] lg:pt-[120px]">
            <div class="container mx-auto px-12">
                <div class="-mx-4 flex flex-wrap">
                    <Header headerTag={"Our Team Members"} headerDetails={"Our Clients"} headerDescriptions={"There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form."} />
                </div>
                <div class="-mx-4 flex flex-wrap justify-center">
                    {
                        teams.map(team => <TeamCard key={team.id} team={team} />)
                    }
                </div>
            </div>
        </section>
    )
}

export default TeamSections