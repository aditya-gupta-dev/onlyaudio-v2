export default function Settings() {
    return (
        <div className="h-screen p-4">
            <h1 className="text-4xl font-bold text-center">Settings</h1>
            <div className="py-4">
                <h2 className="text-3xl font-bold py-2">Max Results</h2>
                <input type="range" min="5" max="20" value="10" className="range" step="4" />
                <div className="w-full flex justify-between text-xs px-2">
                    <span>|</span>
                    <span>|</span>
                    <span>|</span>
                    <span>|</span>
                    <span>|</span>
                </div>
            </div>
            <hr />
            <div className="join flex p-4 justify-center flex-col">
                <h2 className="text-3xl font-bold ">Change Theme</h2>
                <div className="flex flex-row justify-center"> 
                    <button className="btn join-item">Light</button>
                    <button className="btn join-item">Dark</button>
                </div>
            </div>
            <hr />
        </div>
    );
}
