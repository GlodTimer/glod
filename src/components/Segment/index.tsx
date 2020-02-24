import * as React from 'react';
import cn from 'classnames';

import {
  segment,
  segmentComparison,
  segmentComparisonGreen,
  segmentComparisonGold,
  segmentComparisonRed,
  segmentEndedAt
} from './style.css';

interface SegmentProps {
  name: string;
  endedAt: string;
}

const Segment: React.FC<SegmentProps> = ({ name, endedAt }) => {
  const comparisonClassnames = cn(segmentComparison, segmentComparisonRed);
  return (
    <div className={segment}>
      <span>{name}</span>
      <span className={comparisonClassnames}>-1.2</span>
      <span className={segmentEndedAt}>{endedAt}</span>
    </div>
  );
};

export default Segment;
