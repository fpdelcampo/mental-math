import AnswerBar from './Components/AnswerBar';
import CenterArea from './Components/CenterArea';
import PromptBar from './Components/PromptBar';
import Score from './Components/Score';
import Timer from './Components/Timer';
import Top from './Components/Top';

import React, { useEffect, useState } from "react";

const math = require('mathjs')

function App() {
	function generateProblem(high=100){
		const symbols = ['+','-','*','/']
		const symbol = symbols[Math.floor(Math.random()*4)]
		var num1;
		var num2;
		if(symbol=='/') {
			num2 = Math.ceil(Math.random()*high)
			num1 = Math.ceil(Math.random()*high)*num2
		}
		else {
			num1 = Math.ceil(Math.random()*high)
			num2 = Math.ceil(Math.random()*high)
		}
		return num1 + " " + symbol + " " + num2 
	}

	const [prompt, setPrompt] = useState(generateProblem());
	const [answer, setAnswer] = useState(math.evaluate(prompt).toString());
	const [userAnswer, setUserAnswer] = useState("");
	const [score, setScore] = useState(0);
	const [time, setTime] = useState(0);
	const [active, setActive] = useState(false);
	const [prevScore, setPrevScore] = useState(-1);

	useEffect(() => {
		update();
	}, [userAnswer]);

	useEffect(() => {
		if(active && time > 0) { 
			const timerId = setTimeout(() => {
				setTime((time) => time - 1)
			}, 1000)
			return () => clearTimeout(timerId);
		}
		else {
			if(time == 0) {
				setActive(false)
			}
			else {
				setTime(0)
				setPrevScore(score)
				setScore(0)
			}
		}
	}, [time, active, score])

	function update() {
		if(answer == userAnswer && active) {
			setScore(score + 1)
			const newPrompt = generateProblem()
			setPrompt(newPrompt)
			const newAnswer = math.evaluate(newPrompt).toString()
			setAnswer(newAnswer)
			setUserAnswer("")
		}
	}

	function handleGame() {
		if(!active) {
			setTime(120)
		}
		setActive((active) => !active)
	}
	// function toggle() {
	// 	if(button) {
	// 		document.getElementById("button").value = "Stop"
	// 		setButton(!button)
	// 	}
	// 	else {
	// 		document.getElementById("button").value = "Start"
	// 		setButton(!button)
	// 	}
	// }

	return (
		<div className='bg-amber-100 min-h-screen w-full'>
			<Top children={[
				<Score score={score}></Score>,
				<Timer time={time} prev={prevScore}></Timer>]}>
			</Top>
			<CenterArea children={[
				<PromptBar prompt={prompt}></PromptBar>, 
				<AnswerBar update={update} userAnswer={userAnswer} setUserAnswer={setUserAnswer}></AnswerBar>]}>	
			</CenterArea>
			<button className='mt-[50px] w-[60px] h-[40px] flex m-auto border-black border-2 bg-gray-300 rounded-lg items-center justify-center' id='button' onClick={handleGame}>{active ? "Stop" : "Start"}</button>
			{prevScore > 0 &&
				<p className='w-[400px] h-[75px] mt-[70px] items-center content-center text-center font-bold text-2xl m-auto border-black border-2 bg-gray-300 rounded-lg'>Congratulations, you scored X!</p>
			}
		</div>
  	);
}

export default App;
