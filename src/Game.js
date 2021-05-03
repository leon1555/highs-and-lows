import React, {useState, useEffect} from 'react';
import './App.css';
import Nav from './Nav';
import Modal from "./Modal";
import useModal from './useModal';


function Game() {
    // retrieves username and high scores from localStorage
    let username = localStorage.getItem('username');
    let initialRecordsReverse = JSON.parse(localStorage.getItem('records'));

    // reverses order of records to make the math a bit easier
    let initialRecords = initialRecordsReverse.reverse();
    
    // mutable variables for (respectively) random number, player's winning streak, post-selection message, and records list
    const [number, setNumber] = useState(Math.floor(Math.random() * 20));
    const [streak, setStreak] = useState(0);
    const [message, setMessage] = useState('');
    const [records, setRecords] = useState(initialRecords);
    
    // modal toggle
    const {isShowing, toggle} = useModal();

    // isolates record streaks from the records array of objects and makes a new array from them
    let previousStreakArray = [];
    records.forEach((item) => {
        previousStreakArray.push(item.streak);
    });

    // updates the random number
    useEffect(()=>{
        numGenerator();
    });
   
    let random_num;
    const numGenerator = () => {
        random_num = Math.floor(Math.random() * 20);
        return random_num;
    }

    // inserts a new streak into the record streaks array
    function insert(element, array) {
        array.push(element);
        array.sort(function(a, b) {
          return a - b;
        });
        return array;
      }

    // in case a new streak is tied with an pre-existing streak, the new streak appears first.
    function tieBreak(entry, scoreArray) {
        if(scoreArray.includes(entry)) {
            entry += 0.001;
        }
    }

    // attaches the new streak to the user's name in an object.
    function appendStreak(newName, newStreak){
        tieBreak(newStreak, previousStreakArray);
        let newStreakArray = insert(newStreak, previousStreakArray);
        let indexNewRecord = newStreakArray.indexOf(newStreak);
        // if the new object has an index of 0 (implying that the new streak is lower than the lowest record streak, the existing records array remains the same)
        if(indexNewRecord === 0){
            setRecords(records);
        // but if the new object has an index greater than 0, it means that the user has a record streak. Hence the records array gets updated.
        } else {
            let newRecord = {name: newName, streak: newStreak};
            records.splice(indexNewRecord, 0, newRecord);
            records.splice(0, 1);
            let recordsHiToLo = records.reverse();
            localStorage.setItem("records", JSON.stringify(recordsHiToLo));
            setRecords(records);

        }
    }

    // Functions for the HIGHER and LOWER buttons
    function guessHi(){
        if(number <= random_num) {
            setStreak(streak+1);
            setMessage('You\'re on a roll!');
        } else {
            setStreak(0);
            setMessage('Game over!');
            appendStreak(username, streak, records);
            // Activates modal
            toggle();
        }
        setNumber(random_num);
    }

    function guessLo(){
        if(number >= random_num) {
            setStreak(streak+1);
            setMessage('You\'re on a roll!');
        } else {
            setStreak(0);
            setMessage('Game over!');
            appendStreak(username, streak, records);
            // Activates modal
            toggle();
       
        }
        setNumber(random_num);
    }

    return (
        <div className="game-div">
            <Nav/>
            <h2>Will the next number be</h2>
            <h1>LOWER OR HIGHER?</h1>
            <h2 className="number">{number}</h2>
            <div className="button-bar">
                <button onClick={guessLo} className="button-lo">LOWER</button>
                <button onClick={guessHi} className="button-hi">HIGHER</button>
            </div>
            <h3>streak: {streak}</h3>
            <h3>{message}</h3>
            <Modal
                isShowing={isShowing}
                hide={toggle}
                />
        </div>
    )
    
}

export default Game;