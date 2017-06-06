import React from "react";
import PropTypes from "prop-types";

import styled from "styled-components";

import Tile from "../Tile/Tile";
import TileHeader from "../Tile/TileHeader";
import TileBody from "../Tile/TileBody";
import TileFooter from "../Tile/TileFooter";
import Percentage from "../Percentage";

import {noSpacing} from "../styles/spacing";

const P = styled.p`
  ${noSpacing}
`;
const PercentChangeContainer = P.extend`
  font-size: .5em;
`;

const PercentChange = ({children}) => {
  const arrow = children < 0 ? String.fromCharCode(8595) : String.fromCharCode(8593);

  return (
    <PercentChangeContainer>
      {arrow} <Percentage>{Math.abs(children)}</Percentage>
    </PercentChangeContainer>
  );
};

class DynamicValue extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      percentChange: 0
    }
  }
  componentWillReceiveProps(nextProps) {
    const {value} = nextProps;
    const lastValue = this.props.value;

    if (!lastValue) {
      return;
    }

    const percentChange = (value - lastValue) / lastValue;

    this.setState({percentChange});
  }

  render() {
    const {title, value, updatedAt, showChange} = this.props;

    return (
      <Tile>
        <TileHeader>{title}</TileHeader>
        <TileBody>
          <P>{value}</P>
          {showChange && <PercentChange>{this.state.percentChange}</PercentChange>}
        </TileBody>
        <TileFooter>
          {updatedAt && `Last updated: ${updatedAt.toLocaleString()}`}
        </TileFooter>
      </Tile>
    );
  }
}
DynamicValue.connectedProp = "value";
DynamicValue.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  updatedAt: PropTypes.object
};
DynamicValue.defaultProps = {
  showChange: true
};

export default DynamicValue;
