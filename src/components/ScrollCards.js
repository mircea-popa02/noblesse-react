import React from "react";
import { animated, useSpring } from "react-spring";

import "./ScrollCards.css";

import { useScroll } from '@use-gesture/react'
import { Button } from "react-bootstrap";

const map1 = new Map();
map1.set("pic3.jpg", "Buchete")
map1.set("pic2.jpg", "Aranjamente")
map1.set("pic1.jpg", "Coșuri de flori")


function clamp(scroll) {
    if (scroll > 40) {
        return 40;
    }
    if (scroll < -40) {
        return -40;
    }
    return scroll;
}

const Cards = () => {
    const [style, set] = useSpring(() => ({
        transform: "perspective(500px) rotateY(0deg)"
    }));

    const bind = useScroll(event => {
        set({
            transform: `perspective(500px) rotateY(${event.scrolling ? clamp(event.delta[0]) : 0}deg)`
        });
    });


    return (
        <div className="scroll-wrapper">
                <div className="container-scroll" {...bind()}>
                    {[...map1].map(([src, val]) => (
                        <animated.div
                            key={src}
                            className="card-scroll"
                            style={{
                                ...style,
                                backgroundImage: `url(${src})`
                            }}
                        >
                            <div className="card-scroll-content">
                                <h2>{val}</h2>
                                <Button className="btn btn-primary btn-green">Descoperă</Button>
                            </div>
                        </animated.div>
                    ))}
                </div>
        </div>
    );
}

export default Cards;