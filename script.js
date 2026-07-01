/* =================================================================
   three.js 中文展示页 — 数据驱动 + Three.js + 交互
   ================================================================= */

import * as THREE from "three";

/* ---------- DATA: 特性 ---------- */
const FEATURES = [
  {
    no: "01",
    title: "易用",
    en: "Easy to Use",
    desc: "数行代码即可搭建一个完整的 3D 场景，API 设计贴近 Web 开发者直觉。",
    icon: "sparkles",
  },
  {
    no: "02",
    title: "轻量",
    en: "Lightweight",
    desc: "核心包 gzip 后约 160 KB，按需引入扩展，避免冗余下载。",
    icon: "feather",
  },
  {
    no: "03",
    title: "跨浏览器",
    en: "Cross-Browser",
    desc: "覆盖现代桌面与移动浏览器，社区维护一致的回退与降级策略。",
    icon: "globe",
  },
  {
    no: "04",
    title: "多渲染器",
    en: "Multi-Renderer",
    desc: "内置 WebGL 与 WebGPU 渲染器，SVG 与 CSS3D 渲染器可作为附加组件。",
    icon: "layers",
  },
];

/* ---------- DATA: 资源磁贴 ---------- */
const SECTIONS = [
  {
    no: "01",
    title: "示例",
    en: "Examples",
    sub: "250+ 官方可运行示例",
    url: "https://threejs.org/examples/",
    icon: "play",
  },
  {
    no: "02",
    title: "文档",
    en: "Documentation",
    sub: "完整 API 参考",
    url: "https://threejs.org/docs/",
    icon: "book",
  },
  {
    no: "03",
    title: "手册",
    en: "Manual",
    sub: "系统化学习路径",
    url: "https://threejs.org/manual/",
    icon: "scroll",
  },
  {
    no: "04",
    title: "Wiki",
    en: "Wiki",
    sub: "社区维护的知识库",
    url: "https://github.com/mrdoob/three.js/wiki",
    icon: "library",
  },
  {
    no: "05",
    title: "迁移指南",
    en: "Migration Guide",
    sub: "版本升级指引",
    url: "https://github.com/mrdoob/three.js/wiki/Migration-Guide",
    icon: "route",
  },
  {
    no: "06",
    title: "常见问题",
    en: "FAQ",
    sub: "Stack Overflow 标签",
    url: "https://stackoverflow.com/questions/tagged/three.js",
    icon: "help",
  },
  {
    no: "07",
    title: "论坛",
    en: "Forum",
    sub: "Discourse 讨论区",
    url: "https://discourse.threejs.org/",
    icon: "message",
  },
  {
    no: "08",
    title: "Discord",
    en: "Chat",
    sub: "实时开发者社区",
    url: "https://discord.gg/56GBJwAnUS",
    icon: "chat",
  },
];

/* ---------- DATA: 代码片段 ---------- */
const CODE_SAMPLE = `import * as THREE from 'three';

const width = window.innerWidth, height = window.innerHeight;

// 初始化
const camera = new THREE.PerspectiveCamera(70, width / height, 0.01, 10);
camera.position.z = 1;

const scene = new THREE.Scene();
const geometry = new THREE.BoxGeometry(0.2, 0.2, 0.2);
const material = new THREE.MeshNormalMaterial();
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(width, height);
renderer.setAnimationLoop(animate);
document.body.appendChild(renderer.domElement);

// 动画
function animate(time) {
  mesh.rotation.x = time / 2000;
  mesh.rotation.y = time / 1000;
  renderer.render(scene, camera);
}`;

const CLONE_CMD = "git clone --depth=1 https://github.com/mrdoob/three.js.git";

/* ---------- DATA: 视觉作品 ---------- */
const SHOWCASE = [
  {
    id: "nebula",
    no: "01",
    title: "点阵星云",
    en: "Cosmic Dust",
    sub: "5000 颗粒子沿螺旋臂分布，鼠标悬停时聚集。",
    tag: "Points",
  },
  {
    id: "crystal",
    no: "02",
    title: "脉冲晶体",
    en: "Pulsing Crystal",
    sub: "二十面体细分 + 顶点位移着色器，自发光呼吸节律。",
    tag: "Shader",
  },
  {
    id: "wave",
    no: "03",
    title: "液态水波",
    en: "Liquid Surface",
    sub: "高密度平面几何在双正弦波下持续起伏。",
    tag: "Geometry",
  },
  {
    id: "mobius",
    no: "04",
    title: "莫比乌斯带",
    en: "Möbius Strip",
    sub: "参数化 BufferGeometry + 双面彩虹渐变。",
    tag: "Parametric",
  },
];

/* ---------- Inline SVG icons (1.5px stroke) ---------- */
const ICONS = {
  sparkles:
    '<path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M5.6 18.4l2.1-2.1M16.3 7.7l2.1-2.1"/>',
  feather: '<path d="M20 4 9 15l-3 1 1-3L20 4zM14 9l3 3"/>',
  globe:
    '<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18"/>',
  layers: '<path d="M12 2 2 7l10 5 10-5-10-5zM2 12l10 5 10-5M2 17l10 5 10-5"/>',
  play: '<polygon points="6 4 20 12 6 20 6 4"/>',
  book: '<path d="M4 4h11a3 3 0 0 1 3 3v13H7a3 3 0 0 1-3-3V4zM18 4v13"/>',
  scroll:
    '<path d="M5 4h12a2 2 0 0 1 2 2v12a4 4 0 0 1-4 4H5V4zM5 4v14M9 8h6M9 12h6"/>',
  library:
    '<rect x="3" y="3" width="4" height="18" rx="0.5"/><rect x="9" y="3" width="4" height="18" rx="0.5"/><path d="M15 4l4 1-3 17-4-1z"/>',
  route:
    '<circle cx="6" cy="19" r="2"/><circle cx="18" cy="5" r="2"/><path d="M8 19h6a4 4 0 0 0 0-8h-4a4 4 0 0 1 0-8h6"/>',
  help: '<circle cx="12" cy="12" r="9"/><path d="M9.5 9a2.5 2.5 0 1 1 4 2c-1 0.7-1.5 1.2-1.5 2.5M12 17h.01"/>',
  message:
    '<path d="M21 12a8 8 0 0 1-12.4 6.7L3 20l1.3-5.6A8 8 0 1 1 21 12z"/>',
  chat: '<path d="M14 4h7v7M21 4l-9 9M21 14v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5"/>',
};

/* ---------- Helpers ---------- */
const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));

const iconSVG = (name, size = 24) =>
  `<svg viewBox="0 0 24 24" width="${size}" height="${size}" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${ICONS[name] || ""}</svg>`;

