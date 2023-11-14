import { ReactPhotoSphereViewer } from "react-photo-sphere-viewer";
import img from "./assets/pano.jpg";
import { plugins } from "./config";

export default function App() {
  return (
    <div>
      <ReactPhotoSphereViewer
        container={""}
        src={img}
        height={"100vh"}
        width={"100%"}
        plugins={plugins}
      />
    </div>
  );
}
