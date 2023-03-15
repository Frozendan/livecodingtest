import React, {useState} from 'react';
import './App.css';
import {areas, countries} from "./data/data";
import Menu from "./components/menu";

function App() {
    const [area, setArea] = useState('');
    const [country, setCountry] = useState<string[]>([]);

    const handleAreaSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setArea(e.target.value);
        setCountry([]); // reset country selection when area changes
    }

    const handleCountrySelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedCountry = e.target.value.split(',');
        setCountry(selectedCountry);
    }

    return (
        <div className="App">
            <select className="area-dropdown" onChange={handleAreaSelect}>
                <option value="">Select an area</option>
                {areas.map((area: string) => (
                    <option key={area} value={area}>{area}</option>
                ))}
            </select>
            <select className="area-dropdown" onChange={handleCountrySelect} value={country.join(',')}>
                <option value="">Select a country</option>
                {area && countries[area].map((country: string) => (
                    <option key={country} value={country}>{country}</option>
                ))}
            </select>
            {country.length > 0 && <Menu country={country} />}
        </div>
    );
}

export default App;
