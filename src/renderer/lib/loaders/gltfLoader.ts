import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const gltfLoader = (fileInfo: any, scene: any) => {
  const fileName = fileInfo.name;
  const filePath = fileInfo.path;
  const loader = new GLTFLoader();
  loader.setResourcePath(filePath.split(fileName)[0]);
  loader.load(
    filePath,
    (gltf) => {
      scene.add(gltf.scene);
    },
    undefined,
    (error) => {
      console.log(error);
    }
  );
};

export default gltfLoader;
