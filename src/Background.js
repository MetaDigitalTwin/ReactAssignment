import { Canvas } from "@react-three/fiber";
import Experience from "./Experiance";

import { Html } from "@react-three/drei";
import Widget1 from "./widgets/Widget1";
import Widget2 from "./widgets/Widget2";
import Widget3 from "./widgets/Widget3";

export default function Background() {
  return (
    <Canvas>
      {/* Adding Experiance to canvas, no changes required inside Experiance */}

      <Experience></Experience>

      {/* Adding HTML for widgets in Canvas*/}
      <Html wrapperClass="label1">
        <Widget1 />
      </Html>

      <Html wrapperClass="label2">
        <Widget2 />
      </Html>

      <Html wrapperClass="label3">
        <Widget3 />
      </Html>
    </Canvas>
  );
}
