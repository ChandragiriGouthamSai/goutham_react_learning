import {useState} from "react";
import ChildComponent from "./ChildComponent";
import GrandChildComponent from "./GrandChildComponent";
import SocialComponent from "./SocialComponent";
import TotalComponent from "./TotalComponent";

const ParentComponent = () => {
    const [maths, setMaths] = useState(20);
    const [science, setScience] = useState(20);
    const [social, setSocial] = useState(20);
    // const [total, setTotal] = useState(maths);
    const total=maths+science+social


    const incrementMaths = () => {
        console.log("Increment Maths Called");
        setMaths(maths + 1);
    }
    const incrementScience = () => {
        setScience(science + 1)
    }
    const incrementSocial = () => {
        setSocial(social + 1)
    }
    // const incrementTotal = () => {
    //     setTotal(maths + science + social)
    // }


    return <div><ChildComponent maths1={maths} myMethod={() => {
        incrementMaths()
    }}/>
        <GrandChildComponent science1={science} myMethod2={() => {
            incrementScience()
        }}/>
        <SocialComponent social1={social} myMethod3={() => {
            incrementSocial()
        }}/>
        <TotalComponent total1={total}/>
    </div>
        ;
}
export default ParentComponent;