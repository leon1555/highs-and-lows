import React from 'react';
import './App.css';
import Nav from './Nav';
import Lower from './lower.png';
import Higher from './higher.png';
import {Link} from 'react-router-dom';

function About() {
    return (
        <div className='about-div'>
            <Nav/>
            <h1>How to Play</h1>
            <hr></hr>
            <p>Much like life, this game is about highs and lows. Play begins with a random number between 0 and 19 (inclusive) displayed on the screen. Your task is to guess whether the <span>next</span> random number will be higher or lower. That's all there is to it.</p>
            <p>To guess a higher next number, press</p>
            <img src={Higher} alt=''></img>
            <p>To guess a lower next number, press</p>
            <img src={Lower} alt=''></img>
            <p>Answer correctly and the game continues. If the next random number is the same as the current number, it counts as a correct guess. Correct answers are tabulated in your <span>streak</span>. The game ends when you answer incorrectly.</p>
            <p>Record streaks will be saved in <span>High Scores</span>.</p>
            <Link to='/game'><button className="game-btn">LET'S PLAY ALREADY!</button></Link>
        </div>
    )
    
}

export default About;