// See the Electron documentation for details on how to use preload scripts:
// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts
import { contextBridge, ipcRenderer } from "electron";

contextBridge.exposeInMainWorld("electronAPI", {
  load_gltf: async (path: string) => {
    const model = await ipcRenderer.invoke("load_gltf", path);
    return model;
  },
});
