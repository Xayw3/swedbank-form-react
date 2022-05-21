import { FC } from 'react';
import Tooltip from '../Tooltip/Tooltip';
import './text-area.scss';

type TextAreaProps = {
    onTextChange: (value: string) => void,
    textValue: string,
}

const TextArea: FC<TextAreaProps> = ({ onTextChange, textValue }) => (
  <div className="textarea-wrapper">
    <label htmlFor="name">
      <div className="message-wrapper">
        <p className="textarea-message">Message</p>
        <Tooltip title="?" text="Enter information" />
      </div>
      <textarea value={textValue} onChange={(e) => { onTextChange(e.target.value); }} className="textarea" id="name" />
    </label>
  </div>
);

export default TextArea;
