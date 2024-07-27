import "./TopBar.css";
import { useEffect, useState } from "react";
export default function TopBar() {
  const daysOfTheWeek = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thurday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  const currentDate = new Date();
  const [difficulty, setDifficulty] = useState(
    localStorage.getItem("difficulty") || "easy"
  );

  useEffect(() => {
    localStorage.setItem("difficulty", difficulty);
  }, [difficulty]);

  function changeDifficulty(difficulty) {
    setDifficulty(difficulty);
  }

  return (
    <div className="top-bar">
      <div className="top-bar-left">
        <p>Difficulty: </p>
        <select
          value={difficulty}
          onChange={(e) => {
            changeDifficulty(e.target.value);
          }}
        >
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
        </select>
      </div>
      <div className="top-bar-right">
        <p>{`${daysOfTheWeek[currentDate.getDay() - 1]}`}</p>
        <p>
          {` ${
            currentDate.getDay() === (1 || 5)
              ? "(Chest&Arms&Abs)"
              : currentDate.getDay() === 3
              ? "Abs Day"
              : "(Chill out)"
          } `}
        </p>
      </div>
    </div>
  );
}
