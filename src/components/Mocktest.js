

// import React, { useState, useEffect } from 'react';
// import { questions } from './configs';
// const MockTest = () => {
  
//   const [currentQuestion, setCurrentQuestion] = useState(0);
//   const [score, setScore] = useState(0);
//   const [showResult, setShowResult] = useState(false);
//   const [selectedOption, setSelectedOption] = useState('');
//   const [timeLeft, setTimeLeft] = useState(10800); // 3 hours in seconds
//   const [started, setStarted] = useState(false);



//   useEffect(() => {
//     let timer;

//     if (started) {
//       timer = setInterval(() => {
//         setTimeLeft((prevTime) => prevTime - 1);
//       }, 1000);
//     }

//     return () => clearInterval(timer);
//   }, [started]);

//   useEffect(() => {
//     if (timeLeft === 0) {
//       setShowResult(true);
//     }
//   }, [timeLeft]);

//   const handleAnswer = (answer) => {
//     if (answer === questions[currentQuestion].answer) {
//       setScore(score +2);
//     }

//     const nextQuestion = currentQuestion + 1;
//     if (nextQuestion < questions.length) {
//       setCurrentQuestion(nextQuestion);
//       setSelectedOption('');
//     } else {
//       setShowResult(true);
//     }
//   };

//   const formatTime = (time) => {
//     const hours = Math.floor(time / 3600);
//     const minutes = Math.floor((time % 3600) / 60);
//     const seconds = time % 60;

//     return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
//   };

//   const startTest = () => {
//     setStarted(true);
//   };
//   const handleNextQuestion = () => {
//     const nextQuestion = currentQuestion + 1;
//     if (nextQuestion < questions.length) {
//       setCurrentQuestion(nextQuestion);
//       setSelectedOption('');
//     } else {
//       setShowResult(true);
//     }
//   };

//   const handlePrevQuestion = () => {
//     const prevQuestion = currentQuestion - 1;
//     if (prevQuestion >= 0) {
//       setCurrentQuestion(prevQuestion);
//       setSelectedOption('');
//     }
//   };

//   return (
//     <div className='bg-gray-100 h-screen w-full mb-10 mt-32 overflow-hidden'>
//       <h2 className='text-9xl md:text-5xl text-center text-green-500 font-bold'>UGC NET CS Mock Test</h2>
//       {started ? (
//         <>
//           <p className='text-3xl font-extrabold '>Time Left: {formatTime(timeLeft)}</p>
//           {showResult ? (
//             <div className='ml-72'>
//               <p  className='text-3xl mt-10 ml-40 '>Your final score is {score} out of {questions.length*2}</p>
//               <button className= "  w-28 bg-green-700 text-2xl ml-60 mt-10 text-white " onClick={() => window.location.reload()}>Restart</button>
//             </div>
//           ) : (
//             <div className='ml-72 mt-5'>
//               <h3 className=' text-2xl font-medium'>
//                 Question {currentQuestion + 1}: {questions[currentQuestion].question}
//               </h3>
//               <form>
//                 {questions[currentQuestion].options.map((option, index) => (
//                   <div className='text-2xl mt-5' key={index}>
//                     <input
//                       type="radio"
//                       name="option"
//                       value={option}
//                       checked={selectedOption === option}
//                       onChange={(e) => setSelectedOption(e.target.value)}
//                     />
//                     <label>{option}</label>
//                   </div>
//                 ))}
//                    <div className="flex justify-start mt-10">
//                   <button
//                     className="w-28 bg-green-700 text-2xl ml-32 mt-5 text-white rounded-sm"
//                     type="button"
//                     onClick={() => handlePrevQuestion()}
//                     disabled={currentQuestion === 0}
//                   >
//                     Previous
//                   </button>
//                   <button
//                     className="w-28 bg-green-700 text-2xl ml-32 mt-5 text-white rounded-sm"
//                     type="button"
//                     onClick={() => handleAnswer(selectedOption)}
//                   >
//                     Submit
//                   </button>
//                   <button
//                     className="w-28 bg-green-700 text-2xl ml-32 mt-5 text-white rounded-sm"
//                     type="button"
//                     onClick={() => handleNextQuestion()}
//                     disabled={currentQuestion === questions.length - 1}
//                   >
//                     Next
//                   </button>
//                 </div>
//               </form>
//             </div>
//           )}
//         </>
//       ) : (
//         <>
//           <h3 className='text-7xl font-semibold ml-72 mt-10'>General Instructions:</h3>
//           <ol className='text-3xl font-medium p-5 ml-80'>
//             <li>The mock test consists of multiple-choice questions.</li>
//             <li>You have 3 hours to complete the test.</li>
//             <li>Read the questions carefully and select the correct option.</li>
//             <li className='font-bold'>Question 1 to  50 are teaching aptitude and 60-150 are  of Cs</li>
//             <li>Once you submit an answer, you cannot change it.</li>
//             <li>Your final score will be displayed after the test is completed.</li>
//             <li>Question 1 to  50 are teaching aptitude and 60-150 are  of Cs</li>
//           </ol>
//           <button  className="w-28 bg-green-700 text-2xl flex items-center ml-96 mb-10 mt-10 text-white  "  onClick={startTest}>Start Test</button>
//         </>
//       )}
//     </div>
//   );
// };

