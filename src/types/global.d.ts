// src/global.d.ts
declare interface Window {
  electronAPI: {
    load_gltf: (path: string) => Promise<any>; // Replace 'any' with the actual model data type
  };
}
