import { FC } from 'react';
import './radio-button.scss';

type RadioButtonProps = {
    title: string,
    value: string,
    onRadioChange: (value: string) => void,
    btnName: string,
    checked: boolean,
}

const RadioButton: FC<RadioButtonProps> = ({
  title, value, onRadioChange, btnName, checked,
}) => (
  <div className="radio-wrapper">
    <label className="radio-label" htmlFor={value}>
      <input
        className="radio-btn"
        id={value}
        value={value}
        checked={checked}
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