// export default MockTest;

import React, { useState, useEffect } from 'react';
import { questions } from './configs';

const MockTest = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState(
    Array(questions.length).fill('')
  );
  const [timeLeft, setTimeLeft] = useState(10800); // 3 hours in seconds
  const [started, setStarted] = useState(false);
  const [userAnswers, setUserAnswers] = useState([]); // New state variable to store user's answers

  useEffect(() => {
    let timer;

    if (started) {
      timer = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000);
    }

    return () => clearInterval(timer);
  }, [started]);

  useEffect(() => {
    if (timeLeft === 0) {
      setShowResult(true);
    }
  }, [timeLeft]);

  const handleAnswer = (answer) => {
    const isCorrect = answer === questions[currentQuestion].answer;
    const userAnswer = {
      question: questions[currentQuestion].question,
      userAnswer: answer,
      correctAnswer: questions[currentQuestion].answer,
      isCorrect: isCorrect,
    };

    setUserAnswers((prevAnswers) => [...prevAnswers, userAnswer]);

    if (isCorrect) {
      setScore(score + 2);
    }

    setShowResult(true); // Show result after submitting the answer
  };

  const formatTime = (time) => {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;

    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  const startTest = () => {
    setStarted(true);
  };

  const handleNextQuestion = () => {
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowResult(true);
    }
  };

  const handlePrevQuestion = () => {
    const prevQuestion = currentQuestion - 1;
    if (prevQuestion >= 0) {
      setCurrentQuestion(prevQuestion);
    }
  };

  return (
    <div className='bg-gray-100 h-screen w-full mb-10 mt-32 overflow-hidden'>
      <h2 className='text-9xl md:text-5xl text-center text-green-500 font-bold'>
        UGC NET CS Mock Test
      </h2>
      {started ? (
        <>
          <p className='text-3xl font-extrabold '>
            Time Left: {formatTime(timeLeft)}
          </p>
          {showResult ? (
            <div className='ml-72'>
              <p className='text-3xl mt-10 ml-40'>
                Your final score is {score} out of {questions.length * 2}
              </p>
              
              <button
                className="w-28 bg-green-700 text-2xl ml-60 mt-10 text-white"
                onClick={() => window.location.reload()}
              >
                Restart
              </button>
            </div>
          ) : (
            <div className='ml-72 mt-5'>
              <h3 className=' text-2xl font-medium'>
                Question {currentQuestion + 1}: {questions[currentQuestion].question}
              </h3>
              <form>
                {questions[currentQuestion].options.map((option, index) => (
                  <div className='text-2xl mt-5' key={index}>
                    <input
                      type="radio"
                      name="option"
                      value={option}
                      checked={selectedOptions[currentQuestion] === option}
                      onChange={(e) => {
                        const newSelectedOptions = [...selectedOptions];
                        newSelectedOptions[currentQuestion] = e.target.value;
                        setSelectedOptions(newSelectedOptions);
                      }}
                    />
                    <label>{option}</label>
                  </div>
                ))}
                <div className="flex justify-start mt-10">
                  <button
                    className="w-28 bg-green-700 text-2xl ml-32 mt-5 text-white rounded-sm"
                    type="button"
                    onClick={() => handlePrevQuestion()}
                    disabled={currentQuestion === 0}
                  >
                    Previous
                  </button>
                  <button
                    className="w-28 bg-green-700 text-2xl ml-32 mt-5 text-white rounded-sm"
                    type="button"
                    onClick={() => handleAnswer(selectedOptions[currentQuestion])}
                  >
                    Submit
                  </button>
                  <button
                    className="w-28 bg-green-700 text-2xl ml-32 mt-5 text-white rounded-sm"
                    type="button"
                    onClick={() => handleNextQuestion()}
                    disabled={currentQuestion === questions.length - 1}
                  >
                    Next
                  </button>
                </div>
              </form>
            </div>
          )}
        </>
      ) : (
        <>
          <h3 className='text-7xl font-semibold ml-72 mt-10'>
            General Instructions:
          </h3>
          <ol className='text-3xl font-medium p-5 ml-80'>
            <li>The mock test consists of multiple-choice questions.</li>
            <li>You have 3 hours to complete the test.</li>
            <li>Read the questions carefully and select the correct option.</li>
            
              <li className='font-bold'>Question 1 to  50 are teaching aptitude and 51-150 are  of Cs</li>
           <li>Once you submit an answer, you cannot change it.</li>
           <li>Your final score will be displayed after the test is completed.</li></ol>
              <button  className="w-28 bg-green-700 text-2xl flex items-center ml-96 mb-10 mt-10 text-white  "  onClick={startTest}>Start Test</button>
//         </>
      )}
    </div>
  );
};

export default MockTest;
