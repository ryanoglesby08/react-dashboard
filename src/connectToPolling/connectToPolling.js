import React from "react";

export default (url, pollingIntervalMillis, mapResponseToValue) => {
  return (component) => {
    return class extends React.Component {
      static displayName = `${component.name}Poller`;

      constructor(props) {
        super(props);

        this.state = {
          value: undefined,
          updatedAt: undefined
        };
      }

      componentDidMount() {
        this.intervalId = setInterval(this.setValue, pollingIntervalMillis);
        this.setValue();
      }

      componentWillUnmount() {
        if (this.intervalId) {
          clearInterval(this.intervalId);
        }
      }

      setValue = () => {
        fetch(url)
          .then((response) => response.json())
          .then(mapResponseToValue)
          .then((value) => {
            this.setState({
              value,
              updatedAt: new Date()
            });
          });
      }

      render() {
        const {value, updatedAt} = this.state;

        return React.createElement(component, {...this.props, value, updatedAt});
      }
    };
  };
}
