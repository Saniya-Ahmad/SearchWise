'use client'
import React, { useEffect, useState } from 'react'

export default function CountryLookup() {
    const[country,setCountry] = useState('United States');

    ///to fetch data we have use effect
    useEffect(()=>{
        const getCountry = async()=>{
            const response = await fetch('https://extreme-ip-lookup.com/json') //paid if not paid we would create env and store apikey there here always default united states
                .then((res) =>res.json())
                .then((data) =>data.country);
                if(!response) return;
                setCountry(response);

        };
        getCountry();
    },[]);

  return (
    <div>
       {country}
      
    </div>
  )
}
