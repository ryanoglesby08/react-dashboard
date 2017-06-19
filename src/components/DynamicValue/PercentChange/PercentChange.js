import React from "react";
import PropTypes from "prop-types";

import styled from "styled-components";

import Percentage from "./Percentage";

const DOWN_ARROW = String.fromCharCode(8595);
const UP_ARROW = String.fromCharCode(8593);

const isNil = (value) => value === undefined || value === null;
const noChange = (value) => isNil(value) || value === 0;

const PercentChangeText = styled.p`
  font-size: .5em;
`;

class PercentChange extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      percentChange: undefined
    }
  }

  componentWillReceiveProps(nextProps) {
    const {value} = nextProps;
    const oldValue = this.props.value;

    if (isNil(oldValue) || isNil(value)) {
      return;
    }

    const percentChange = (value - oldValue) / oldValue;
    this.setState({percentChange});
  }

  render() {
    const {percentChange} = this.state;

    if (noChange(percentChange)) {
      return null;
    }

    const arrow = percentChange < 0 ? DOWN_ARROW : UP_ARROW;

    return (
      <PercentChangeText>
        {arrow} <Percentage>{Math.abs(percentChange)}</Percentage>
      </PercentChangeText>
    );
  }
}
PercentChange.propTypes = {
  value: PropTypes.number
};

export default PercentChange;
