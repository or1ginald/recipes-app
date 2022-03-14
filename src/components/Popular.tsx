import React, {useEffect, useState} from 'react';
import '@splidejs/splide/dist/css/splide.min.css';
import {Splide, SplideSlide} from "@splidejs/react-splide";
import {Card, Gradient, Wrapper } from './styles';


export const Popular = () => {
    const [popular, setPopular] = useState([])

    const getPopular = async () => {
        const check = localStorage.getItem("popular");

        if(check){
            setPopular(JSON.parse(check))
        } else {
            const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9`)
            const data = await api.json()
            localStorage.setItem("popular", JSON.stringify(data.recipes))
            setPopular(data.recipes)
        }
    }

    useEffect( () => {
        getPopular()
    }, [])
    return (
        <Wrapper>
            <h3>Popular Picks</h3>
            <Splide options={{
                perPage: 4,
                arrows: false,
                pagination: false,
                drag: "free",
                gap: "4rem",
                wheel: true,
            }}>
                {popular.map((recipe: any) => (
                    <SplideSlide key={recipe.id}>
                        <Card>
                            <p>{recipe.title}</p>
                            <img src={recipe.image} alt={recipe.title}/>
                            <Gradient/>
                        </Card>
                    </SplideSlide>
                ))}
            </Splide>
        </Wrapper>
    );
};

