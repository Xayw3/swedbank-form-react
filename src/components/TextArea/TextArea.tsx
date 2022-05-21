import { FC } from 'react';
import './text-area.scss';

type TextAreaProps = {
    onTextChange: (value: string) => void,
    textValue: string,
}

const TextArea: FC<TextAreaProps> = ({ onTextChange, textValue }) => (
  <div className="textarea-wrapper">
    <label htmlFor="name">
      <p className="textarea-message">Message</p>
      <div className="tooltip">
        info
        <p className="tooltip-info">check it</p>
      </div>
      <textarea value={textValue} onChange={(e) => { onTextChange(e.target.value); }} className="textarea" id="name" />
    </label>
  </div>
);

export default TextArea;
