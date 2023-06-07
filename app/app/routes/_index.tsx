import type { V2_MetaFunction } from "@remix-run/node";
import ChevronLeft from "~/components/icons/ChevronLeft";
import SoundWave from "~/components/icons/Soundwave";
import {useNavigate} from "react-router";

export const meta: V2_MetaFunction = () => {
  return [{ title: "Respikar" }];
};

export default function Index() {
  const navigation = useNavigate();

  return (
    <div className="position:relative min-h:100vh max-w:100vw bg:black bg:url('/img/background/BackgroundHome.jpg') background-size:cover background-repeat:no-repeat background-position:left|45%|bottom|45%">
      <img className="w:3em h:3em r:5px position:absolute top:15 left:15" alt="Logo Respikar" src="/png/Logo.png"/>


      <div className="flex flex:col position:absolute bottom:0 left:0 right:0  background:linear-gradient(rgba(0,0,1,0.0),rgba(0,0,1,0.9))">
        <div className="mt:5em">
          <p className="px:0.5em m:0 font-size:4.3em font:semibold fg:white line-height:1em">Calm</p>
          <p className="px:0.5em m:0 font-size:4.2em font:semibold fg:white line-height:1.1em">CBD Nano</p>
          <p className="px:0.5em m:0 font-size:4em font:semibold fg:white line-height:1.2em">Mist Inhaler</p>
        </div>

        <div className="flex flex:row align-items:center px:2em pb:4em pt:2em gap:1em">
          <div className="flex flex:1">
            <div className="flex justify-content:center align-items:center fg:white bd:blur(8px) bg:rgba(0,0,0,0.6) w:5em h:5em r:50%">
              <ChevronLeft size={36} />
            </div>
          </div>

          <div className="flex flex:3 bg:rgba(0,0,1,0.5) bd:blur(8px) r:43px p:0.2em">
            <div className="flex justify-content:center align-items:center bg:white fg:black w:5em h:5em r:50%">
              <SoundWave onClick={() => navigation("/signin")} size={36} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
