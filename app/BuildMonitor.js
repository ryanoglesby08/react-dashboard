import connectToPolling from "../lib/connectToPolling";
import DynamicColor from "../lib/components/DynamicColor";

const mapResponseToColor = ({status}) => {
  switch(status) {
    case "success":   return "green";
    case "building":  return "yellow";
    case "failed":    return "red";
    case "canceled":  return "gray";
  }
};

export default connectToPolling("http://localhost:3000/build", 10*1000, mapResponseToColor)(DynamicColor);
