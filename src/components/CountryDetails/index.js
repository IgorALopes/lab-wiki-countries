import { useParams } from "react-router-dom";

export function CountryDetails(props) {
    const {countriesDB} = props

    const {alpha3Code} = useParams()

    const country = countriesDB.filter((c) => {
        return c.alpha3Code === alpha3Code    
    })

    console.log(country)
    return (
    <div className="col-7">
        <h1>{country[0].name.common}</h1>
        <table className="table">
            <thead></thead>
            <tbody>
                <tr>
                    <td style={{width: "30%"}}>Capital</td>
                    <td>{country[0].capital}</td>
                </tr>
                <tr>
                    <td>Area</td>
                    <td>
                    {country[0].area} km
                    <sup>2</sup>
                    </td>
                </tr>
                <tr>
                    <td>Borders</td>
                    <td>
                    <ul style={{listStyle: "none"}}>
                        {country[0].borders.map((currentBorder) => {
                            return <li><a href={currentBorder}>
                                {countriesDB.filter((currentCountry) => countriesDB.alpha3Code === currentBorder ? currentCountry.name.common
                                )}
                            </a></li>
                        })}
                    </ul>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
    )
}