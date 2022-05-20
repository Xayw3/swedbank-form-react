import { FC } from 'react';
import './buttons.scss';

type ButtonsProps = {
    onNext: () => void,
    onBack: () => void,
}

const Buttons:FC<ButtonsProps> = ({ onNext, onBack }) => (
  <div className="btns-wrapper">
    <button className="btn btn-back" onClick={() => { onBack(); }}>Back</button>
    <button className="btn btn-next" onClick={() => { onNext(); }}>Next step</button>
  </div>
);

export default Buttons;
