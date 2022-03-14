import React, {useEffect, useState} from 'react';
import styled from "styled-components"
import {useParams} from "react-router-dom";

export const Cuisine = () => {
    const params = useParams();

    const [cuisine, setCuisine] = useState([])
    const getCuisine = async (name: any) => {
        const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&cuisine=${name}`)
        const recipes = await data.json()
        setCuisine(recipes.results)
    }

    useEffect(()=>{
        getCuisine(params.type)
    },[params])

    return (
        <Grid>
            {cuisine.map((item:any)=>(<Card>
                <img src={item.image} alt={item.title}/>
                <h4>{item.title}</h4>
            </Card>))}
        </Grid>
    );
};

const Grid = styled.div`
    display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  gap: 3rem;
`
const Card = styled.div`
    img {
      width: 100%;
      border-radius: 2rem;
    }
  a {
    text-decoration: none;
  }
  h4 {
    text-align: center;
    padding: 1rem;
  }
`

