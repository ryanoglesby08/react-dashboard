import { connectToPolling, DynamicValue } from "react-dashboard";

const mapResponseToValue = (data) => data.random;

export default connectToPolling("http://localhost:3000/random", 5*1000, mapResponseToValue)(DynamicValue)
