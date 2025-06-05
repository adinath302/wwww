import React, { useState } from 'react'

const Inputsection = () => {
    const longtext = "In today’s fast-paced digital world, technology continues to evolve at an unprecedented rate, impacting every aspect of our lives. From the way we communicate and work to how we shop and entertain ourselves, innovation is at the heart of this transformation. Smartphones, for instance, have become essential tools, enabling us to stay connected, access information, and perform tasks on the go. Artificial intelligence, machine learning, and automation are revolutionizing industries by increasing efficiency and reducing human error. Remote work and digital"
    const [isToggled, setisToggled] = useState(false);

    const handleToggled = () => {
        setisToggled(!isToggled)
    }

    return (
        <div>
            <p>
                {isToggled ? longtext : (longtext.slice(0, 100)) + " ..."}
            </p>
            <button onClick={handleToggled}>{isToggled ? "Show Less" : "Show More"}</button>

        </div>
    )
}

export default Inputsection