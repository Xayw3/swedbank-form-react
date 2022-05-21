import { FC } from 'react';
import './select.scss';

type SelectProps = {
    onSelectChange: (value: string) => void,
    selectValue: string,
    optionsData: any[],
    selectName: string,
}

const Select: FC<SelectProps> = ({
  onSelectChange, selectValue, optionsData, selectName,
}) => {
  const optionsArr = optionsData;

  const options = optionsArr.map((text, i) => (
    <option key={Math.random()} value={i}>{text}</option>
  ));

  return (
    <div className="select-wrapper">
      <select
        name={selectName}
        className="select"
        value={selectValue}
        onChange={(e) => {
          onSelectChange(e.target.value);
        }}
      >
        <option selected hidden>Select an option</option>
        {options}
      </select>
    </div>
  );
};

export default Select;
