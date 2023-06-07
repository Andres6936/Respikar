import SoundWave from "~/components/icons/Soundwave";
import {useNavigate} from "react-router";
import Bell from "~/components/icons/Bell";
import Calendar from "~/components/icons/Calendar";
import Gear from "~/components/icons/Gear";
import Person from "~/components/icons/Person";

export default function BottomNavigator() {
    const navigator = useNavigate();
    
    return (
        <footer className="position:fixed flex flex:3 flex:row aling-items:center bg:rgba(0,0,1,0.2) bd:blur(8px) r:43px p:0.2em bottom:1em left:1em right:1em">
            <div className="flex justify-content:center align-items:center bg:white fg:black w:5em h:5em r:50%">
                <SoundWave onClick={() => navigator("/dashboard")} size={36} />
            </div>

            <div className={"flex flex:row flex:1 justify-content:space-around"}>
                <Bell size={24} className={"font:bold fg:white"} onClick={() => navigator("/alarm")}/>
                <Calendar size={24} className={"font:bold fg:white"} onClick={() => navigator("/howto")}/>
                <Gear size={24} className={"font:bold fg:white"}/>
                <Person size={24} className={"font:bold fg:white"} onClick={() => navigator("/profile")}/>
            </div>
        </footer>
    )
}