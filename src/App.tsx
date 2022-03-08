import React, { useState, useCallback } from 'react';
import logo from './logo.svg';
import './App.css';

const App: React.FC = () => {
    const [ count, setCount ] = useState<number>(0);
    const [ count_col, setCount_col ] = useState<number[]>([]);

    const handleIncrement = useCallback(() => {
        const new_color = [
            Math.floor((Math.random()*55) + 200),
            Math.floor((Math.random()*55) + 200),
            Math.floor((Math.random()*55) + 200)
        ];
        setCount(prev => prev + 1);
	    setCount_col(new_color);
    }, []);

 
    const handleDecrement = useCallback(() => {
        const new_color = [
            Math.floor((Math.random()*55) + 200),
            Math.floor((Math.random()*55) + 200),
            Math.floor((Math.random()*55) + 200)
        ];
        setCount(prev => prev - 1);
	    setCount_col(new_color);
    }, []);

    const style = {
        background: `rgb(${count_col[0]},${count_col[1]},${count_col[2]})`
    };

 
    return (
        <div className="App">
            <div style={style}>{ count }</div>
            <div>
                <button onClick={handleIncrement}>+1</button>
                <button onClick={handleDecrement}>-1</button>
		<span>&emsp;</span>
		<button onClick={() => {setCount(0); setCount_col([255,255,255]);}}>リセット</button>
            </div>
        </div>
    )
}

export default App;
