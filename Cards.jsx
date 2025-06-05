import React from 'react'
import card1 from "../assets/card1.jpg"
import card2 from "../assets/card2.jpg"
import card3 from "../assets/card3.jpg"
import card4 from "../assets/card4.jpg"
import Button from './Button'


const cardlist = [
    {
        photo: card1,
        title: "React Developer",
        description: "Skilled in building interactive UIs with React.",
        button: <Button title={"Hire me"} />
    },
    {
        photo: card2,
        title: "UI/UX Designer",
        description: "Designing user-first experiences using Figma & Adobe XD.",
        button: <Button title={"View Portfolio"} />
    },
    {
        photo: card3,
        title: "Full Stack Engineer",
        description: "MERN stack expert with 5 years of experience.",
        button: <Button title={"Contact Now"} />
    },
    {
        photo: card4,
        title: "SEO Specialist",
        description: "Helping businesses grow with modern SEO strategies.",
        button: <Button title={"Learn More"} />
    }
];

const Card = ({ photo, title, description, children }) => {
    return (
        <div className='container p-24 flex justify-center items-center'>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 '>
                {
                    cardlist.map((item) => {
                        return (
                            <div key={item.title} className='shadow-xl rounded-xl px-5 py-10 flex flex-col justify-between gap-y-8 hover:shadow-cyan-800/40'>
                                <img className='w-[80px] h-[80px] rounded-2xl object-cover' src={item.photo} alt="" />
                                <div className='flex flex-col gap-3'>
                                    <h1 className='font-bold'>{item.title}</h1>
                                    <p className='font-semibold text-[12px] text-center'>{item.description}</p>
                                </div>
                                <div className=''>{item.button}</div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Card