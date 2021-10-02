import { createRenderer } from "@vue/runtime-core";

const renderer = createRenderer({});

export function createApp(rootComponent) {
  return renderer.createApp(rootComponent)
}