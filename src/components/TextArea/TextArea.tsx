import './text-area.scss';

const TextArea = () => (
  <div className="textarea-wrapper">
    <label htmlFor="name">
      <p className="textarea-message">Message</p>
      <textarea className="textarea" id="name" />
    </label>
  </div>
);

export default TextArea;
