import { connectToPolling, DynamicValue } from "../lib/dist/react-dashboard.es";

const mapResponseToValue = (data) => data.random;

export default connectToPolling("http://localhost:3000/random", 5*1000, mapResponseToValue)(DynamicValue)
