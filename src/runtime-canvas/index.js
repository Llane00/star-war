import {
  createRenderer
} from "@vue/runtime-core";
import {
  Graphics,
  Text,
  Container,
  Sprite,
  Texture
} from "pixi.js"

const renderer = createRenderer({
  createElement(type) {
    let element;
    switch (type) {
      case "Container":
        element = new Container();
        break;
      case "Sprite":
        element = new Sprite()
        break;
      default:
        break;
    }
    return element;
  },
  createText(text) {
    return new Text(text);
  },
  setElementText(node, text) {
    const cText = new Text(text)
    node.addChild(cText)
  },
  patchProp(el, key, preValue, nextValue) {
    switch (key) {
      case "texture":
        el.texture = Texture.from(nextValue);
        break;
      case "onClick":
        el.on("pointertap", nextValue)  
        break;
      default:
        el[key] = nextValue;
        break;
    }
  },
  insert(el, parent) {
    parent.addChild(el)
  },
  // 处理注解
  createComment() { },
  // 获取父节点
  parentNode() { },
  // 获取兄弟节点
  nextSibling() { },
  // 删除节点时调用
  remove(el) {
    const parent = el.parent;
    if (parent) {
      parent.removeChild(el)
    }
  }
});

export function createApp(rootComponent) {
  return renderer.createApp(rootComponent)
}