import React, { useState, Fragment } from "react";

const Survey = (props) => {
  const [surveyType, setSurveyType] = useState("defaultValue");
  const [options, setOptions] = useState([{ value: "", id: Date.now() }]);
  const [question, setQuestion] = useState("");

  const onAddItem = () => {
    if (surveyType === "single" && options.length === 2) return;
    setOptions([...options, { value: "", id: Date.now() }]);
  };

  const onAddAnswer = (text, id) => {
    const optionsCopy = [...options];
    const updatedOptions = optionsCopy.map((option) => {
      if (option.id === id) {
        return { ...option, value: text };
      } else {
        return option;
      }
    });
    setOptions(updatedOptions);
  };

  const onRemoveItem = (id) => {
    const updatedOptions = options.filter((option) => option.id !== id);
    setOptions(updatedOptions);
  };

  return (
    <Fragment>
      <div className="question-type-container">
        <select
          name="survey"
          value={surveyType}
          onChange={(event) => {
            setSurveyType(event.target.value);
          }}
        >
          <option value="defaultValue"> Select Question type</option>
          <option value="multi"> Multi Select</option>
          <option value="single"> Single Select </option>
        </select>
      </div>
      {surveyType !== "defaultValue" ? (
        <div className="survery-container">
          <input
            type="text"
            placeholder="Enter your question"
            className="question-container"
          />
          <p>Options</p>
          {options.map((option) => (
            <div
              className="answer-container"
              key={option.id}
              value={question}
              onChange={(evt) => {
                setQuestion(evt.target.value);
              }}
            >
              <input
                type="text"
                placeholder="Type your answer"
                value={option.value}
                onChange={(event) => {
                  onAddAnswer(event.target.value, option.id);
                }}
              />
              <p onClick={onAddItem}>➕</p>
              <p
                onClick={() => {
                  onRemoveItem(option.id);
                }}
              >
                ➖
              </p>
            </div>
          ))}
          {(surveyType === "multi" && options.length >= 4) ||
          (surveyType === "single" && options.length === 2) ? (
            <div>
              <button>Add Question </button>
              <button>Publish </button>
            </div>
          ) : null}
        </div>
      ) : null}
    </Fragment>
  );
};

export default Survey;
