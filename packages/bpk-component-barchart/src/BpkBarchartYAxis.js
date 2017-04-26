import React, { PropTypes } from 'react';
import ContextTypes from './BpkBarchartContextTypes';
import { isRTL } from './RTLtransforms';

import BpkBarchartAxis, { AXIS_TYPE_Y } from './BpkBarchartAxis';

const BpkBarchartYAxis = (
  { ticks, children, ...rest },
  { data, yScaler, xScaler, xScaleDataKey },
) => {
  let x = 0;
  if (isRTL()) {
    const dataPoint = data[data.length - 1][xScaleDataKey];
    const padding = xScaler.bandwidth() * xScaler.padding();
    x = xScaler(dataPoint) + xScaler.bandwidth() + (padding * 2);
  }
  return (
    <BpkBarchartAxis
      transform={`translate(${x}, 0)`}
      textAnchor="end"
      type={AXIS_TYPE_Y}
      ticks={yScaler.ticks(ticks)}
      tickPosition={tick => [0, yScaler(tick)]}
      textCoords={{
        y: 0,
        x: -5,
        dy: '0.32em',
      }}
      {...rest}
    >
      {children}
    </BpkBarchartAxis>
  );
};

BpkBarchartYAxis.propTypes = {
  ticks: PropTypes.number,
  children: PropTypes.node,
  tickValue: PropTypes.func,
};

BpkBarchartYAxis.defaultProps = {
  ticks: null,
  children: null,
  tickValue: tick => tick,
};

BpkBarchartYAxis.contextTypes = ContextTypes;

export default BpkBarchartYAxis;
