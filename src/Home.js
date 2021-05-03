import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Cow from './cow_small.png';

export default function Home() {
    const [username, setUsername] = useState("");
    const onChange = event => {
        localStorage.setItem('username', event.target.value);
        setUsername(event.target.value);
      };
    let records_check = JSON.parse(localStorage.getItem("records"));
    let records;
    
    // A default list of high scores (in the spirit of 80s video games)
    if(records_check === null) {
        records = [
            {name: 'Lowly Worm', streak: 911},
            {name: 'High Horse', streak: 13},
            {name: 'Lola', streak: 11},
            {name: 'Hyena', streak: 10},
            {name: 'Low Fidelity', streak: 9},
            {name: 'H\'eye Brow', streak: 8},
            {name: 'Lonely Spinster', streak: 3},
            {name: 'Lowing Cow', streak: 3},
            {name: 'Lois Lane', streak: 2},
            {name: 'Hi Ya', streak: 1},
        ];
        localStorage.setItem("records", JSON.stringify(records));
    } else {
        records = records_check;
    }

    return (
        <div className='home-div'>
            <h1 className="title">Highs & Lows</h1>
            <hr></hr>
            <img className='cow' src={Cow} alt='cow'></img>
            <form>
                <input value={username} type="text" className="username" placeholder="username" onChange={onChange}></input>
                <br></br>
                <Link to='/about'><button className="play-btn">LET'S PLAY!</button></Link>
            </form>
            <div className="empty"></div>
        </div>
    )
}
