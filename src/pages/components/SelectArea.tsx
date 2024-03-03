import { useRef } from "react"
import styled from "styled-components"


type SelectAreaProps = {
    weather: any;
}

export default function SelectArea ({weather}:SelectAreaProps) {
    const now = new Date()
    const GMT = now.getTime()
    const londonhour = Math.floor(GMT / 1000 / 60 / 60 % 24)
    const japanhour = Math.floor( (GMT + (1000 * 60 * 60 * 9))/ 1000 / 60 / 60 % 24)
    const loshour = Math.floor( (GMT - (1000 * 60 * 60 * 8))/ 1000 / 60 / 60 % 24)
    const newyorkhour = Math.floor( (GMT - (1000 * 60 * 60 * 5))/ 1000 / 60 / 60 % 24)

    const audio0 = useRef<HTMLAudioElement>(null);
    const audio1 = useRef<HTMLAudioElement>(null);
    const audio2 = useRef<HTMLAudioElement>(null);
    const audio3 = useRef<HTMLAudioElement>(null);
    const audio4 = useRef<HTMLAudioElement>(null);
    const audio5 = useRef<HTMLAudioElement>(null);
    const audio6 = useRef<HTMLAudioElement>(null);
    const audio7 = useRef<HTMLAudioElement>(null);
    const audio8 = useRef<HTMLAudioElement>(null);

    const playAudio = (e: any) => {
        e.preventDefault()
        let selectedArea = ''; // 選択された地域
        let elements = document.getElementsByName('area');
        elements.forEach((element: any) => {
            if (element.checked) {
                selectedArea = element.value;            }
        });

        // 選択された地域と時間、天気に基づいてaudioを再生
        if (selectedArea === 'JAPAN' && japanhour >= 4 && japanhour < 10 && weather?.[0] === 'Clear') {
            audio0.current?.play();
        } else if(selectedArea === 'JAPAN' && japanhour >= 4 && japanhour < 10 && weather?.[0] === 'Clouds') {
            audio1.current?.play()
        } else if(selectedArea === 'JAPAN' && japanhour >= 4 && japanhour < 10 && weather?.[0] === 'Rain') {
            audio2.current?.play()
        } else if(selectedArea === 'JAPAN' && japanhour >= 10 && japanhour < 17 && weather?.[0] === 'Clear') {
            audio3.current?.play()
        } else if(selectedArea === 'JAPAN' && japanhour >= 10 && japanhour < 17 && weather?.[0] === 'Clouds') {
            audio4.current?.play()
        } else if(selectedArea === 'JAPAN' && japanhour >= 10 && japanhour < 17 && weather?.[0] === 'Rain') {
            audio5.current?.play()
        } else if(selectedArea === 'JAPAN' && (japanhour >= 17 || japanhour < 4) && weather?.[0] === 'Clear') {
            audio6.current?.play()
        } else if(selectedArea === 'JAPAN' && (japanhour >= 17 || japanhour < 4) && weather?.[0] === 'Clouds') {
            audio7.current?.play()
        } else if(selectedArea === 'JAPAN' && (japanhour >= 17 || japanhour < 4) && weather?.[0] === 'Rain') {
            audio8.current?.play()
        } else if (selectedArea === 'LONDON' && londonhour >= 4 && londonhour < 10 && weather?.[1] === 'Clear') {
            audio0.current?.play();
        } else if(selectedArea === 'LONDON' && londonhour >= 4 && londonhour < 10 && weather?.[1] === 'Clouds') {
            audio1.current?.play()
        } else if(selectedArea === 'LONDON' && londonhour >= 4 && londonhour < 10 && weather?.[1] === 'Rain') {
            audio2.current?.play()
        } else if(selectedArea === 'LONDON' && londonhour >= 10 && londonhour < 17 && weather?.[1] === 'Clear') {
            audio3.current?.play()
        } else if(selectedArea === 'LONDON' && londonhour >= 10 && londonhour < 17 && weather?.[1] === 'Clouds') {
            audio4.current?.play()
        } else if(selectedArea === 'LONDON' && londonhour >= 10 && londonhour < 17 && weather?.[1] === 'Rain') {
            audio5.current?.play()
        } else if(selectedArea === 'LONDON' && (londonhour >= 17 || londonhour < 4) && weather?.[1] === 'Clear') {
            audio6.current?.play()
        } else if(selectedArea === 'LONDON' && (londonhour >= 17 || londonhour < 4) && weather?.[1] === 'Clouds') {
            audio7.current?.play()
        } else if(selectedArea === 'LONDON' && (londonhour >= 17 || londonhour < 4) && weather?.[1] === 'Rain') {
            audio8.current?.play()
        } else if (selectedArea === 'LOS ANGELS' && loshour >= 4 && loshour < 10 && weather?.[2] === 'Clear') {
            audio0.current?.play();
        } else if(selectedArea === 'LOS ANGELS' && loshour >= 4 && loshour < 10 && weather?.[2] === 'Clouds') {
            audio1.current?.play()
        } else if(selectedArea === 'LOS ANGELS' && loshour >= 4 && loshour < 10 && weather?.[2] === 'Rain') {
            audio2.current?.play()
        } else if(selectedArea === 'LOS ANGELS' && loshour >= 10 && loshour < 17 && weather?.[2] === 'Clear') {
            audio3.current?.play()
        } else if(selectedArea === 'LOS ANGELS' && loshour >= 10 && loshour < 17 && weather?.[2] === 'Clouds') {
            audio4.current?.play()
        } else if(selectedArea === 'LOS ANGELS' && loshour >= 10 && loshour < 17 && weather?.[2] === 'Rain') {
            audio5.current?.play()
        } else if(selectedArea === 'LOS ANGELS' && (loshour >= 17 || loshour < 4) && weather?.[2] === 'Clear') {
            audio6.current?.play()
        } else if(selectedArea === 'LOS ANGELS' && (loshour >= 17 || loshour < 4) && weather?.[2] === 'Clouds') {
            audio7.current?.play()
        } else if(selectedArea === 'LOS ANGELS' && (loshour >= 17 || loshour < 4) && weather?.[2] === 'Rain') {
            audio8.current?.play()
        } else if (selectedArea === 'NEW YORK' && newyorkhour >= 4 && newyorkhour < 10 && weather?.[3] === 'Clear') {
            audio0.current?.play();
        } else if(selectedArea === 'NEW YORK' && newyorkhour >= 4 && newyorkhour < 10 && weather?.[3] === 'Clouds') {
            audio1.current?.play()
        } else if(selectedArea === 'NEW YORK' && newyorkhour >= 4 && newyorkhour < 10 && weather?.[3] === 'Rain') {
            audio2.current?.play()
        } else if(selectedArea === 'NEW YORK' && newyorkhour >= 10 && newyorkhour < 17 && weather?.[3] === 'Clear') {
            audio3.current?.play()
        } else if(selectedArea === 'NEW YORK' && newyorkhour >= 10 && newyorkhour < 17 && weather?.[3] === 'Clouds') {
            audio4.current?.play()
        } else if(selectedArea === 'NEW YORK' && newyorkhour >= 10 && newyorkhour < 17 && weather?.[3] === 'Rain') {
            audio5.current?.play()
        } else if(selectedArea === 'NEW YORK' && (newyorkhour >= 17 || newyorkhour < 4) && weather?.[3] === 'Clear') {
            audio6.current?.play()
        } else if(selectedArea === 'NEW YORK' && (newyorkhour >= 17 || newyorkhour < 4) && weather?.[3] === 'Clouds') {
            audio7.current?.play()
        } else if(selectedArea === 'NEW YORK' && (newyorkhour >= 17 || newyorkhour < 4) && weather?.[3] === 'Rain') {
            audio8.current?.play()
        }
        // 他の条件に基づいて適切なaudioを再生するコードを追加
    }
    const StyledStartButton = styled.button`
    background-color: orange;
    font-size: 3em;
    border-radius: 20px;
    margin-left :30%;
    margin-top: 5%;
    `
    return (
        <>
            <audio src="../../music/sunnymorning.mp3" ref={audio0}></audio>
            <audio src="../../music/cloudymorning.mp3" ref={audio1}></audio>
            <audio src="../../music/rainymorning.mp3" ref={audio2}></audio>
            <audio src="../../music/sunnyday.mp3" ref={audio3}></audio>
            <audio src="../../music/cloudyday.mp3" ref={audio4}></audio>
            <audio src="../../music/rainyday.mp3" ref={audio5}></audio>
            <audio src="../../music/sunnynight.mp3" ref={audio6}></audio>
            <audio src="../../music/cloudynight.mp3" ref={audio7}></audio>
            <audio src="../../music/rainynight.mp3" ref={audio8}></audio>
            <div style={{display: 'flex'}}>
                <p style={{flexGrow: 1, position: 'relative', left: 'em'}}>area</p>
                <p style={{flexGrow: 1}}>time</p>
                <p style={{flexGrow: 1}}>weather</p>
            </div>
            <label>
                <input
                type="radio"
                value="JAPAN"
                name="area"/>
                JAPAN
            </label>
            <span style={{marginLeft: '25%'}}>{japanhour} o clock</span>
            <span style={{marginLeft: '28%'}}>{weather[0]} </span>
            <br></br>
            <label>
                <input
                type="radio"
                value="LONDON"
                name="area"/>
                LONDON
            </label>
            <span style={{marginLeft: '22%'}}>{londonhour} o clock</span>
            <span style={{marginLeft: '28%'}}>{weather[1]} </span>
            <br></br>
            <label>
                <input
                type="radio"
                value="LOS ANGELS"
                name="area"/>
                LOS ANGELS
            </label>
            <span style={{marginLeft: '20%'}}>{loshour} o clock</span>
            <span style={{marginLeft: '28%'}}>{weather[2]}</span>
            <br></br>
            <label>
                <input
                type="radio"
                value="NEW YORK"
                name="area"/>
                NEW YORK
            </label>
            <span style={{marginLeft: '21%'}}>{newyorkhour} o clock   </span>
            <span style={{marginLeft: '28%'}}>{weather[3]}</span>
            <h3 style={{color: 'red'}}>attention</h3>
            <p>summer time is not considered</p>
            <StyledStartButton onClick={playAudio}>START</StyledStartButton>
        </>
    )
}
