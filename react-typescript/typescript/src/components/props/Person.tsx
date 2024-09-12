
import { PersonProps } from "./style-props/PersonTypes"

export default function Person(props:PersonProps){
    return(
        <div>
            <h2>{props.name.first}{props.name.last}</h2>
        </div>
    )
}