/* ---------- Lightweight tokenizer for syntax highlight ---------- */
function highlightJS(src) {
  const escape = (s) =>
    s.replace(/[&<>]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;" })[c]);
  const tokens = [];
  const KEYWORDS = new Set([
    "import",
    "from",
    "const",
    "let",
    "var",
    "new",
    "function",
    "return",
    "if",
    "else",
    "for",
    "while",
    "true",
    "false",
    "null",
    "undefined",
    "this",
    "of",
    "in",
    "class",
    "export",
    "default",
    "async",
    "await",
  ]);
  let i = 0;
  while (i < src.length) {
    const c = src[i];
    // comment
    if (c === "/" && src[i + 1] === "/") {
      const end = src.indexOf("\n", i);
      const stop = end === -1 ? src.length : end;
      tokens.push(`<span class="tk-c">${escape(src.slice(i, stop))}</span>`);
      i = stop;
      continue;
    }
    // string
    if (c === '"' || c === "'" || c === "`") {
      const quote = c;
      let j = i + 1;
      while (j < src.length && src[j] !== quote) {
        if (src[j] === "\\") j++;
        j++;
      }
      tokens.push(`<span class="tk-s">${escape(src.slice(i, j + 1))}</span>`);
      i = j + 1;
      continue;
    }
    // number
    if (/\d/.test(c) || (c === "." && /\d/.test(src[i + 1] || ""))) {
      const m = src.slice(i).match(/^\d+(\.\d+)?/);
      if (m) {
        tokens.push(`<span class="tk-n">${m[0]}</span>`);
        i += m[0].length;
        continue;
      }
    }
    // identifier / keyword
    if (/[A-Za-z_$]/.test(c)) {
      const m = src.slice(i).match(/^[A-Za-z_$][A-Za-z0-9_$]*/);
      if (m) {
        const word = m[0];
        const isFn = src[i + word.length] === "(";
        if (KEYWORDS.has(word)) {
          tokens.push(`<span class="tk-k">${word}</span>`);
        } else if (isFn) {
          tokens.push(`<span class="tk-f">${word}</span>`);
        } else {
          tokens.push(escape(word));
        }
        i += word.length;
        continue;
      }
    }
    tokens.push(escape(c));
    i++;
  }
  return tokens.join("");
}

/* ---------- Render features ---------- */
function renderFeatures() {
  const host = $("#features-grid");
  if (!host) return;
  host.innerHTML = FEATURES.map(
    (f) => `
      <article class="feature" data-reveal>
        <div class="feature__no">№ ${f.no}</div>
        <div class="feature__icon">${iconSVG(f.icon, 28)}</div>
        <h3 class="feature__title">${f.title}</h3>
        <p class="feature__title-en">${f.en}</p>
        <p class="feature__desc">${f.desc}</p>
      </article>`,
  ).join("");
}

/* ---------- Render resources ---------- */
function renderResources() {
  const host = $("#resources-grid");
  if (!host) return;
  host.innerHTML = SECTIONS.map(
    (s) => `
      <a class="res" href="${s.url}" target="_blank" rel="noopener" data-reveal>
        <div class="res__no">№ ${s.no}</div>
        <div class="res__icon">${iconSVG(s.icon, 28)}</div>
        <h3 class="res__title">${s.title}</h3>
        <p class="res__sub">
          <span>${s.en} · ${s.sub}</span>
          <span class="res__arrow" aria-hidden="true">↗</span>
        </p>
      </a>`,
  ).join("");
}

/* ---------- Render code ---------- */
function renderCode() {
  const host = $("#code-block");
  if (host) host.innerHTML = highlightJS(CODE_SAMPLE);
  const cmd = $("#clone-cmd");
  if (cmd) cmd.innerHTML = `<span class="prompt">$</span>${CLONE_CMD}`;
}

/* ---------- Copy buttons ---------- */
function setupCopy() {
  const codeBtn = $("#copy-btn");
  if (codeBtn) {
    codeBtn.addEventListener("click", () => {
      copyText(CODE_SAMPLE, codeBtn);
    });
  }
  const cloneBtn = $("#clone-copy");
  if (cloneBtn) {
    cloneBtn.addEventListener("click", () => {
      copyText(CLONE_CMD, cloneBtn);
    });
  }
}

async function copyText(text, btn) {
  const label = btn.querySelector("span");
  const original = label ? label.textContent : "复制";
  try {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(text);
    } else {
      legacyCopy(text);
    }
    if (label) label.textContent = "已复制";
    btn.classList.add("is-copied");
    setTimeout(() => {
      if (label) label.textContent = original;
      btn.classList.remove("is-copied");
    }, 1600);
  } catch (e) {
    legacyCopy(text);
    if (label) label.textContent = "已复制";
    setTimeout(() => (label.textContent = original), 1600);
  }
}

function legacyCopy(text) {
  const ta = document.createElement("textarea");
  ta.value = text;
  ta.setAttribute("readonly", "");
  ta.style.position = "absolute";
  ta.style.left = "-9999px";
  document.body.appendChild(ta);
  ta.select();
  try {
    document.execCommand("copy");
  } catch (e) {}
  document.body.removeChild(ta);
}

/* ---------- Reveal on scroll ---------- */
function setupReveal() {
  const items = $$("[data-reveal]");
  if (!("IntersectionObserver" in window)) {
    items.forEach((el) => el.classList.add("is-visible"));
    return;
  }
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          io.unobserve(entry.target);
        }
      });
    },
    { rootMargin: "0px 0px -8% 0px", threshold: 0.05 },
  );
  items.forEach((el) => io.observe(el));
}

