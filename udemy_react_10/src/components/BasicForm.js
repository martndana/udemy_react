import useInput from '../hooks/use-input';

const isNotEmpty = value => value.trim() !== '';
const isEmail = value => value.includes('@');

const BasicForm = (props) => {

  const {
    value: fNameInputValue,
    isValid: fNameInputIsValid,
    hasError: fNameInputHasError,
    valueChangeHandler: fNameChangeHandler,
    inputBlurHandler: fNameBlurHandler,
    reset: fNameInputReset
  } = useInput(isNotEmpty);

  const {
    value: lNameInputValue,
    isValid: lNameInputIsValid,
    hasError: lNameInputHasError,
    valueChangeHandler: lNameChangeHandler,
    inputBlurHandler: lNameBlurHandler,
    reset: lNameInputReset
  } = useInput(isNotEmpty);

  const {
    value: emailInputValue,
    isValid: emailInputIsValid,
    hasError: emailInputHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: emailInputReset
  } = useInput(isEmail);

  let formIsValid = false;

  if (fNameInputIsValid && lNameInputIsValid && emailInputIsValid) {
    formIsValid = true;
  }

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    if (!formIsValid) {
      return;
    }

    fNameInputReset();
    lNameInputReset();
    emailInputReset();
  }

  const fNameStyling = fNameInputHasError ? 'form-control invalid' : 'form-control';
  const lNameStyling = lNameInputHasError ? 'form-control invalid' : 'form-control';
  const emailStyling = emailInputHasError ? 'form-control invalid' : 'form-control';

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className='control-group'>
        <div className={fNameStyling}>
          <label htmlFor='name'>First Name</label>
          <input type='text' id='name' value={fNameInputValue} onChange = {fNameChangeHandler} onBlur={fNameBlurHandler}/>
          {fNameInputHasError && <p className='error-text'>First name field cannot be empty.</p>}
        </div>
        <div className={lNameStyling}>
          <label htmlFor='name'>Last Name</label>
          <input type='text' id='name' value={lNameInputValue} onChange = {lNameChangeHandler} onBlur={lNameBlurHandler}/>
          {lNameInputHasError && <p className='error-text'>Last name field cannot be empty.</p>}
        </div>
      </div>
      <div className={emailStyling}>
        <label htmlFor='name'>E-Mail Address</label>
        <input type='text' id='name' value={emailInputValue} onChange = {emailChangeHandler} onBlur={emailBlurHandler}/>
        {emailInputHasError && <p className='error-text'>Invalid email was entered.</p>}
      </div>
      <div className='form-actions'>
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
