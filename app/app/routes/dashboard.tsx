import BottomNavigator from "~/layout/BottomNavigator";

export default function () {

    return (
        <div className={"position:relative min-h:100vh max-w:100vw bg:#ECF4F6"}>
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

            <BottomNavigator/>
        </div>
    );
}
