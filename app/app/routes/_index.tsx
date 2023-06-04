import type { V2_MetaFunction } from "@remix-run/node";

export const meta: V2_MetaFunction = () => {
  return [{ title: "Respikar" }];
};

export default function Index() {
  return (
    <div className="min-h:100vh bg:black bg:url('/img/background/BackgroundHome.jpg') background-size:cover background-repeat:no-repeat background-position:left|100%|bottom|45%">

    </div>
  );
}
