import useReInput from "../hooks/use-rinput";

const BasicForm = (props) => {
  const isNotEmpty = (value) => value.trim() !== "";
  const isEmail = (value) => value.includes("@");

  const {
    value: enteredName,
    isValid: enteredNameIsValid,
    hasError: nameInputError,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetNameInput,
  } = useReInput(isNotEmpty);

  const {
    value: enteredLastName,
    isValid: enteredLastNameIsValid,
    hasError: lastNameInputError,
    valueChangeHandler: lastNameChangeHandler,
    inputBlurHandler: lastNameBlurHandler,
    reset: resetLastNameInput,
  } = useReInput(isNotEmpty);

  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailInputError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmailInput,
  } = useReInput(isEmail);

  let formIsValid = false;

  if (enteredNameIsValid && enteredLastNameIsValid && enteredEmailIsValid) {
    formIsValid = true;
  }

  const formSummitHandler = (event) => {
    event.preventDefault();

    if (!formIsValid) return;

    console.log(enteredName, enteredLastName, enteredEmail);

    resetNameInput();
    resetLastNameInput();
    resetEmailInput();
  };

  const nameInputClasses = nameInputError
    ? "form-control invalid"
    : "form-control";
  const lastNameInputClasses = lastNameInputError
    ? "form-control invalid"
    : "form-control";
  const emailInputClasses = emailInputError
    ? "form-control invalid"
    : "form-control";
  return (
    <form onSubmit={formSummitHandler}>
      <div className="control-group">
        <div className={nameInputClasses}>
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            id="name"
            value={enteredName}
            onChange={nameChangeHandler}
            onBlur={nameBlurHandler}
          />
          {nameInputError && (
            <p className="error-text">Name must not be empty</p>
          )}
        </div>
        <div className={lastNameInputClasses}>
          <label htmlFor="lastname">Last Name</label>
          <input
            type="text"
            id="lastname"
            value={enteredLastName}
            onChange={lastNameChangeHandler}
            onBlur={lastNameBlurHandler}
          />
          {lastNameInputError && (
            <p className="error-text">Lastname must not be empty</p>
          )}
        </div>
      </div>
      <div className={emailInputClasses}>
        <label htmlFor="email">E-Mail Address</label>
        <input
          type="email"
          id="email"
          value={enteredEmail}
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
        />
        {emailInputError && (
          <p className="error-text">Email must not be empty</p>
        )}
      </div>

      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