/* ---------- Hero scene: Open Book of "On Liberty" (J. S. Mill) ----------
   Lying open on a table, slight V. A gust of wind ripples the pages —
   multiple leaves lift in cascading phases, each leaf bending through
   the air with a soft curl. Leather cover with gilt lettering, cream
   paper with real Chapter I prose, vermilion ribbon bookmark.
*/
function initHero() {
  const canvas = $("#hero-canvas");
  if (!canvas) return;

  const reduceMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;

  const renderer = new THREE.WebGLRenderer({
    canvas,
    antialias: true,
    alpha: true,
  });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 0.82;
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(30, 1, 0.1, 100);
  camera.position.set(0, 1.9, 2.9);
  camera.lookAt(0, 0, 0);

  // ---------- Lights: editorial warm key + cool fill + rim ----------
  scene.add(new THREE.AmbientLight(0xfff4e0, 0.38));
  const key = new THREE.DirectionalLight(0xffe6b8, 0.5);
  key.position.set(2.4, 4.2, 2.2);
  key.castShadow = true;
  key.shadow.mapSize.set(1024, 1024);
  key.shadow.bias = -0.0005;
  key.shadow.normalBias = 0.02;
  key.shadow.camera.left = -3;
  key.shadow.camera.right = 3;
  key.shadow.camera.top = 3;
  key.shadow.camera.bottom = -3;
  scene.add(key);
  const fill = new THREE.DirectionalLight(0xb8c4ee, 0.26);
  fill.position.set(-2.2, 2.0, 1.0);
  scene.add(fill);
  const rim = new THREE.DirectionalLight(0xffd9a0, 0.16);
  rim.position.set(0, 1.2, -2.6);
  scene.add(rim);

  // ---------- Soft shadow on a virtual ground ----------
  const ground = new THREE.Mesh(
    new THREE.PlaneGeometry(8, 8),
    new THREE.ShadowMaterial({ opacity: 0.42 }),
  );
  ground.rotation.x = -Math.PI / 2;
  ground.position.y = -0.28;
  ground.receiveShadow = true;
  scene.add(ground);

  // a faint warm "table" surface — gives the book something to rest on
  const table = new THREE.Mesh(
    new THREE.PlaneGeometry(8, 8),
    new THREE.MeshStandardMaterial({
      color: 0x2a1f15,
      roughness: 0.95,
      metalness: 0.0,
    }),
  );
  table.rotation.x = -Math.PI / 2;
  table.position.y = -0.281;
  table.receiveShadow = true;
  scene.add(table);

  /* =================================================================
     Page texture factory — "On Liberty" by John Stuart Mill
     Four page kinds: cover, frontispiece, chapter-opener, text.
     Each canvas = cream paper + ink rule + drop cap + real prose.
     ================================================================= */
  // ---- Real text blocks from "On Liberty" (1859) — public domain ----
  const TEXTS = {
    chapter: [
      "THE subject of this Essay is not the so-called",
      "Liberty of the Will, so unfortunately opposed to",
      "the misnamed doctrine of Philosophical Necessity;",
      "but Civil, or Social Liberty: the nature and limits",
      "of the power which can be legitimately exercised",
      "by society over the individual.",
      "",
      "A struggle, nearly as old as the oldest of the free",
      "communities, has in every age distinguished the",
      "men who have claimed some degree of intellectual",
      "and moral independence, from those who, in the",
      "language of an ancient philosopher, would reduce",
      "all things to a single standard.",
    ],
    text1: [
      "The grand, leading principle, towards which every",
      "argument unfolded in these pages directly converges,",
      "is the absolute and essential importance of human",
      "development in its richest diversity.",
      "",
      "He who knows only his own side of the case, knows",
      "little of that; and he who knows only that, and",
      "knows nothing of the opposite side, is in a poor",
      "way to attain even a knowledge of that.",
      "",
      "The spirit of improvement is not always a spirit of",
      "liberty, for it may aim at imposing improvements",
      "by force upon an unwilling people.",
    ],
    text2: [
      "If all mankind minus one, were of one opinion, and",
      "only one person were of the contrary opinion,",
      "mankind would be no more justified in silencing",
      "that one person, than he, if he had the power,",
      "would be justified in silencing mankind.",
      "",
      "The peculiarity of the evidence of religious truths",
      "is, that it is a purely historical question, of which",
      "no one can be a competent judge, except such as",
      "have actually examined the evidence.",
      "",
      "Complete liberty of contradicting and disproving",
      "our opinion, is the very condition which justifies",
      "us in assuming its truth for purposes of action.",
    ],
    text3: [
      "To be a member of a minority, does not involve the",
      "suppression of one's individuality; on the contrary,",
      "it is essential to the formation of that individuality",
      "that a man should have the protection of opinions",
      "and usages, which do not personally concern him.",
      "",
      "There is a class of persons whose peculiar function",
      "it is to observe and to note down what passes in",
      "the world; to be the watchful sentinels of public",
      "interest, the censors of public vice, and the",
      "advocates of public virtue.",
    ],
  };

  const PAGE_W = 512;
  const PAGE_H = 720;

  // Paper grain — shared so all pages feel like the same paper stock
  function paintPaperBase(g) {
    // soft warm gradient (top to bottom)
    const grad = g.createLinearGradient(0, 0, 0, PAGE_H);
    grad.addColorStop(0, "#f4ecd4");
    grad.addColorStop(0.5, "#efe4c6");
    grad.addColorStop(1, "#e6d8b2");
    g.fillStyle = grad;
    g.fillRect(0, 0, PAGE_W, PAGE_H);

    // fiber / pulp grain
    g.globalAlpha = 0.06;
    for (let i = 0; i < 1800; i++) {
      g.fillStyle =
        Math.random() < 0.5
          ? "rgba(120, 90, 50, 0.5)"
          : "rgba(50, 35, 20, 0.4)";
      g.fillRect(Math.random() * PAGE_W, Math.random() * PAGE_H, 1, 1);
    }
    // longer paper fibers
    g.globalAlpha = 0.04;
    g.strokeStyle = "rgba(80, 60, 30, 0.5)";
    g.lineWidth = 0.6;
    for (let i = 0; i < 80; i++) {
      g.beginPath();
      const x = Math.random() * PAGE_W;
      const y = Math.random() * PAGE_H;
      const a = Math.random() * Math.PI * 2;
      g.moveTo(x, y);
      g.lineTo(x + Math.cos(a) * 6, y + Math.sin(a) * 6);
      g.stroke();
    }
    g.globalAlpha = 1;

    // foxing spots — tiny age stains
    g.globalAlpha = 0.1;
    for (let i = 0; i < 14; i++) {
      const r = 4 + Math.random() * 14;
      const x = Math.random() * PAGE_W;
      const y = Math.random() * PAGE_H;
      const rg = g.createRadialGradient(x, y, 0, x, y, r);
      rg.addColorStop(0, "rgba(120, 70, 20, 0.6)");
      rg.addColorStop(1, "rgba(120, 70, 20, 0)");
      g.fillStyle = rg;
      g.beginPath();
      g.arc(x, y, r, 0, Math.PI * 2);
      g.fill();
    }
    g.globalAlpha = 1;
  }

  // Top + bottom ink rules + vermilion margin line
  function paintMargins(g) {
    g.strokeStyle = "rgba(50, 32, 18, 0.32)";
    g.lineWidth = 1.4;
    g.beginPath();
    g.moveTo(48, 54);
    g.lineTo(PAGE_W - 48, 54);
    g.moveTo(48, PAGE_H - 54);
    g.lineTo(PAGE_W - 48, PAGE_H - 54);
    g.stroke();
    g.strokeStyle = "rgba(194, 65, 12, 0.45)";
    g.lineWidth = 1;
    g.beginPath();
    g.moveTo(76, 76);
    g.lineTo(76, PAGE_H - 76);
    g.stroke();
  }

  // Page number footer
  function paintPageNumber(g, n) {
    g.font = "12px 'JetBrains Mono', monospace";
    g.fillStyle = "rgba(50, 32, 18, 0.6)";
    g.textAlign = "center";
    g.fillText("— " + n + " —", PAGE_W / 2, PAGE_H - 30);
  }

  // Cover — deep oxblood leather with gilt decoration
  function makeCoverTexture() {
    const c = document.createElement("canvas");
    c.width = PAGE_W;
    c.height = PAGE_H;
    const g = c.getContext("2d");

    // leather base — dark oxblood gradient
    const lg = g.createLinearGradient(0, 0, 0, PAGE_H);
    lg.addColorStop(0, "#3a160c");
    lg.addColorStop(0.5, "#4a1c0e");
    lg.addColorStop(1, "#2c1008");
    g.fillStyle = lg;
    g.fillRect(0, 0, PAGE_W, PAGE_H);

    // leather grain
    g.globalAlpha = 0.18;
    for (let i = 0; i < 2600; i++) {
      const a = Math.random() * 0.6 + 0.2;
      g.fillStyle =
        Math.random() < 0.5
          ? "rgba(80, 30, 14, " + a + ")"
          : "rgba(20, 6, 2, " + a + ")";
      g.fillRect(Math.random() * PAGE_W, Math.random() * PAGE_H, 1, 1);
    }
    g.globalAlpha = 1;

    // pressed-leather pebble pattern (very subtle)
    g.globalAlpha = 0.06;
    for (let y = 0; y < PAGE_H; y += 18) {
      for (let x = 0; x < PAGE_W; x += 18) {
        const r = 6 + Math.random() * 3;
        const rg = g.createRadialGradient(x, y, 0, x, y, r);
        rg.addColorStop(0, "rgba(0, 0, 0, 0.3)");
        rg.addColorStop(1, "rgba(255, 255, 255, 0)");
        g.fillStyle = rg;
        g.beginPath();
        g.arc(x, y, r, 0, Math.PI * 2);
        g.fill();
      }
    }
    g.globalAlpha = 1;

    // gilt decorative frame (outer + inner)
    g.strokeStyle = "rgba(218, 165, 32, 0.85)";
    g.lineWidth = 2.4;
    g.strokeRect(36, 36, PAGE_W - 72, PAGE_H - 72);
    g.lineWidth = 0.8;
    g.strokeRect(50, 50, PAGE_W - 100, PAGE_H - 100);

    // corner ornaments (small diamonds)
    function diamond(x, y) {
      g.save();
      g.translate(x, y);
      g.fillStyle = "rgba(218, 165, 32, 0.9)";
      g.beginPath();
      g.moveTo(0, -6);
      g.lineTo(6, 0);
      g.lineTo(0, 6);
      g.lineTo(-6, 0);
      g.closePath();
      g.fill();
      g.strokeStyle = "rgba(255, 220, 130, 0.7)";
      g.lineWidth = 0.6;
      g.beginPath();
      g.moveTo(0, -3);
      g.lineTo(3, 0);
      g.lineTo(0, 3);
      g.lineTo(-3, 0);
      g.closePath();
      g.stroke();
      g.restore();
    }
    diamond(50, 50);
    diamond(PAGE_W - 50, 50);
    diamond(50, PAGE_H - 50);
    diamond(PAGE_W - 50, PAGE_H - 50);

    // small rule under title
    g.strokeStyle = "rgba(218, 165, 32, 0.7)";
    g.lineWidth = 1.2;
    g.beginPath();
    g.moveTo(PAGE_W / 2 - 80, 320);
    g.lineTo(PAGE_W / 2 + 80, 320);
    g.stroke();

    // Title — ON LIBERTY (gilt)
    g.textAlign = "center";
    g.fillStyle = "rgba(218, 165, 32, 1)";
    g.font = "bold 56px 'Fraunces', 'Times New Roman', serif";
    g.fillText("ON", PAGE_W / 2, 240);
    g.font = "bold 72px 'Fraunces', 'Times New Roman', serif";
    g.fillText("LIBERTY", PAGE_W / 2, 320);

    // decorative flourish
    g.fillStyle = "rgba(218, 165, 32, 0.8)";
    g.font = "20px serif";
    g.fillText("❦  ❦  ❦", PAGE_W / 2, 360);

    // Author
    g.font = "italic 28px 'Fraunces', 'Times New Roman', serif";
    g.fillStyle = "rgba(218, 165, 32, 0.92)";
    g.fillText("John Stuart Mill", PAGE_W / 2, 460);

    // small rule
    g.strokeStyle = "rgba(218, 165, 32, 0.7)";
    g.beginPath();
    g.moveTo(PAGE_W / 2 - 50, 490);
    g.lineTo(PAGE_W / 2 + 50, 490);
    g.stroke();

    // Publisher
    g.font = "12px 'JetBrains Mono', monospace";
    g.fillStyle = "rgba(218, 165, 32, 0.8)";
    g.fillText("LONDON · 1859", PAGE_W / 2, 530);

    // gilt edge — top/bottom thin bands
    g.fillStyle = "rgba(218, 165, 32, 0.65)";
    g.fillRect(36, 28, PAGE_W - 72, 1.5);
    g.fillRect(36, PAGE_H - 29.5, PAGE_W - 72, 1.5);

    const tex = new THREE.CanvasTexture(c);
    tex.colorSpace = THREE.SRGBColorSpace;
    tex.anisotropy = 4;
    return tex;
  }

  // Text page — body text with optional drop cap
  function makeTextTexture({
    text,
    dropCap = null,
    pageNo = 1,
    indent = false,
  }) {
    const c = document.createElement("canvas");
    c.width = PAGE_W;
    c.height = PAGE_H;
    const g = c.getContext("2d");

    paintPaperBase(g);
    paintMargins(g);

    // text block
    const left = 90;
    const right = PAGE_W - 48;
    const top = 100;
    const lineH = 22;
    const bodyW = right - left;

    g.font = "16px 'Georgia', 'Noto Serif SC', serif";
    g.fillStyle = "rgba(28, 18, 10, 0.85)";
    g.textBaseline = "top";

    let y = top;
    let firstLineUsed = !dropCap;

    text.forEach((line, i) => {
      if (line === "") {
        y += lineH * 0.6;
        return;
      }
      const x0 = left;
      // first line of a paragraph: indent
      const useIndent = !firstLineUsed ? false : indent && i === 0;
      const xStart = useIndent ? x0 + 28 : x0;

      // Drop cap
      if (!firstLineUsed && dropCap) {
        g.font = "bold 56px 'Fraunces', 'Georgia', serif";
        g.fillStyle = "rgba(160, 50, 12, 0.95)";
        g.fillText(dropCap, x0, y - 6);
        g.font = "16px 'Georgia', 'Noto Serif SC', serif";
        g.fillStyle = "rgba(28, 18, 10, 0.85)";
        // shift first line right of the drop cap
        const firstText = line;
        g.fillText(firstText, x0 + 50, y + 4);
        firstLineUsed = true;
        y += lineH;
        return;
      }

      g.fillText(line, xStart, y);
      y += lineH;
    });

    paintPageNumber(g, pageNo);
    return textureFromCanvas(c);
  }

  // Frontispiece — title page inside the book
  function makeFrontispieceTexture() {
    const c = document.createElement("canvas");
    c.width = PAGE_W;
    c.height = PAGE_H;
    const g = c.getContext("2d");

    paintPaperBase(g);

    // decorative top rule
    g.strokeStyle = "rgba(40, 26, 14, 0.5)";
    g.lineWidth = 1.4;
    g.beginPath();
    g.moveTo(80, 110);
    g.lineTo(PAGE_W - 80, 110);
    g.stroke();

    // small ornament
    g.fillStyle = "rgba(160, 50, 12, 0.8)";
    g.font = "22px serif";
    g.textAlign = "center";
    g.fillText("❦", PAGE_W / 2, 130);

    g.fillStyle = "rgba(28, 18, 10, 0.85)";
    g.textAlign = "center";
    g.font = "italic 26px 'Fraunces', 'Georgia', serif";
    g.fillText("ON", PAGE_W / 2, 210);
    g.font = "bold 60px 'Fraunces', 'Georgia', serif";
    g.fillText("LIBERTY", PAGE_W / 2, 280);

    g.font = "italic 18px 'Georgia', serif";
    g.fillStyle = "rgba(60, 40, 24, 0.7)";
    g.fillText("a treatise", PAGE_W / 2, 320);

    g.fillStyle = "rgba(28, 18, 10, 0.8)";
    g.font = "20px 'Fraunces', 'Georgia', serif";
    g.fillText("John Stuart Mill", PAGE_W / 2, 410);

    g.font = "12px 'JetBrains Mono', monospace";
    g.fillStyle = "rgba(50, 32, 18, 0.6)";
    g.fillText("London · 1859", PAGE_W / 2, 460);

    // bottom rule
    g.strokeStyle = "rgba(40, 26, 14, 0.5)";
    g.lineWidth = 1.4;
    g.beginPath();
    g.moveTo(80, PAGE_H - 110);
    g.lineTo(PAGE_W - 80, PAGE_H - 110);
    g.stroke();
    g.fillStyle = "rgba(160, 50, 12, 0.7)";
    g.font = "18px serif";
    g.fillText("❦", PAGE_W / 2, PAGE_H - 90);

    paintPageNumber(g, "i");
    return textureFromCanvas(c);
  }

  // Chapter opener — "CHAPTER I / INTRODUCTION"
  function makeChapterOpenerTexture() {
    const c = document.createElement("canvas");
    c.width = PAGE_W;
    c.height = PAGE_H;
    const g = c.getContext("2d");

    paintPaperBase(g);
    paintMargins(g);

    g.textAlign = "center";
    g.fillStyle = "rgba(160, 50, 12, 0.9)";
    g.font = "italic 22px 'Fraunces', 'Georgia', serif";
    g.fillText("Chapter I", PAGE_W / 2, 200);

    g.fillStyle = "rgba(28, 18, 10, 0.92)";
    g.font = "bold 48px 'Fraunces', 'Georgia', serif";
    g.fillText("INTRODUCTION", PAGE_W / 2, 250);

    // ornament
    g.strokeStyle = "rgba(160, 50, 12, 0.7)";
    g.lineWidth = 1.2;
    g.beginPath();
    g.moveTo(PAGE_W / 2 - 70, 290);
    g.lineTo(PAGE_W / 2 + 70, 290);
    g.stroke();
    g.fillStyle = "rgba(160, 50, 12, 0.85)";
    g.font = "16px serif";
    g.fillText("❦", PAGE_W / 2, 305);

    // short first paragraph
    g.font = "16px 'Georgia', serif";
    g.fillStyle = "rgba(28, 18, 10, 0.82)";
    g.textAlign = "left";
    const lines = TEXTS.chapter.slice(0, 6);
    let y = 380;
    lines.forEach((line) => {
      g.fillText(line, 90, y);
      y += 22;
    });

    paintPageNumber(g, 1);
    return textureFromCanvas(c);
  }

  function textureFromCanvas(canvas) {
    const tex = new THREE.CanvasTexture(canvas);
    tex.colorSpace = THREE.SRGBColorSpace;
    tex.anisotropy = 8;
    tex.needsUpdate = true;
    return tex;
  }

  /* =================================================================
     Book — lies open and nearly flat on a table. The spine runs
     front-to-back (world Z) at x = 0. A page turns by rotating about
     the spine (world Z axis): its fore-edge lifts off the right side,
     arcs up and over, and settles onto the left side. Pages turn one
     at a time with eased motion and a soft paper curl, then turn back,
     so the book reads like it is being leafed through by hand.
     ================================================================= */
  const book = new THREE.Group();
  book.position.y = -0.02;
  scene.add(book);

  const PW = 1.0; // page width  (spine → fore-edge)
  const PD = 1.42; // page depth (front → back)
  const OPEN = 0.05; // gentle valley so the open book isn't perfectly flat

  // ---------- Leather covers + spine ----------
  const coverMat = new THREE.MeshStandardMaterial({
    color: 0x3a160c,
    roughness: 0.82,
    metalness: 0.0,
  });
  const coverGeo = new THREE.BoxGeometry(PW + 0.06, 0.05, PD + 0.09);

  const leftCover = new THREE.Mesh(coverGeo, coverMat);
  leftCover.position.set(-(PW + 0.06) / 2, -0.06, 0);
  leftCover.rotation.z = OPEN;
  leftCover.castShadow = true;
  leftCover.receiveShadow = true;
  book.add(leftCover);

  const rightCover = new THREE.Mesh(coverGeo, coverMat);
  rightCover.position.set((PW + 0.06) / 2, -0.06, 0);
  rightCover.rotation.z = -OPEN;
  rightCover.castShadow = true;
  rightCover.receiveShadow = true;
  book.add(rightCover);

  const spine = new THREE.Mesh(
    new THREE.BoxGeometry(0.05, 0.07, PD + 0.09),
    new THREE.MeshStandardMaterial({ color: 0x1a0a04, roughness: 0.85 }),
  );
  spine.position.set(0, -0.055, 0);
  spine.castShadow = true;
  book.add(spine);

  // ---------- Settled page stacks (flat, textured) ----------
  // These are the bulk of the leaves already read / still to read; the
  // animated leaves ride on top of them.
  function makeStack(tex, sign, h, y) {
    const m = new THREE.Mesh(
      new THREE.BoxGeometry(PW, h, PD),
      new THREE.MeshStandardMaterial({ map: tex, roughness: 0.96 }),
    );
    m.position.set((sign * PW) / 2, y, 0);
    m.rotation.z = -sign * OPEN;
    m.castShadow = true;
    m.receiveShadow = true;
    book.add(m);
    return m;
  }
  const leftStack = makeStack(
    makeTextTexture({ text: TEXTS.text3, dropCap: "T", pageNo: 22 }),
    -1,
    0.028,
    -0.014,
  );
  const rightStack = makeStack(
    makeTextTexture({ text: TEXTS.text2, dropCap: "I", pageNo: 23 }),
    1,
    0.024,
    -0.012,
  );

  // ---------- Vermilion ribbon bookmark ----------
  const ribbon = new THREE.Mesh(
    new THREE.BoxGeometry(0.05, 0.005, 0.66),
    new THREE.MeshStandardMaterial({ color: 0xc2410c, roughness: 0.6 }),
  );
  ribbon.position.set(-0.14, 0.006, 0.18);
  book.add(ribbon);

  /* =================================================================
     Turning-leaf material.
     The leaf is a finely subdivided plane laid flat, pivoting at the
     spine. Its UV.x runs 0 (spine) → 1 (fore-edge). We extend the
     standard PBR shader so the leaf bows upward through its arc and
     the fore-edge trails slightly, like a real sheet of paper being
     turned — while still receiving the scene's lights and shadows.
     ================================================================= */
  function makeLeafMaterial(frontTex, backTex) {
    const mat = new THREE.MeshStandardMaterial({
      map: frontTex,
      roughness: 0.95,
      metalness: 0.0,
      side: THREE.DoubleSide,
    });
    const uFlight = { value: 0 }; // 0 at rest, peaks at 1 mid-turn
    const uBend = { value: 0.16 };
    const uBackMap = { value: backTex };

    mat.onBeforeCompile = (shader) => {
      shader.uniforms.uFlight = uFlight;
      shader.uniforms.uBend = uBend;
      shader.uniforms.uBackMap = uBackMap;

      shader.vertexShader = shader.vertexShader
        .replace(
          "#include <common>",
          `
          #include <common>
          uniform float uFlight;
          uniform float uBend;
          varying float vCurl;
          `,
        )
        .replace(
          "#include <begin_vertex>",
          `
          #include <begin_vertex>
          float ux = uv.x;                       // 0 spine → 1 fore-edge
          float arch = sin(ux * 3.14159265);     // gentle bow, zero at ends
          float lift = uFlight * uBend * arch;   // page bows up through its arc
          float droop = uFlight * 0.06 * smoothstep(0.55, 1.0, ux); // edge trails
          transformed.z += lift - droop;
          vCurl = lift;
          `,
        );

      shader.fragmentShader = shader.fragmentShader
        .replace(
          "#include <common>",
          `
          #include <common>
          uniform sampler2D uBackMap;
          varying float vCurl;
          `,
        )
        // Show the (upright) back page when we're looking at the reverse
        // face, so a turned leaf never reads as mirrored text.
        .replace(
          "#include <map_fragment>",
          `
          vec4 sampledDiffuseColor;
          if (gl_FrontFacing) {
            sampledDiffuseColor = texture2D(map, vMapUv);
          } else {
            sampledDiffuseColor = texture2D(uBackMap, vec2(1.0 - vMapUv.x, vMapUv.y));
          }
          diffuseColor *= sampledDiffuseColor;
          `,
        )
        .replace(
          "#include <output_fragment>",
          `
          float shade = 1.0 - 0.16 * smoothstep(0.0, 0.14, vCurl);
          float spineShade = smoothstep(0.0, 0.06, vUv.x);
          shade *= mix(0.88, 1.0, spineShade);
          outgoingLight *= shade;
          #include <output_fragment>
          `,
        );

      mat.userData.shader = shader;
    };

    mat.userData.uFlight = uFlight;
    mat.userData.uBend = uBend;
    return mat;
  }

  // ---------- Build the animated leaves ----------
  // Plane in local XY (x = width, y = depth). Shift so x ∈ [0, PW] with
  // the spine edge at x = 0, then lay it flat (local +Z → world up) so
  // rotating its pivot about world Z turns the page over the spine.
  const segW = 30;
  const segH = 16;
  const leafGeo = new THREE.PlaneGeometry(PW, PD, segW, segH);
  leafGeo.translate(PW / 2, 0, 0);

  const N = 5; // leaves that actively turn
  // Each leaf has a front (recto) and a back (verso) with different
  // content, so a turned page shows a real facing page, never mirrored.
  const leafTex = [
    makeFrontispieceTexture(),
    makeChapterOpenerTexture(),
    makeTextTexture({ text: TEXTS.chapter, dropCap: "T", pageNo: 1 }),
    makeTextTexture({ text: TEXTS.text1, dropCap: "H", pageNo: 4, indent: true }),
    makeTextTexture({ text: TEXTS.text2, dropCap: "I", pageNo: 6 }),
    makeTextTexture({ text: TEXTS.text3, dropCap: "T", pageNo: 8 }),
  ];

  const leaves = [];
  for (let i = 0; i < N; i++) {
    const pivot = new THREE.Group();
    // tiny per-leaf height so coplanar resting leaves never z-fight
    pivot.position.set(0, 0.006 + i * 0.0016, 0);
    book.add(pivot);

    const mat = makeLeafMaterial(leafTex[i], leafTex[i + 1]);
    const leaf = new THREE.Mesh(leafGeo, mat);
    leaf.rotation.x = -Math.PI / 2; // lay flat; local +Z → world +Y (up)
    leaf.castShadow = true;
    leaf.receiveShadow = true;
    pivot.add(leaf);

    leaves.push({ pivot, mat, i });
  }

  /* =================================================================
     Page-turn schedule.
     A repeating cycle: leaves turn left one by one, hold, then turn
     back to the right one by one, hold, repeat. Each turn is eased so
     it accelerates off the page and settles softly on the other side.
     ================================================================= */
  const TURN = 1.7; // seconds for a single page to turn
  const GAP = 0.5; // pause between consecutive turns
  const HOLD = 1.6; // pause when all pages rest on one side

  const events = []; // { i, t0, from, to }  (from/to in 0..1, 0=right 1=left)
  let cursor = 0;
  for (let i = 0; i < N; i++) {
    events.push({ i, t0: cursor, from: 0, to: 1 });
    cursor += TURN + GAP;
  }
  cursor += HOLD;
  for (let i = N - 1; i >= 0; i--) {
    events.push({ i, t0: cursor, from: 1, to: 0 });
    cursor += TURN + GAP;
  }
  cursor += HOLD;
  const CYCLE = cursor;

  const perLeaf = Array.from({ length: N }, () => []);
  events.forEach((e) => perLeaf[e.i].push(e));
  perLeaf.forEach((arr) => arr.sort((a, b) => a.t0 - b.t0));

  const easeInOut = (x) =>
    x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2;

  // Returns { a: 0..1 flip amount, flight: 0..1 how airborne }
  function leafState(i, tc) {
    const arr = perLeaf[i];
    let a = arr[0].from; // resting default (right)
    for (const e of arr) {
      if (tc < e.t0) break;
      if (tc < e.t0 + TURN) {
        const p = easeInOut((tc - e.t0) / TURN);
        return { a: e.from + (e.to - e.from) * p, flight: Math.sin(p * Math.PI) };
      }
      a = e.to;
    }
    return { a, flight: 0 };
  }

  function updateLeaves(t) {
    const tc = ((t % CYCLE) + CYCLE) % CYCLE;
    leaves.forEach((lf) => {
      const s = leafState(lf.i, tc);
      lf.pivot.rotation.z = s.a * Math.PI;
      lf.mat.userData.uFlight.value = s.flight;
    });
  }

  /* =================================================================
     Tiny drifting motes — dust caught in the wind, gives the
     scene atmosphere and reinforces the gust-of-wind feeling.
     ================================================================= */
  const moteCount = 46;
  const motePos = new Float32Array(moteCount * 3);
  const moteSeed = new Float32Array(moteCount);
  for (let i = 0; i < moteCount; i++) {
    motePos[i * 3] = (Math.random() - 0.5) * 4;
    motePos[i * 3 + 1] = Math.random() * 1.5 - 0.2;
    motePos[i * 3 + 2] = (Math.random() - 0.5) * 3 + 0.5;
    moteSeed[i] = Math.random();
  }
  const moteGeo = new THREE.BufferGeometry();
  moteGeo.setAttribute("position", new THREE.BufferAttribute(motePos, 3));
  moteGeo.setAttribute("aSeed", new THREE.BufferAttribute(moteSeed, 1));

  const moteMat = new THREE.ShaderMaterial({
    uniforms: {
      uTime: { value: 0 },
      uPixel: { value: renderer.getPixelRatio() },
    },
    transparent: true,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
    vertexShader: /* glsl */ `
      attribute float aSeed;
      uniform float uTime;
      uniform float uPixel;
      varying float vAlpha;
      void main() {
        vec3 p = position;
        // gentle horizontal drift (gust from right to left)
        p.x -= mod(uTime * 0.18 + aSeed * 4.0, 4.0) - 2.0;
        p.x = mod(p.x + 2.0, 4.0) - 2.0;
        p.y += sin(uTime * 0.5 + aSeed * 12.0) * 0.15;
        p.z += cos(uTime * 0.4 + aSeed * 8.0) * 0.08;
        vec4 mv = modelViewMatrix * vec4(p, 1.0);
        gl_Position = projectionMatrix * mv;
        gl_PointSize = (4.0 + aSeed * 5.0) * uPixel * (140.0 / -mv.z);
        vAlpha = 0.08 + 0.16 * aSeed;
      }
    `,
    fragmentShader: /* glsl */ `
      varying float vAlpha;
      void main() {
        vec2 uv = gl_PointCoord - 0.5;
        float d = length(uv);
        float a = smoothstep(0.5, 0.0, d);
        gl_FragColor = vec4(vec3(1.0, 0.96, 0.86), a * vAlpha);
      }
    `,
  });
  const motes = new THREE.Points(moteGeo, moteMat);
  scene.add(motes);

  // ---------- Resize ----------
  function resize() {
    const rect = canvas.getBoundingClientRect();
    const w = rect.width || 1;
    const h = rect.height || 1;
    renderer.setSize(w, h, false);
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
  }
  resize();
  const ro = new ResizeObserver(resize);
  ro.observe(canvas);

  // ---------- Main animation loop ----------
  const start = performance.now();
  function tick(now) {
    const t = (now - start) * 0.001;

    if (!reduceMotion) {
      updateLeaves(t);
      moteMat.uniforms.uTime.value = t;
      // barely-there breathing sway so the book feels alive, not spinning
      book.rotation.y = Math.sin(t * 0.18) * 0.02;
      book.position.y = -0.02 + Math.sin(t * 0.5) * 0.006;
    } else {
      // reduced motion: hold one leaf caught mid-turn, the rest at rest
      leaves.forEach((leaf) => {
        const mid = leaf.i === 2;
        leaf.pivot.rotation.z = (mid ? 0.5 : 0) * Math.PI;
        leaf.mat.userData.uFlight.value = mid ? 1 : 0;
      });
    }

    renderer.render(scene, camera);
    requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);

  // ---------- Cleanup ----------
  window.addEventListener("beforeunload", () => {
    ro.disconnect();
    renderer.dispose();
    [
      leftCover,
      rightCover,
      spine,
      leftStack,
      rightStack,
      ribbon,
      ...leaves.map((l) => l.pivot.children[0]),
    ].forEach((m) => {
      m.geometry.dispose();
      if (Array.isArray(m.material)) m.material.forEach((mm) => mm.dispose());
      else m.material.dispose();
    });
    leafTex.forEach((t) => t.dispose());
    moteGeo.dispose();
    moteMat.dispose();
  });
}

