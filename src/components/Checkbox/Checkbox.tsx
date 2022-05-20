import { FC } from 'react';
import './checkbox.scss';

type CheckboxProps ={
    title: string,
    label: string,
    onCheckboxChange: () => void,
    checked: boolean,
}

const Checkbox: FC<CheckboxProps> = ({
  title, label, onCheckboxChange, checked,
}) => (
  <div className="checkbox-wrapper">
    <label className="checkbox-label" htmlFor={label}>
      <input
        className="checkbox"
        id={label}
        type="checkbox"
        onChange={() => { onCheckboxChange(); }}
        checked={checked}
      />
      <span>{title}</span>
      <span className="checkbox-checkmark" />
    </label>
  </div>
);

export default Checkbox;
