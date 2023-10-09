import React, { useState, useEffect } from "react";
import styles from './quiz.module.css'

interface Choice {
  id: number;
  label: string;
  isCorrect: boolean;
  explanation: string;
}

interface Lesson {
  type: "text" | "image" | "video" | "iframe";
  content: string;
}

interface Question {
  id: number;
  question: string;
  lesson: string;
  exhibit: string;
  choices: Choice[];
}

type QuizProps = {
  questions: Question[];
};

const Quiz: React.FC<QuizProps> = (props) => {

  const { questions } = props;
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);
  const [selectedChoice, setSelectedChoice] = useState<number | null>(null);
  const [showDialogue, setShowDialogue] = useState<boolean>(false);
  const [questionStatus, setQuestionStatus] = useState<(string | null)[]>(
    Array(questions.length).fill(null)
  );

  const renderLessonContent = (lesson: Lesson) => {
    switch (lesson.type) {
      case "text":
        return <p>{lesson.content}</p>;
      case "image":
        return <img src={lesson.content} alt="Lesson content" />;
      case "video":
        return (
          <video controls>
            <source src={lesson.content} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        );
      case "iframe":
        return (
          <iframe
            src={lesson.content}
            title="Embedded content"
            width="560"  // or any appropriate value
            height="315"  // or any appropriate value
            frameBorder="0"
            allowFullScreen
          ></iframe>
        );
      default:
        return null;
    }
  };

  const handleChoiceChange = (choiceId: number) => {
    setSelectedChoice(choiceId);
  };

  const handleReset = () => {
    setSelectedChoice(null);
    setShowDialogue(false);
    const updatedStatus = [...questionStatus];
    updatedStatus[currentQuestion] = null;
    setQuestionStatus(updatedStatus);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedChoice !== null) {
      const currentChoice = questions[currentQuestion].choices.find(
        (choice) => choice.id === selectedChoice
      );
      if (currentChoice && currentChoice.isCorrect) {
        const updatedStatus = [...questionStatus];
        updatedStatus[currentQuestion] = "correct";
        setQuestionStatus(updatedStatus);
      } else {
        const updatedStatus = [...questionStatus];
        updatedStatus[currentQuestion] = "incorrect";
        setQuestionStatus(updatedStatus);
      }
      setShowDialogue(true);
    }
  };

const renderChoices = () => {
  return (
<fieldset className={styles.choicesfieldset}>
      <legend className={styles.choiceslegend}></legend>
      {questions[currentQuestion].choices.map((choice) => (
        <label
          key={choice.id}
          className={`${styles.choicelabel} ${
            selectedChoice === choice.id
              ? styles.choiceselected
              : styles.choicedefault
          }`}
          onClick={(e) => {
            if (!showDialogue) {
              handleChoiceChange(choice.id);
            }
          }}  // Check if showDialogue is false before handling the click
        >
          <input
            type="radio"
            name="choice"
            value={choice.id}
            checked={selectedChoice === choice.id}
            className={styles.choiceinput}
            disabled={showDialogue}
          />
          {choice.label}
          {selectedChoice === choice.id && showDialogue && questionStatus[currentQuestion] === "correct" && <span className={styles.correctSymbol}>✓</span>}
          {selectedChoice === choice.id && showDialogue && questionStatus[currentQuestion] === "incorrect" && <span className={styles.incorrectSymbol}>✗</span>}
        </label>
      ))}
    </fieldset> 
  );
};


  const calculateScore = (): number => {
    return questionStatus.filter((status) => status === "correct").length;
  };
  const scorePercentage = (calculateScore() / questions.length) * 100;

  return (

<div className={styles.container}>
<div className={styles.inner}>

<h1 class="text-xl">title</h1>

<div className={styles.lesson}>
  {questions[currentQuestion].lesson && renderLessonContent(questions[currentQuestion].lesson)}
</div>

<div className={styles.card}>

{/* <div className={styles.exhibit}>
    <p>{questions[currentQuestion].exhibit}</p>
    </div>*/}

<div className={styles.exhibit} dangerouslySetInnerHTML={{ __html: questions[currentQuestion].exhibit }}>
</div>

    <div className={styles.quiz}>

<div dangerouslySetInnerHTML={{ __html: questions[currentQuestion].question }}></div>


        {/*<p className={styles.text}>{questions[currentQuestion].question}</p>*/}

        <form onSubmit={handleSubmit}>
          {renderChoices()}

          <div>
            <div>

            <div className={styles.buttonContainer}>
                    {currentQuestion > 0 && (
        <button
          onClick={(e) => {
            e.preventDefault();
            setCurrentQuestion(currentQuestion - 1);
          }}
          className={styles.button}
        >
          ←
        </button>
      )}

              <button
                type="button"
                onClick={handleReset}
                className={styles.button}
              >↺
              </button>
              <button
                type="submit"
                className={styles.button}
                disabled={!selectedChoice}
              >Submit
              </button>

                    {currentQuestion < questions.length - 1 && (
        <button
          onClick={(e) => {
            e.preventDefault();
            setCurrentQuestion(currentQuestion + 1);
          }}
          className={styles.button}
        >
          →
        </button>
      )}
            </div>

          </div>
          </div>
        </form>



        </div> 
        </div> 

        {showDialogue && selectedChoice !== null && (
          <div className={styles.text}>
            <p
              className={`text-${
                questionStatus[currentQuestion] === "correct" ? "green" : "red"
              }-500 font-semibold`}
            >
              {questionStatus[currentQuestion] === "correct"
                ? "Correct!"
                : "Incorrect."}
            </p>
            <p>
              {
                questions[currentQuestion].choices.find(
                  (choice) => choice.id === selectedChoice
                ).explanation
              }
            </p>
          </div> 
        )}


        <div className={styles.progress}>
<div className={styles.containerquestionsmap}>
    <div>
        <div>
            {/* We can include other details here if needed */}
        </div>
        <div>
            <nav className={styles.pagination} aria-label="Pagination">
                {questions.map((q, index) => (
                    <a
                        key={q.id}
                        href="#"
                        onClick={(e) => {
                            e.preventDefault();
                            setCurrentQuestion(index);
                        }}
                        className={
                            index === currentQuestion
                                ? styles.questionmapq
                                : styles.questionmapc
                        }
                    >
                        {index + 1}
                        {questionStatus[index] === "correct" && (
                            <span>&nbsp;&#10003;</span>
                        )}
                        {questionStatus[index] === "incorrect" && (
                            <span>&nbsp;&#10007;</span>
                        )}
                    </a>
                ))}
            </nav>
        </div>
    </div>
</div>


          <p className={styles.text}>
          {calculateScore()}/{questions.length}
          </p>

          <div className={styles.progressBarContainer}>
           <div className={styles.progressBarFill} style={{ width: `${scorePercentage}%` }}></div>
          </div>
        
        </div> 
        </div> 
        </div> 
  );
};



export default Quiz;

