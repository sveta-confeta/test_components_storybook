import React, {useState} from "react";

export type RaitingValueType=0|1|2|3|4|5;

type RaitingPropsType={
    defaultValue?:RaitingValueType
}

export function UncontrolledRaiting(props:RaitingPropsType) {
    let [value, setValue] = useState<RaitingValueType>(props.defaultValue ? props.defaultValue : 0); //внесем изменения в связи с появлением defaultValue. старое значени было просто 0


    return (


        // {props.value > 0}-это операция сравнения в которой возращается true or false
        <div>
            <Star selected={value > 0} setValue={setValue} value={1}/>
            <Star selected={value > 1} setValue={setValue} value={2}/>
            <Star selected={value > 2} setValue={setValue} value={3}/>
            <Star selected={value > 3} setValue={setValue} value={4}/>
            <Star selected={value > 4} setValue={setValue} value={5}/>
        </div>
    )


}

type StarPropsType = {
    selected: boolean
    setValue: (value: 1 | 2 | 3 | 4 | 5) => void
    value: 1 | 2 | 3 | 4 | 5
}

function Star(props: StarPropsType) {
    return <span onClick={() => {
        props.setValue(props.value) //при клике на кнопку вызывается value кнопки за которой следит дядя и перерисовывает)
    }}>
        {props.selected ? <b>star </b> : "star "} </span>


}