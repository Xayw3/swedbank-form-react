import { useState } from 'react';
import formData from '../../data/formData';
import paymentQuestions from '../../data/paymentQuestions';
import Buttons from '../Buttons/Buttons';
import Checkbox from '../Checkbox/Checkbox';
import RadioButton from '../RadioButton/RadioButton';
import Select from '../Select/Select';
import SummaryPage from '../SummaryPage/SummaryPage';
import TextArea from '../TextArea/TextArea';
import TextInput from '../TextInput/TextInput';
import './form.scss';

const Form = () => {
  const [data, setData] = useState(formData);
  const [activeQuestion, setActiveQuestion] = useState(0);
  const [selectValue, setSelectValue] = useState('');
  const [error, setError] = useState('');
  const [newError, setNewError] = useState('');

  const nameError = () => {
    setError('');
    setNewError('');

    const includeNumber = /[0-9]/;

    if (!data.firstName) {
      setError('This field is mandsory');
    } else if (includeNumber.test(data.firstName)) {
      setError('Only letters');
    } else if (!data.lastName) {
      setNewError('This field is mandsory');
    } else if (includeNumber.test(data.lastName)) {
      setNewError('Only letters');
    } else {
      setActiveQuestion(activeQuestion + 1);
    }
  };

  const textareaError = () => {
    setError('');

    if (!data.message) {
      setError('Please write details');
    } else {
      setActiveQuestion(activeQuestion + 1);
    }
  };

  const genderError = () => {
    setError('');

    if (data.gender === '') {
      setError('Gender is required');
    } else {
      setActiveQuestion(activeQuestion + 1);
    }
  };

  const contactInfoError = () => {
    setError('');
    setNewError('');

    const onlyNumbers = /[^0-9]/;

    if (data.email === '') {
      setError('Email is required');
    } else if (!data.email.includes('@')) {
      setError('The email adress must include "@"');
    } else if (!data.email.endsWith('.lv') && !data.email.endsWith('.com')) {
      setError('Incorrect email adress');
    } else if (onlyNumbers.test(data.phoneNumber)) {
      setNewError('Only digits');
    } else if (data.phoneNumber.length <= 8) {
      setNewError('Minimal 8 digits');
    } else {
      setActiveQuestion(activeQuestion + 1);
    }
  };

  const optionError = () => {
    setError('');

    if (data.select === '') {
      setError('Select option is mandsory');
    } else {
      setActiveQuestion(activeQuestion + 1);
    }
  };

  return (
    <form className="form" onSubmit={(e) => e.preventDefault()}>
      {activeQuestion === 0 && (
      <fieldset className="form-block">
        <h2 className="form-title">Name</h2>
        <TextInput
          className={error && 'error'}
          title="First name"
          label="first-name"
          inputType="name"
          inputValue={data.firstName}
          errorMessage={error}
          onInputChange={(value) => setData({ ...data, firstName: value })}
        />
        <TextInput
          className={error && 'error'}
          title="Last name"
          label="last-name"
          inputType="name"
          inputValue={data.lastName}
          onInputChange={(value) => setData({ ...data, lastName: value })}
          errorMessage={newError}
        />
        <Buttons
          onNext={() => nameError()}
          onBack={() => { setActiveQuestion(activeQuestion - 1); }}
        />
      </fieldset>
      )}
      {activeQuestion === 1 && (
      <fieldset className="form-block">
        <h2 className="form-title">Gender</h2>
        <RadioButton
          title="Male"
          value="male"
          btnName="gender"
          checked={data.gender === 'male'}
          onRadioChange={(value) => { setData({ ...data, gender: value }); }}
        />
        <RadioButton
          title="Female"
          value="female"
          btnName="gender"
          checked={data.gender === 'female'}
          onRadioChange={(value) => { setData({ ...data, gender: value }); }}
        />
        {error && <p>{error}</p>}
        <Buttons
          onNext={() => genderError()}
          onBack={() => { setActiveQuestion(activeQuestion - 1); }}
        />
      </fieldset>
      )}
      {activeQuestion === 2 && (
        <fieldset className="form-block">
          <h2 className="form-title">Contact information</h2>
          <TextInput
            className={error && 'error'}
            title="Email"
            label="email"
            inputType="email"
            inputValue={data.email}
            onInputChange={(value) => setData({ ...data, email: value })}
            errorMessage={error}
          />
          <TextInput
            className={error && 'error'}
            title="Phone"
            label="phone"
            inputType="tel"
            inputValue={data.phoneNumber}
            onInputChange={(value) => setData({ ...data, phoneNumber: value })}
            errorMessage={newError}
          />
          <div className="form-checkboxes">
            <Checkbox
              checked={data.emailCheck}
              label="sign-up-email"
              title="Sign me up for emails"
              onCheckboxChange={() => (
                data.emailCheck === false
                  ? setData({ ...data, emailCheck: true }) : setData({ ...data, emailCheck: false })
              )}
            />
            <Checkbox
              checked={data.phoneCheck}
              label="sign-up-message"
              title="Sign me up for text messages"
              onCheckboxChange={() => (
                data.phoneCheck === false
                  ? setData({ ...data, phoneCheck: true }) : setData({ ...data, phoneCheck: false })
              )}
            />
          </div>
          <Buttons
            onNext={() => contactInfoError()}
            onBack={() => { setActiveQuestion(activeQuestion - 1); }}
          />
        </fieldset>
      )}
      {activeQuestion === 3 && (
        <fieldset className="form-block">
          <h2 className="form-title">Payment method</h2>
          <Select
            selectValue={selectValue}
            selectName="payment"
            optionsData={paymentQuestions}
            onSelectChange={(value) => { setData({ ...data, select: value }); setSelectValue(value); }}
          />
          {error && <p>{error}</p>}
          <Buttons
            onNext={() => optionError()}
            onBack={() => { setActiveQuestion(activeQuestion - 1); }}
          />
        </fieldset>
      )}
      {activeQuestion === 4 && (
        <fieldset className="form-block">
          <TextArea textValue={data.message} onTextChange={(value) => setData({ ...data, message: value })} />
          {error && <p>{error}</p>}
          <Buttons
            onNext={() => textareaError()}
            onBack={() => { setActiveQuestion(activeQuestion - 1); }}
          />
        </fieldset>
      )}
      {activeQuestion === 5 && (
        <SummaryPage
          fullName={`${data.firstName} ${data.lastName}`}
          gender={data.gender}
          email={data.email}
          phone={data.phoneNumber}
          select={data.select}
          message={data.message}
          signEmail={data.emailCheck && 'Sign up to emails'}
          signPhone={data.phoneCheck && 'Sign up to messages'}
        />
      )}
    </form>
  );
};

export default Form;
