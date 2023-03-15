import React, {useState, useEffect} from 'react';
import './App.css';
import {menu} from "./data/data";

const Menu = ({country}: {country: string[]}) => {
    const [selectedMenu, setSelectedMenu] = useState<string[]>([]);

    useEffect(() => {
        setSelectedMenu(menu[country[0]]);
    }, [country]);

    const handleChooseMenu = (selected: string) => {
        const selectedMenu = menu[selected];
        setSelectedMenu(selectedMenu);
    }

    return (
        <div>
            {country.map((item: string) => (
                <button key={item} onClick={() => handleChooseMenu(item)}>
                    {item}
                </button>
            ))}
            {selectedMenu.length > 0 ? (
                selectedMenu.map((dishes: string) => (
                    <label key={dishes}>{dishes}</label>
                ))
            ) : (
                <p>No dishes available for this country.</p>
            )}
        </div>
    )
}

export default Menu;