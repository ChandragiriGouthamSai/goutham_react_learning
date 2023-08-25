import GrandChildComponent from "./GrandChildComponent";
import SocialComponent from "./SocialComponent";
import TotalComponent from "./TotalComponent";

const ChildComponent = (props) => {

    return <div><h2>maths Component {props.maths1}</h2><input type="button"
                                                              onClick={props.myMethod}/>

    </div>;
}
export default ChildComponent;