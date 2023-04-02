import { useState, useEffect } from "react";
import { tsParticles } from "tsparticles-engine";
import Mouse from "./Mouse";

import { animated, useSpring } from '@react-spring/web'
const MouseAnimation = () => {
    const widthSreen = Math.round((window.innerWidth / 3) * 2);
    const widthpage = document.documentElement.scrollWidth;
    let [point, SetPoint] = useState(0);
    const [springs, api] = useSpring(() => ({
        from: { x: widthpage / 2 },
    }))
    const music = new Audio('/sounds/raton.mp3')
    const musicVictory = new Audio('/sounds/victory.mp3')



    const handleMouseEnter = () => {
        let movRandom = (Math.round(Math.random() * 1000))
        console.log('movRandom primer cálculo', movRandom, widthSreen, widthpage);
        if (movRandom > widthSreen) {
            movRandom = movRandom - widthSreen;
            console.log('movRandom es mayor')
        }
        let movRandomfrom = movRandom;
        let movRandomto = movRandom + 50;
        if (movRandomto > widthSreen) {
            movRandomto = movRandomto - widthSreen;
            console.log('movRandomto es mayor');
        }

        setTimeout(() => {


            api.start({
                from: {
                    x: movRandomfrom,
                },
                to: {
                    x: movRandomto,
                },
            })

            // console.log(springs.x.animation.to);
            // console.log(springs.x.animation.from);
            console.log('widthSreen', widthSreen);
            console.log('movRandom', movRandom);
            console.log('movRandomfrom', movRandomfrom);
            console.log('movRandomto', movRandomto);
        }, "400");

    }
    const handleClick = () => {
        music.play();
        // activo la música por 200 milisegundos y luego pausa
        setTimeout(() => {
            music.pause();
        }, 200);
        let puntos = point++;
        SetPoint(puntos);

    }

    useEffect(() => {
        const homewidth = document.getElementById('home').clientWidth;
        console.log(homewidth);
    }, []);

    useEffect(() => {
        if (point === 10) {
            musicVictory.play();
        }
    }, [point]);

    return (
        <animated.div
            onClick={handleClick}
            onMouseEnter={handleMouseEnter}
            style={{
                ...springs,
            }}
        >
            <div className=" rounded-full bg-orange-500 text-center w-7"> {point}</div>
            <Mouse />
        </animated.div>
    );
};

export default MouseAnimation;
