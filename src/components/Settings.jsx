import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Settings({currentTheme, setCurrentTheme}) {

    const darkButtonClick = () => {
        setCurrentTheme("dark");
        localStorage.setItem("theme", "dark");
    };

    const lightButtonClick = () => {
        setCurrentTheme("light");
        localStorage.setItem("theme", "light");
    };

    const [value, setValue] = useState(5);

    useEffect(() => {
        const storedMaxValue = localStorage.getItem("maxResults");
        if(storedMaxValue !== undefined) {
            setValue(storedMaxValue);
        }
    }, []);

    const valueChange = (e) => {
        setValue(e.target.value);
        localStorage.setItem("maxResults", e.target.value);
    };

    return (
        <div className="h-screen p-4" data-theme={currentTheme}>
            <h1 className="text-4xl font-bold text-center">Settings</h1>
            <div className="py-4">
                <h2 className="text-3xl font-bold py-2">Max Results : {value}</h2>
                <input type="range" min="5" max="20" value={value} className="range" onChange={valueChange}/>
                <div className="w-full flex justify-between text-xs px-2">
                    <span>5</span>
                    <span>10</span>
                    <span>15</span>
                    <span>20</span>
                </div>
            </div>
            <hr />
            <div className="join flex py-4 justify-center flex-col">
                <h2 className="text-3xl font-bold">Change Theme</h2>
                <div className="flex flex-row justify-center"> 
                    <button className="btn join-item" onClick={lightButtonClick}>Light</button>
                    <button className="btn join-item" onClick={darkButtonClick}>Dark</button>
                </div>
            </div>
            <hr />
            <div className="p-4">
                <Link to="/" className="btn btn-primary">Back</Link>
            </div>
            <hr />
        </div>
    );
}
