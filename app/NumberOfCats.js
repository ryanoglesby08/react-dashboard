import connectToPolling from "../lib/connectToPolling";
import DynamicValue from "../lib/components/DynamicValue";

const mapResponseToValue = (data) => data.random;

export default connectToPolling("http://localhost:3000/random", 5*1000, mapResponseToValue)(DynamicValue)
