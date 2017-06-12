import React from "react";
import PropTypes from "prop-types";

import Tile from "../../Tile/Tile";
import TileHeader from "../../Tile/TileHeader";
import TileBody from "../../Tile/TileBody";
import TileFooter from "../../Tile/TileFooter";

import PercentChange from "./PercentChange";


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
          <p>{value}</p>
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
  updatedAt: PropTypes.instanceOf(Date),
  showChange: PropTypes.bool.isRequired
};
DynamicValue.defaultProps = {
  showChange: true
};

export default DynamicValue;
