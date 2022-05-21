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

  return (
    <form>
      {activeQuestion === 0 && (
      <fieldset>
        <TextInput
          title="First name"
          label="first-name"
          inputType="name"
          inputValue={data.firstName}
          onInputChange={(value) => setData({ ...data, firstName: value })}
        />
        <TextInput
          title="Last name"
          label="last-name"
          inputType="name"
          inputValue={data.lastName}
          onInputChange={(value) => setData({ ...data, lastName: value })}
        />
        <Buttons
          onNext={() => { setActiveQuestion(activeQuestion + 1); }}
          onBack={() => { setActiveQuestion(activeQuestion - 1); }}
        />
      </fieldset>
      )}
      {activeQuestion === 1 && (
      <fieldset>
        <RadioButton
          title="Male"
          value="male"
          btnName="gender"
          onRadioChange={(value) => { setData({ ...data, gender: value }); }}
        />
        <RadioButton
          title="Female"
          value="female"
          btnName="gender"
          onRadioChange={(value) => { setData({ ...data, gender: value }); }}
        />
        <Buttons
          onNext={() => { setActiveQuestion(activeQuestion + 1); }}
          onBack={() => { setActiveQuestion(activeQuestion - 1); }}
        />
      </fieldset>
      )}
      {activeQuestion === 2 && (
        <fieldset>
          <TextInput
            title="Email"
            label="email"
            inputType="email"
            inputValue={data.email}
            onInputChange={(value) => setData({ ...data, email: value })}
          />
          <TextInput
            title="Phone"
            label="phone"
            inputType="tel"
            inputValue={data.phoneNumber}
            onInputChange={(value) => setData({ ...data, phoneNumber: value })}
          />
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
          <Buttons
            onNext={() => { setActiveQuestion(activeQuestion + 1); }}
            onBack={() => { setActiveQuestion(activeQuestion - 1); }}
          />
        </fieldset>
      )}
      {activeQuestion === 3 && (
        <fieldset>
          <Select
            selectValue={selectValue}
            selectName="payment"
            optionsData={paymentQuestions}
            onSelectChange={(value) => { setData({ ...data, select: value }); setSelectValue(value); }}
          />
          <Buttons
            onNext={() => { setActiveQuestion(activeQuestion + 1); }}
            onBack={() => { setActiveQuestion(activeQuestion - 1); }}
          />
        </fieldset>
      )}
      {activeQuestion === 4 && (
        <fieldset>
          <TextArea textValue={data.message} onTextChange={(value) => setData({ ...data, message: value })} />
          <Buttons
            onNext={() => { setActiveQuestion(activeQuestion + 1); }}
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
        />
      )}
    </form>
  );
};

export default Form;
