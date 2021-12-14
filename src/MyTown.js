import React, { useEffect, useState } from 'react';
import img from "./blr.jpg";
import cold from "./cold.png";
import mild from "./mild.png";
import sunny from "./sunny.png";
import "./myTown.css";
export const MyTown = () =>{
    const [temp,setTemp]=useState();
    const [imgSrc,setSrc]=useState("");
    useEffect(()=>{
       fetch("https://api.openweathermap.org/data/2.5/weather?q=bangalore&appid=23f7ba901bbb66cbbddbb3bf925dfc95&units=metric")
        .then(res=>{
            return res.json();
        })
        .then(text=>{
            setTemp(text.main.temp)

        })
        .catch(err=>{
            console.log(err)
        })
        if(temp<10.00)
        {
            setSrc(cold);
        }
        else if(temp>10 && temp<20)
        {
            setSrc(mild);
        }
        else
        {
            setSrc(sunny);
        }
        
    },[temp])
   


    return(
       
        <div className="Section">
            <h1 className="cityText">Bangalore</h1>
            <img src={img} className="townImg"/>
            <div className="text">
                <h2>I live in Bangalore, Karnataka</h2>
            
                <p className="Desc">Bangalore is a beautiful city in Karnataka, India and also known as the Silicon Valley of India</p>
                <tr></tr>
                <img className="tempImg" src={imgSrc}/>
                <span className="temp"> {temp} C</span>
                </div>
        </div>
    )
}