# ☕ ApniChaiCSS

A lightweight **utility-first CSS engine built with JavaScript** that lets you style elements using simple `chai-*` classes (inspired by Tailwind).

---

## 🚀 Features

* ⚡ Utility-based class styling (`chai-*`)
* 🎨 Supports colors, spacing, layout & typography
* 📏 Handles px and non-px properties
* 🔄 Includes transforms (scale, rotate)
* 🧠 Works with **npm + CDN**
* 🔥 Auto-applies styles (no manual call needed in CDN)

---

## 📦 Installation (npm)

```bash
npm install apnichaicss
```

### Usage (with bundler like Vite/React)

```js
import { applyChaiStyles } from "apnichaicss";

applyChaiStyles();
```

```html
<div class="chai-p-20 chai-bg-red chai-text-white">
  Hello ChaiCSS 🚀
</div>
```

---

## 🌐 CDN Usage (No Install Needed)

```html
<script type="module" src="https://unpkg.com/apnichaicss/index.js"></script>

<div class="chai-p-20 chai-bg-red chai-text-white">
  ChaiCSS CDN Works 🚀
</div>
```

👉 No npm install required
👉 Just add script and use classes

---

## 🎯 Class Syntax

```
chai-{property}-{value}
```

### Examples

* `chai-p-20` → padding: 20px
* `chai-mt-10` → margin-top: 10px
* `chai-bg-red` → background-color: red
* `chai-text-center` → text-align: center
* `chai-text-blue` → text color: blue
* `chai-fs-18` → font-size: 18px
* `chai-w-100` → width: 100px
* `chai-scale-2` → transform: scale(2)
* `chai-rotate-45` → transform: rotate(45deg)

---

## ⚙️ Supported Properties

* Spacing → `p, m, pt, mt, ...`
* Size → `w, h, minw, maxw`
* Typography → `fs, fw, text`
* Layout → `d, jc, ai, fd`
* Colors → `bg, text`
* Effects → `shadow, opacity, transform`

---

## ⚡ How It Works

* Scans DOM elements
* Detects `chai-*` classes
* Converts them into inline styles dynamically
* Applies styles automatically (CDN) or via function call (npm)

---

## ⚠️ Notes

* npm version requires a bundler (Vite, React, etc.)
* CDN version works directly in browser
* Auto-runs when loaded via CDN

---

## 👨‍💻 Author

Devansh Yaduvanshi