/* ---------- Render showcase grid (skeleton) ---------- */
function renderShowcase() {
  const host = $("#showcase-grid");
  if (!host) return;
  host.innerHTML = SHOWCASE.map(
    (d) => `
      <article class="demo" data-demo="${d.id}" data-reveal>
        <div class="demo__stage">
          <div class="demo__placeholder">awaiting viewport</div>
          <canvas class="demo__canvas" aria-label="${d.title} 实时演示"></canvas>
        </div>
        <div class="demo__body">
          <div class="demo__heading">
            <p class="demo__no">№ ${d.no}</p>
            <h3 class="demo__title">${d.title}</h3>
            <p class="demo__sub">${d.sub}</p>
          </div>
          <span class="demo__tag">${d.tag}</span>
        </div>
      </article>`,
  ).join("");
}

/* ---------- Showcase scene builders ----------
   Each builder receives (canvas, ctx) and returns { update, dispose, resize }.
   All keep within r185 public API: BufferGeometry, ShaderMaterial, etc.
*/
const reduceMotion = window.matchMedia(
  "(prefers-reduced-motion: reduce)",
).matches;

const DEMOS = {
  nebula: (canvas) => buildNebula(canvas),
  crystal: (canvas) => buildCrystal(canvas),
  wave: (canvas) => buildWave(canvas),
  mobius: (canvas) => buildMobius(canvas),
};

