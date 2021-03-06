
# svg.js源码分析

## 基础用法

``` js
import { SVG } from '@svgdotjs/svg.js'
var svg = SVG().addTo('body').size(300, 300)
var rect = svg.rect(100, 100).attr({ fill: '#f06' })
```

入口源码：
``` js
import * as svgMembers from './main.js'
import { makeInstance } from './utils/adopter.js'

// The main wrapping element
export default function SVG (element, isHTML) {
  return makeInstance(element, isHTML)
}

Object.assign(SVG, svgMembers)
```

## 插件扩展

原型链prototype继承扩展

``` js
// https://github.com/svgdotjs/svg.js/blob/55a2e8ebe262d4dcd6b7489df573f980d24554d0/src/utils/adopter.js
export function extend (modules, methods, attrCheck) {
  var key, i

  modules = Array.isArray(modules) ? modules : [ modules ]

  for (i = modules.length - 1; i >= 0; i--) {
    for (key in methods) {
      let method = methods[key]
      if (attrCheck) {
        method = wrapWithAttrCheck(methods[key])
      }
      modules[i].prototype[key] = method
    }
  }
}
```

## 发布订阅机制

``` js
import EventTarget from './types/EventTarget.js'
```

``` js
// https://github.com/svgdotjs/svg.js/blob/55a2e8ebe262d4dcd6b7489df573f980d24554d0/src/types/EventTarget.js
import { dispatch, off, on } from '../modules/core/event.js'
import { register } from '../utils/adopter.js'
import Base from './Base.js'

export default class EventTarget extends Base {
  addEventListener () {}

  dispatch (event, data, options) {
    return dispatch(this, event, data, options)
  }

  dispatchEvent (event) {
    const bag = this.getEventHolder().events
    if (!bag) return true

    const events = bag[event.type]

    for (const i in events) {
      for (const j in events[i]) {
        events[i][j](event)
      }
    }

    return !event.defaultPrevented
  }

  // Fire given event
  fire (event, data, options) {
    this.dispatch(event, data, options)
    return this
  }

  getEventHolder () {
    return this
  }

  getEventTarget () {
    return this
  }

  // Unbind event from listener
  off (event, listener) {
    off(this, event, listener)
    return this
  }

  // Bind given event to listener
  on (event, listener, binding, options) {
    on(this, event, listener, binding, options)
    return this
  }

  removeEventListener () {}
}

register(EventTarget, 'EventTarget')
```

## 继承关系

SVG.Base（最底层）> SVG.EventTarget > SVG.Dom > SVG.Element > SVG.Shape > SVG.Ellipse

## svg基本概念

```
矩形 <rect>
圆形 <circle>
椭圆 <ellipse>
线 <line>
折线 <polyline>
多边形 <polygon>
路径 <path>

rect:
<svg xmlns="http://www.w3.org/2000/svg" version="1.1">
  <rect x="50" y="20" width="150" height="150"
  style="fill:blue;stroke:pink;stroke-width:5;fill-opacity:0.1;
  stroke-opacity:0.9"/>
</svg>

line:
<svg xmlns="http://www.w3.org/2000/svg" version="1.1">
  <line x1="0" y1="0" x2="200" y2="200"
  style="stroke:rgb(255,0,0);stroke-width:2"/>
</svg>

路径：
<svg xmlns="http://www.w3.org/2000/svg" version="1.1">
    <path d="M150 0 L75 200 L225 200 Z" />
</svg>

文字：
<svg 
  <text x="0" y="15" fill="red" transform="rotate(30 20,40)">I love SVG</text>
</svg>
```