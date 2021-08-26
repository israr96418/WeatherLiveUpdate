import React, { useState, useEffect } from 'react'

function TempApp() {
    const [city, Setcity] = useState({})
    const [search, SetSearch] = useState('London')

    useEffect(() => {
        const fetchAp = async () => {

            const url = `http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=a8ae114350df99534c2bfecc60e2adb5`

            const result = await fetch(url)
            //    console.log(result)

            const jsondata = result.json()

                // Setcity(jsondata.main)
                // console.log(jsondata)

                .then(res => {
                    Setcity(res.main)
                    console.log(res)

                })
                .catch(error => { console.log(error) })

        };
        fetchAp();
    }, [search])

    return (
        <>
            <h1 id="heading">Live Weather Update</h1>
            <div className="box">
                <div className="inputData">
                    <label htmlFor="weather">Search Here:</label>
                    <input type="search" className="inputfeild" id="weather" onChange={(e) => {
                        SetSearch(e.target.value)
                    }} />

                </div>


                {
                    !city ?
                        (
                            <p>No Data Found</p>
                        ) :
                        (

                            <div className="info">
                                <h2 className="location">
                                    <i className="fas fa-street-view"></i>{search}
                                </h2>
                                <h1 className="temp">
                                    {city.temp}Cel
                                </h1>
                                <h3 className="temp-min-max">{city.temp_max}Cel | {city.temp_min}Cel</h3>
                                <div>Humidity {city.humidity}</div>

                            </div>
                        )
                }
            </div>
        </>
    )
}

export default TempApp
