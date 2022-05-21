import { FC, useState } from 'react';
import './tooltip.scss';

type TooltipProps = {
    title: string,
    text: string,
}

const Tooltip: FC<TooltipProps> = ({ title, text }) => {
  const [hovered, setHovered] = useState(false);
  const showTooltip = hovered;

  return (
    <div>
      <div className="tooltip-wrapper">
        <button
          className="tooltip-target"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          {title}
        </button>
        {showTooltip && (
        <div className="tooltip-container">
          <span className="tooltip-box">{text}</span>
        </div>
        )}
      </div>
    </div>
  );
};

export default Tooltip;
