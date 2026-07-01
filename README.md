# three.js

[![NPM 版本][npm]][npm-url]
[![构建体积][build-size]][build-size-url]
[![NPM 下载量][npm-downloads]][npmtrends-url]
[![jsDelivr 下载量][jsdelivr-downloads]][jsdelivr-url]
[![Discord][discord]][discord-url]

#### JavaScript 3D 库

本项目旨在创建一个易用、轻量、跨浏览器的通用 3D 库。当前构建版本仅包含 WebGL 和 WebGPU 渲染器，SVG 和 CSS3D 渲染器也可作为附加组件使用。

[示例](https://threejs.org/examples/) &mdash;
[文档](https://threejs.org/docs/) &mdash;
[手册](https://threejs.org/manual/) &mdash;
[Wiki](https://github.com/mrdoob/three.js/wiki) &mdash;
[迁移指南](https://github.com/mrdoob/three.js/wiki/Migration-Guide) &mdash;
[常见问题](https://stackoverflow.com/questions/tagged/three.js) &mdash;
[论坛](https://discourse.threejs.org/) &mdash;
[Discord](https://discord.gg/56GBJwAnUS)

### 使用方法

以下代码会创建一个场景、一个相机以及一个几何立方体，并将该立方体添加到场景中。然后为场景和相机创建一个 `WebGL` 渲染器，并将其视口添加到 `document.body` 元素中。最后，在场景中为相机播放立方体的动画。

```javascript
import * as THREE from 'three';

const width = window.innerWidth, height = window.innerHeight;

// 初始化

const camera = new THREE.PerspectiveCamera( 70, width / height, 0.01, 10 );
camera.position.z = 1;

const scene = new THREE.Scene();

const geometry = new THREE.BoxGeometry( 0.2, 0.2, 0.2 );
const material = new THREE.MeshNormalMaterial();

const mesh = new THREE.Mesh( geometry, material );
scene.add( mesh );

const renderer = new THREE.WebGLRenderer( { antialias: true } );
renderer.setSize( width, height );
renderer.setAnimationLoop( animate );
document.body.appendChild( renderer.domElement );

// 动画

function animate( time ) {

	mesh.rotation.x = time / 2000;
	mesh.rotation.y = time / 1000;

	renderer.render( scene, camera );

}
```

如果一切顺利，你将看到[此效果](https://jsfiddle.net/w43x5Lgh/)。

### 克隆此仓库

克隆包含完整历史记录的仓库大约需要下载 ~2 GB 的数据。如果你不需要完整历史记录，可以使用 `depth` 参数来显著减少下载体积。

```sh
git clone --depth=1 https://github.com/mrdoob/three.js.git
```

### 更新日志

[发布版本](https://github.com/mrdoob/three.js/releases)


[npm]: https://img.shields.io/npm/v/three
[npm-url]: https://www.npmjs.com/package/three
[build-size]: https://badgen.net/bundlephobia/minzip/three
[build-size-url]: https://bundlephobia.com/result?p=three
[npm-downloads]: https://img.shields.io/npm/dw/three
[npmtrends-url]: https://www.npmtrends.com/three
[jsdelivr-downloads]: https://data.jsdelivr.com/v1/package/npm/three/badge?style=rounded
[jsdelivr-url]: https://www.jsdelivr.com/package/npm/three
[discord]: https://img.shields.io/discord/685241246557667386
[discord-url]: https://discord.gg/56GBJwAnUS