/* Demo 1: Particle Nebula — Points + spiral distribution */
function buildNebula(canvas) {
  const renderer = new THREE.WebGLRenderer({
    canvas,
    antialias: true,
    alpha: true,
  });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setClearColor(0x000000, 0);

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(50, 1, 0.1, 100);
  camera.position.set(0, 0.6, 4.2);
  camera.lookAt(0, 0, 0);

  const COUNT = 5000;
  const arms = 3;
  const positions = new Float32Array(COUNT * 3);
  const colors = new Float32Array(COUNT * 3);
  const sizes = new Float32Array(COUNT);
  const baseAngle = new Float32Array(COUNT);

  const cInk = new THREE.Color(0x181816);
  const cVermilion = new THREE.Color(0xc2410c);
  const cPaper = new THREE.Color(0xf6f3ec);
  const tmp = new THREE.Color();

  for (let i = 0; i < COUNT; i++) {
    const arm = i % arms;
    const t = Math.random();
    const radius = 0.4 + t * 2.2 + (Math.random() - 0.5) * 0.2;
    const spin = t * Math.PI * 4 + arm * ((Math.PI * 2) / arms);
    const wobble = (Math.random() - 0.5) * (0.6 - t * 0.5);
    const x = Math.cos(spin) * radius + wobble;
    const z = Math.sin(spin) * radius + wobble * 0.6;
    const y = (Math.random() - 0.5) * (0.25 + (1 - t) * 0.4);
    positions[i * 3] = x;
    positions[i * 3 + 1] = y;
    positions[i * 3 + 2] = z;
    baseAngle[i] = spin;

    if (t < 0.18) {
      tmp.copy(cVermilion).lerp(cPaper, t / 0.18);
    } else {
      tmp.copy(cPaper).lerp(cInk, (t - 0.18) / 0.82);
    }
    colors[i * 3] = tmp.r;
    colors[i * 3 + 1] = tmp.g;
    colors[i * 3 + 2] = tmp.b;
    sizes[i] = (Math.random() * 0.5 + (1 - t) * 1.2) * 0.04;
  }

  const geo = new THREE.BufferGeometry();
  geo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
  geo.setAttribute("color", new THREE.BufferAttribute(colors, 3));
  geo.setAttribute("aSize", new THREE.BufferAttribute(sizes, 1));
  geo.setAttribute("aAngle", new THREE.BufferAttribute(baseAngle, 1));

  const uniforms = {
    uTime: { value: 0 },
    uPixel: { value: renderer.getPixelRatio() },
  };

  const mat = new THREE.ShaderMaterial({
    uniforms,
    transparent: true,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
    vertexShader: /* glsl */ `
      attribute float aSize;
      attribute float aAngle;
      uniform float uTime;
      uniform float uPixel;
      varying vec3 vColor;
      void main() {
        vColor = color;
        float spin = aAngle + uTime * 0.12;
        float c = cos(spin), s = sin(spin);
        vec3 p = position;
        p.x = c * position.x - s * position.z;
        p.z = s * position.x + c * position.z;
        p.y += sin(uTime * 0.6 + aAngle * 2.0) * 0.04;
        vec4 mv = modelViewMatrix * vec4(p, 1.0);
        gl_Position = projectionMatrix * mv;
        gl_PointSize = aSize * 320.0 * uPixel / -mv.z;
      }
    `,
    fragmentShader: /* glsl */ `
      varying vec3 vColor;
      void main() {
        vec2 uv = gl_PointCoord - 0.5;
        float d = length(uv);
        float a = smoothstep(0.5, 0.0, d);
        a = pow(a, 2.0);
        gl_FragColor = vec4(vColor, a);
      }
    `,
    vertexColors: true,
  });

  const points = new THREE.Points(geo, mat);
  scene.add(points);

  function resize() {
    const r = canvas.getBoundingClientRect();
    const w = r.width || 1;
    const h = r.height || 1;
    renderer.setSize(w, h, false);
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
  }
  resize();

  return {
    update(t, dt) {
      uniforms.uTime.value = t * 0.001;
      points.rotation.y = t * 0.00015;
      renderer.render(scene, camera);
    },
    dispose() {
      geo.dispose();
      mat.dispose();
      renderer.dispose();
    },
    resize,
  };
}

