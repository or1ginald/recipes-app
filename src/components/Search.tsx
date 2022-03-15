import React, {ChangeEvent, useState} from 'react';
import {FaSearch} from "react-icons/fa";
import styled from "styled-components"
import {useNavigate} from "react-router-dom";


export const Search = () => {
    const navigate = useNavigate();
    const [input, setInput]= useState("")

    const onInputChange = (e:ChangeEvent<HTMLInputElement>) => {
        setInput(e.currentTarget.value)
    }
    const onSubmitClick = (e: any)=> {
        e.preventDefault()
        navigate(`/searched/${input}`)
    }
    return (
        <FormsStyle onSubmit={onSubmitClick}>
            <div>
                <FaSearch/>
                <input type="text" onChange={onInputChange}/>
            </div>
        </FormsStyle>
    );
};

const FormsStyle = styled.form`
  margin: 0 20rem;
  //position: relative;
  //width: 100%;
  div {
    display: flex;
    align-items: center;
    width: 100%;
    position: relative;
  }

  input {
    width: 100%;
    border: none;
    background: linear-gradient(35deg, #494949, #313131);
    font-size: 1.5rem;
    color: white;
    padding: 1rem 3rem;
    border-radius: 1rem;
    outline: none;;
  }

  svg {
    position: absolute;
    top: 50%;
    left: 0;
    transform: translate(100%, -50%);
    color: white;
  }
`
