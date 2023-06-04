import type { V2_MetaFunction } from "@remix-run/node";
import ChevronLeft from "~/components/icons/ChevronLeft";
import SoundWave from "~/components/icons/Soundwave";

export const meta: V2_MetaFunction = () => {
  return [{ title: "Respikar" }];
};

export default function Index() {
  return (
    <div className="position:relative min-h:100vh bg:black bg:url('/img/background/BackgroundHome.jpg') background-size:cover background-repeat:no-repeat background-position:left|95%|bottom|45%">
      <div className="flex flex:row align-items:center position:absolute bottom:0 left:0 right:0 px:2em py:4em gap:1em background:linear-gradient(rgba(0,0,1,0.0),rgba(0,0,1,0.9))">
        <div className="flex flex:1">
          <div className="flex justify-content:center align-items:center fg:white bd:blur(8px) bg:rgba(0,0,0,0.6) w:5em h:5em r:50%">
            <ChevronLeft size={36} />
          </div>
        </div>

        <div className="flex flex:3">
          <div className="flex justify-content:center align-items:center bg:white fg:black w:5em h:5em r:50%">
            <SoundWave size={36} />
          </div>
        </div>
      </div>
    </div>
  );
}