/* Demo 2: Pulsing Crystal — subdivided icosahedron with vertex displacement shader */
function buildCrystal(canvas) {
  const renderer = new THREE.WebGLRenderer({
    canvas,
    antialias: true,
    alpha: true,
  });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setClearColor(0x000000, 0);

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 100);
  camera.position.set(0, 0, 3.2);

  const geo = new THREE.IcosahedronGeometry(1, 24);

  const uniforms = {
    uTime: { value: 0 },
    uAmp: { value: 0.08 },
    uColor: { value: new THREE.Color(0xc2410c) },
  };

  const mat = new THREE.ShaderMaterial({
    uniforms,
    wireframe: true,
    transparent: true,
    vertexShader: /* glsl */ `
      uniform float uTime;
      uniform float uAmp;
      varying float vNoise;
      // simple pseudo-noise based on normal & time
      float n3(vec3 p){
        return sin(p.x*3.0+uTime)*sin(p.y*3.0+uTime*0.7)*sin(p.z*3.0+uTime*1.3);
      }
      void main(){
        vec3 p = position;
        float d = n3(normalize(p) + uTime*0.2);
        p += normal * d * uAmp;
        vNoise = d;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0);
      }
    `,
    fragmentShader: /* glsl */ `
      uniform vec3 uColor;
      varying float vNoise;
      void main(){
        float a = 0.55 + 0.45 * (0.5 + 0.5 * vNoise);
        vec3 c = mix(uColor, vec3(0.96, 0.95, 0.92), a);
        gl_FragColor = vec4(c, 0.85);
      }
    `,
  });

  const mesh = new THREE.Mesh(geo, mat);
  scene.add(mesh);

  // inner solid with translucent fill
  const solid = new THREE.Mesh(
    new THREE.IcosahedronGeometry(0.92, 3),
    new THREE.MeshBasicMaterial({
      color: 0x181816,
      transparent: true,
      opacity: 0.18,
    }),
  );
  scene.add(solid);

  // ring accent
  const ring = new THREE.Mesh(
    new THREE.TorusGeometry(1.55, 0.005, 8, 200),
    new THREE.MeshBasicMaterial({ color: 0xc2410c }),
  );
  ring.rotation.x = Math.PI / 2.5;
  scene.add(ring);

  function resize() {
    const r = canvas.getBoundingClientRect();
    const w = r.width || 1;
    const h = r.height || 1;
    renderer.setSize(w, h, false);
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
  }
  resize();

  return {
    update(t) {
      uniforms.uTime.value = t * 0.001;
      mesh.rotation.y = t * 0.0003;
      mesh.rotation.x = t * 0.00018;
      solid.rotation.x = -mesh.rotation.x * 0.6;
      solid.rotation.y = -mesh.rotation.y * 0.6;
      solid.rotation.z = -mesh.rotation.z * 0.6;
      ring.rotation.z = t * 0.0004;
      renderer.render(scene, camera);
    },
    dispose() {
      geo.dispose();
      mat.dispose();
      solid.geometry.dispose();
      solid.material.dispose();
      ring.geometry.dispose();
      ring.material.dispose();
      renderer.dispose();
    },
    resize,
  };
}

