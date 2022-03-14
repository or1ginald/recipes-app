import React, {useEffect, useState} from 'react';
import {Splide, SplideSlide} from "@splidejs/react-splide";
import {Card, Gradient, Wrapper } from './styles';


export const Veggie = () => {
    const [veggie, setVeggie] = useState([])



    const getVeggie = async () => {
        const check = localStorage.getItem("veggie");

        if(check){
            setVeggie(JSON.parse(check))
        } else {
            const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9&tags=vegetarian`)
            const data = await api.json()
            localStorage.setItem("veggie", JSON.stringify(data.recipes))
            setVeggie(data.recipes)
        }
    }

    useEffect( () => {
        getVeggie()
    }, [])
    return (
        <Wrapper>
            <h3>Our Vegetarian Picks</h3>
            <Splide options={{
                perPage: 3,
                arrows: false,
                pagination: false,
                drag: "free",
                gap: "4rem",
                wheel: true
            }}>
                {veggie.map((recipe: any) => (
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


