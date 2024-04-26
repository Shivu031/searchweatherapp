import React, { useEffect, useState } from 'react';
import "./style.css";

const Tempapp = () => {
    const [city,setCity] = useState(null);
    const [search, setSearch] = useState('Uttar Pradesh');

    useEffect(()=>{
        const fetchApi = async() =>{
            const url = `http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=2eec53c0726dd394aaacb6b1c4d4a9f1`;
            const response = await fetch(url);
            const resJson = await response.json();
            // console.log(resJson);
            setCity(resJson.main);
        }
        fetchApi();
    },[search])
  return (
    <>
      <div className='box'>
        <h1 className='head'>Live Search Weather App</h1>
        <div className="inputData">
            <input type="search" value={search} className='inputField' onChange={(event)=>{
                setSearch(event.target.value)
            }}/>
        </div>
        {!city ? (
            <p className='errorMsg'>No data found</p>
        ):(
            <div>
                <div className="info">
                    <h2 className="location">
                        <i className="fa-solid fa-street-view"></i> {search}
                    </h2>
                    <h1 className='temp'>{city.temp}&deg;Cel</h1>
                    <h3 className="tempmin_max">Min : {city.temp_min}&deg;Cel | Max : {city.temp_max}&deg;Cel</h3>
                </div>
                {/* <div className="wave -one"></div>
                <div className="wave -two"></div>
                <div className="wave -three"></div> */}
            </div>
        )}
      
      </div>
    </>
  )
}

export default Tempapp
