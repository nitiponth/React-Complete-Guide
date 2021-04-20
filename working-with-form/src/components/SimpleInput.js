import useInput from "../hooks/use-input";

const SimpleInput = (props) => {
  const {
    value: enteredName,
    isValid: enteredNameIsValid,
    hasError: nameInputError,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetNameInput,
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailInputError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmailInput,
  } = useInput((value) => value.trim().includes("@"));

  let formIsValid = false;

  if (enteredEmailIsValid && enteredEmailIsValid) {
    formIsValid = true;
  }

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    if (!enteredNameIsValid && !enteredEmailIsValid) {
      return;
    } else {
      //send data to end point...
      console.log(enteredName, enteredEmail);
      resetNameInput();
      resetEmailInput();
    }
  };

  const nameInputClasses = nameInputError
    ? "form-control invalid"
    : "form-control";

  const emailInputClasses = emailInputError
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onChange={nameChangeHandler}
          value={enteredName}
          onBlur={nameBlurHandler}
        />
        {nameInputError && <p className="error-text">Name must not be empty</p>}
      </div>

      <div className={emailInputClasses}>
        <label htmlFor="email">Email Address</label>
        <input
          type="email"
          id="email"
          onChange={emailChangeHandler}
          value={enteredEmail}
          onBlur={emailBlurHandler}
        />
        {emailInputError && (
          <p className="error-text">Name must not be empty</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
