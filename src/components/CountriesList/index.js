import { Link } from "react-router-dom"

export function CountriesList(props) {
    const {countriesDB} = props

    return (
    <div className="container">
        <div className="row">
            <div className="col-5" style={{maxHeight: "90vh", overflow: "scroll"}}>
                <div className="list-group">
                    {countriesDB.map((currentCountry) => {
                        return <Link className="list-group-item list-group-item-action" to={currentCountry.alpha3Code}>{currentCountry.name.common}</Link>
                    })}
                </div>
            </div>
        </div>
    </div>
    )
}