/* Demo 3: Liquid Wave — high-density plane with custom vertex shader */
function buildWave(canvas) {
  const renderer = new THREE.WebGLRenderer({
    canvas,
    antialias: true,
    alpha: true,
  });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setClearColor(0x000000, 0);

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 100);
  camera.position.set(0, 1.2, 3.2);
  camera.lookAt(0, 0, 0);

  const geo = new THREE.PlaneGeometry(4, 2.4, 180, 110);
  geo.rotateX(-Math.PI / 2);

  const uniforms = {
    uTime: { value: 0 },
    uColorA: { value: new THREE.Color(0x181816) },
    uColorB: { value: new THREE.Color(0xc2410c) },
    uColorC: { value: new THREE.Color(0xf6f3ec) },
  };

  const mat = new THREE.ShaderMaterial({
    uniforms,
    side: THREE.DoubleSide,
    wireframe: true,
    transparent: true,
    vertexShader: /* glsl */ `
      uniform float uTime;
      varying float vH;
      varying vec3 vPos;
      void main(){
        vec3 p = position;
        float h = sin(p.x * 1.4 + uTime * 0.9) * 0.18
                + sin(p.z * 1.7 - uTime * 0.7) * 0.14
                + sin((p.x + p.z) * 2.1 + uTime * 1.2) * 0.06;
        p.y += h;
        vH = h;
        vPos = p;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0);
      }
    `,
    fragmentShader: /* glsl */ `
      uniform vec3 uColorA;
      uniform vec3 uColorB;
      uniform vec3 uColorC;
      varying float vH;
      varying vec3 vPos;
      void main(){
        float t = smoothstep(-0.25, 0.25, vH);
        vec3 c = mix(uColorA, uColorB, t);
        // rim glow on crest
        c = mix(c, uColorC, pow(t, 4.0) * 0.6);
        gl_FragColor = vec4(c, 0.9);
      }
    `,
  });

  const mesh = new THREE.Mesh(geo, mat);
  scene.add(mesh);

  function resize() {
    const r = canvas.getBoundingClientRect();
    const w = r.width || 1;
    const h = r.height || 1;
    renderer.setSize(w, h, false);
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
  }
  resize();

  return {
    update(t) {
      uniforms.uTime.value = t * 0.001;
      mesh.rotation.z = Math.sin(t * 0.0002) * 0.05;
      renderer.render(scene, camera);
    },
    dispose() {
      geo.dispose();
      mat.dispose();
      renderer.dispose();
    },
    resize,
  };
}

