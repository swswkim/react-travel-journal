import React from "react"
import Navbar from "./components/Navbar"
import Travels from "./components/Travels"
import data from "./data"

export default function App() {
    const cards = data.map(item => {
        return (
            <Travels
                {...item}
            />
        )
    })


    return (
        <div>
            <Navbar />
            <section className="travelsPage">
                {cards}
            </section>
        </div>
    )
}