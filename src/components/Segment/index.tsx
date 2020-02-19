import * as React from 'react';

import { segment, segmentComparison, segmentEndedAt } from './style.css';

interface SegmentProps {
  name: string;
}

const Segment: React.FC<SegmentProps> = () => {
  return (
    <div className={segment}>
      <span>Stasis</span>
      <span className={segmentComparison}>-1.40</span>
      <span className={segmentEndedAt}>4:30.00</span>
    </div>
  );
};

export default Segment;