/* Demo 4: Möbius Strip — parametric BufferGeometry + rainbow gradient */
function buildMobius(canvas) {
  const renderer = new THREE.WebGLRenderer({
    canvas,
    antialias: true,
    alpha: true,
  });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setClearColor(0x000000, 0);

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 100);
  camera.position.set(0, 1.6, 3.4);
  camera.lookAt(0, 0, 0);

  // build parametrics
  const U = 240,
    V = 20;
  const positions = new Float32Array(U * V * 3);
  const uvs = new Float32Array(U * V * 2);
  const indices = [];

  for (let i = 0; i < U; i++) {
    for (let j = 0; j < V; j++) {
      const u = (i / U) * Math.PI * 2;
      const v = (j / V - 0.5) * 0.6;
      const x = (1 + v * 0.5 * Math.cos(u / 2)) * Math.cos(u);
      const y = (1 + v * 0.5 * Math.cos(u / 2)) * Math.sin(u);
      const z = v * 0.5 * Math.sin(u / 2);
      const idx = (i * V + j) * 3;
      positions[idx] = x * 1.1;
      positions[idx + 1] = z * 1.1;
      positions[idx + 2] = y * 1.1;
      uvs[(i * V + j) * 2] = i / U;
      uvs[(i * V + j) * 2 + 1] = j / V;
    }
  }
  for (let i = 0; i < U; i++) {
    for (let j = 0; j < V; j++) {
      const a = i * V + j;
      const b = ((i + 1) % U) * V + j;
      const c = ((i + 1) % U) * V + ((j + 1) % V);
      const d = i * V + ((j + 1) % V);
      indices.push(a, b, d, b, c, d);
    }
  }

  const geo = new THREE.BufferGeometry();
  geo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
  geo.setAttribute("uv", new THREE.BufferAttribute(uvs, 2));
  geo.setIndex(indices);
  geo.computeVertexNormals();

  const uniforms = {
    uTime: { value: 0 },
    uInk: { value: new THREE.Color(0x181816) },
    uVermilion: { value: new THREE.Color(0xc2410c) },
    uPaper: { value: new THREE.Color(0xf6f3ec) },
  };

  const mat = new THREE.ShaderMaterial({
    uniforms,
    side: THREE.DoubleSide,
    transparent: false,
    vertexShader: /* glsl */ `
      varying vec2 vUv;
      void main(){
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,
    fragmentShader: /* glsl */ `
      uniform float uTime;
      uniform vec3 uInk;
      uniform vec3 uVermilion;
      uniform vec3 uPaper;
      varying vec2 vUv;
      // hsv→rgb
      vec3 hsv2rgb(vec3 c){
        vec4 K = vec4(1.0, 2.0/3.0, 1.0/3.0, 3.0);
        vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);
        return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);
      }
      void main(){
        float t = vUv.x + uTime * 0.06;
        float s = sin(t * 6.2831) * 0.5 + 0.5;
        vec3 hue = hsv2rgb(vec3(t, 0.65, 1.0));
        // bias toward warm palette so it sits on the page
        vec3 c = mix(uInk, hue, 0.7);
        c = mix(c, uVermilion, smoothstep(0.4, 0.55, s) * 0.6);
        gl_FragColor = vec4(c, 1.0);
      }
    `,
  });

  const mesh = new THREE.Mesh(geo, mat);
  scene.add(mesh);

  // edge wireframe
  const edges = new THREE.LineSegments(
    new THREE.EdgesGeometry(geo, 18),
    new THREE.LineBasicMaterial({
      color: 0xf6f3ec,
      transparent: true,
      opacity: 0.35,
    }),
  );
  scene.add(edges);

  function resize() {
    const r = canvas.getBoundingClientRect();
    const w = r.width || 1;
    const h = r.height || 1;
    renderer.setSize(w, h, false);
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
  }
  resize();

  return {
    update(t) {
      uniforms.uTime.value = t * 0.001;
      mesh.rotation.z = t * 0.0002;
      edges.rotation.copy(mesh.rotation);
      renderer.render(scene, camera);
    },
    dispose() {
      geo.dispose();
      mat.dispose();
      edges.geometry.dispose();
      edges.material.dispose();
      renderer.dispose();
    },
    resize,
  };
}

/* ---------- Activate showcase scenes on intersection ---------- */
function setupShowcase() {
  const cards = $$(".demo");
  if (!cards.length) return;
  const reduced = reduceMotion;

  const active = new Map();
  let raf = 0;
  let last = performance.now();

  function loop(now) {
    const dt = now - last;
    last = now;
    active.forEach((ctx) => {
      try {
        ctx.update(now, dt);
      } catch (e) {
        console.error("showcase update failed", e);
      }
    });
    raf = requestAnimationFrame(loop);
  }

  if (!reduced) raf = requestAnimationFrame(loop);

  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const card = entry.target;
        const id = card.dataset.demo;
        const canvas = card.querySelector(".demo__canvas");
        const ph = card.querySelector(".demo__placeholder");
        if (entry.isIntersecting) {
          if (!active.has(id)) {
            const builder = DEMOS[id];
            if (!builder) return;
            try {
              const ctx = builder(canvas);
              const ro = new ResizeObserver(() => ctx.resize());
              ro.observe(canvas);
              active.set(id, { ...ctx, ro });
              if (ph) ph.style.display = "none";
            } catch (e) {
              console.error("showcase init failed", e);
            }
          }
        } else {
          const ctx = active.get(id);
          if (ctx) {
            ctx.ro.disconnect();
            ctx.dispose();
            active.delete(id);
            if (ph) ph.style.display = "";
          }
        }
      });
    },
    { rootMargin: "200px 0px", threshold: 0.05 },
  );
  cards.forEach((c) => io.observe(c));
}

/* ---------- Init ---------- */
function init() {
  renderFeatures();
  renderShowcase();
  renderResources();
  renderCode();
  setupCopy();
  setupReveal();
  initHero();
  setupShowcase();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init);
} else {
  init();
}
