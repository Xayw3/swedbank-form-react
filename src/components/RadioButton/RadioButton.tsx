import { FC } from 'react';
import './radio-button.scss';

type RadioButtonProps = {
    title: string,
    value: string,
    onRadioChange: (value: string) => void,
    btnName: string,
}

const RadioButton: FC<RadioButtonProps> = ({
  title, value, onRadioChange, btnName,
}) => (
  <div className="radio-wrapper">
    <label className="radio-label" htmlFor={value}>
      <input
        className="radio-btn"
        id={value}
        value={value}
        name={btnName}
        type="radio"
        onChange={(e) => { onRadioChange(e.target.value); }}
      />
      <span>{title}</span>
      <span className="radio-checkmark" />
    </label>
  </div>
);

export default RadioButton;
