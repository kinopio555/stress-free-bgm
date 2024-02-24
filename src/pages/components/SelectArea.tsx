type SelectAreaProps = {
    weather: any
}

const SelectArea:React.FC<SelectAreaProps> = ({weather}) => {
    const now = new Date()
    const GMT = now.getTime()
    return (
        <>
            <label>
                <input
                type="radio"
                value="JAPAN"
                name="area"/>
                JAPAN
            </label>
            {Math.floor( (GMT + (1000 * 60 * 60 * 9))/ 1000 / 60 / 60 % 24)}  
            {weather[0]}  
            <label>
                <input
                type="radio"
                value="LONDON"
                name="area"/>
                LONDON
            </label>
            {Math.floor( GMT/ 1000 / 60 / 60 % 24)} 
            {weather[1]} 
            <label>
                <input
                type="radio"
                value="LOS ANGELS"
                name="area"/>
                LOS ANGELS
            </label>
            {Math.floor( (GMT - (1000 * 60 * 60 * 8))/ 1000 / 60 / 60 % 24)} 
            {weather[2]}
            <label>
                <input
                type="radio"
                value="NEW YORK"
                name="area"/>
                NEW YORK
            </label>
            {Math.floor( (GMT - (1000 * 60 * 60 * 5))/ 1000 / 60 / 60 % 24)}   
            {weather[3]}
        </>
    )
}

export default SelectArea