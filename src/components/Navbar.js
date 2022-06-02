import React from "react"

export default function Navbar() {
    return (
        <nav>
            <img className="globe--icon" src={require("../images/globe.png")} />
            <p>my travel journal</p>
        </nav>
    )
}