import React, {useEffect, useState} from 'react';
import styled from "styled-components"
import {mock} from "../constants/mockData";
import '@splidejs/splide/dist/css/splide.min.css';
import {Splide, SplideSlide} from "@splidejs/react-splide";


export const Popular = () => {
    const [popular, setPopular] = useState(mock)

    const getPopular = async () => {
        const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9`)
        const data = await api.json()
        setPopular(data.recipes)
    }

    useEffect(() => {
        // getPopular()
    }, [])
    return (
        <Wrapper>
            <h3>Popular Picks</h3>
            <Splide options={{
                perPage: 4,
                arrows: false,
                pagination: false,
                drag: "free",
                gap: "4rem"
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

const Wrapper = styled.div`
  margin: 4rem 0;
`

const Card = styled.div`
  min-height: 25rem;
  border-radius: 2rem;
  overflow: hidden;
  position: relative;

  &:hover p {
    color: white;
  }


  img {
    border-radius: 2rem;
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;

  }

  p {
    position: absolute;
    z-index: 10;
    left: 50%;
    bottom: 0;
    transform: translate(-50%, 0);
    color: black;
    width: 100%;
    text-align: center;
    font-weight: 600;
    font-size: 1rem;
    height: 40%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`

const Gradient = styled.div`
  z-index: 3;
  position: absolute;
  width: 100%;
  height: 100%;

  &:hover {
    background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, .9));
  }
`
