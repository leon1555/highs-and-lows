import React, {useState} from 'react';
import Nav from './Nav';
import './App.css';

export default function Records() {
    const [records, setRecords] = useState(JSON.parse(localStorage.getItem("records")))
    let names = [];
    let scores = [];

    function resetScores() {
        let defaultRecords=
            [
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
        setRecords(defaultRecords);

    }

    records.forEach((item) => {
        names.push(item.name);
    });
    records.forEach((item) => {
        scores.push(item.streak);
    });
    
    return (
        <div className="records-div">
            <Nav/>
            <div className="records-content">
                <h2>Legendary Highs and Lows</h2>
                <hr></hr>
                <main className="records-list">
                    <div className="names">
                        <div>{names[0]}</div>
                        <div>{names[1]}</div>
                        <div>{names[2]}</div>
                        <div>{names[3]}</div>
                        <div>{names[4]}</div>
                        <div>{names[5]}</div>
                        <div>{names[6]}</div>
                        <div>{names[7]}</div>
                        <div>{names[8]}</div>
                        <div>{names[9]}</div>
                    </div>
                    <div className="scores">
                        <div>{scores[0]}</div>
                        <div>{scores[1]}</div>
                        <div>{scores[2]}</div>
                        <div>{scores[3]}</div>
                        <div>{scores[4]}</div>
                        <div>{scores[5]}</div>
                        <div>{scores[6]}</div>
                        <div>{scores[7]}</div>
                        <div>{scores[8]}</div>
                        <div>{scores[9]}</div>
                    </div>
                </main>
                <button className="records-btn" onClick={resetScores}>RESET HIGH SCORES</button>
            </div>
        </div>
    )
}
