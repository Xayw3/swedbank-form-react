import { FC } from 'react';
import './text-input.scss';

type TextInputProps = {
    title: string,
    label: string,
    errorMessage?: string,
    inputType: string,
    inputValue: string,
    onInputChange: (value: string) => void
    className: string,
}

const TextInput: FC<TextInputProps> = ({
  title, label, inputType, inputValue, onInputChange, errorMessage, className,
}) => {
  console.log(1);

  return (
    <div className="label-block">
      <label className="label" htmlFor={label}>
        <p className="input-text">{title}</p>
        <input
          className={`input ${className}`}
          id={label}
          type={inputType}
          value={inputValue}
          onChange={(e) => {
            onInputChange(e.target.value);
          }}
        />
        <p className="error">{errorMessage}</p>
      </label>
    </div>
  );
};

export default TextInput;
