import BottomNavigator from "~/layout/BottomNavigator";
import Thermometer from "~/components/icons/Thermometer";
import Wind from "~/components/icons/Wind";

export default function () {

    return (
        <div className={"position:relative min-h:100vh max-w:100vw bg:#D9E8EC"}>
            <div>
                <h1>Glad you're join us</h1>
                <p>+</p>
            </div>

            <div className={"position:relative flex flex:col m:1em px:2em py:1.5em r:3em bg:#BBDEAB"}>
                <div className={"flex:col"}>
                    <p className={"font:bold m:0 p:0 line-height:1.2em"}>Calm CBD</p>
                    <p className={"font:bold m:0 p:0 line-height:1.2em"}>Mist Inhaler</p>

                    <div className={"mt:2em"}>
                        <div className={"flex flex:row align-items:end"}>
                            <p className={"font:bold m:0 p:0 fg:white font-size:3.5em line-height:1em"}>152</p>
                            <p className={"font:normal font-size:1.2em ml:0.5em m:0 p:0 fg:white"}>/ 200</p>
                        </div>
                        <div>
                            <p className={"opacity:0.8"}>Doses</p>
                        </div>
                    </div>

                    <div className={"flex flex:col"}>
                        <p className={"font:bold m:0 p:0 fg:white font-size:3.5em line-height:1.3em"}>High</p>
                        <p className={"opacity:0.8"}>Bottle status</p>
                    </div>
                </div>

                <img alt={"Inhaler"} className={"position:absolute right:15 translateY(-50px) w:12em"} src={"/img/inhaler/Inhaler.png"}/>
            </div>

            <div className={"flex flex:row"}>
                <div className={"position:relative flex flex:1 h:15em flex:col ml:1em mr:0.5em px:2em py:1.5em r:3em bg:#91D4E7"}>
                    <div className={"position:absolute left:3 top:3 bg:#ADDBE8 r:50% p:1.5em"}>
                        <Thermometer size={48}/>
                    </div>

                    <div className={"position:absolute bottom:1em right:1.5em"}>
                        <div className={"flex flex:row"}>
                            <p className={"font:bold font-size:3em m:0 p:0 line-height:1em fg:black"}>18°</p>
                            <p className={"font:bold font-size:3em m:0 p:0 line-height:1em fg:black"}>c</p>
                        </div>

                        <p className={"text-align:end font:bold opacity:0.6"}>Temperature</p>
                    </div>
                </div>

                <div className={"position:relative flex flex:1 h:15em flex:col ml:0.5em mr:1em px:2em py:1.5em r:3em bg:#ECF4F6"}>
                    <div className={"position:absolute left:3 top:3 bg:#D9E8EC r:50% p:1.5em"}>
                        <Wind size={48}/>
                    </div>

                    <div className={"position:absolute bottom:1em right:1.5em"}>
                        <div className={"flex flex:row align-items:end"}>
                            <p className={"font:bold font-size:3em m:0 p:0 line-height:1em fg:black"}>37</p>
                            <p className={"font:bold font-size:1.5em m:0 p:0 line-height:1em fg:black"}>km/h</p>
                        </div>

                        <p className={"text-align:end font:bold opacity:0.6"}>Wind force</p>
                    </div>
                </div>
            </div>

            <BottomNavigator/>
        </div>
    );
}
