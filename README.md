# adaptive-ui

> **Human-aware UI adaptation for modern web apps**

adaptive-ui is a **TypeScript-first library** that helps your UI adapt to **users**, not just screen sizes.

Instead of only responding to `mobile`, `desktop`, or `tablet`, adaptive-ui reacts to **real conditions** like:

* slow network
* low battery
* user impatience
* first-time vs returning users
* accessibility stress

This README explains everything **from zero**, assuming you are a beginner.

---

## 🚨 The Problem (Why adaptive-ui Exists)

Most web apps today:

* look responsive
* but feel frustrating

Why?
Because they adapt to **screens**, not **people**.

Examples:

* User has slow internet → app still loads heavy animations
* User is confused → UI gives no guidance
* User is impatient → UI hides important actions
* User has low battery → app keeps wasting power

Developers usually fix this by writing **random `if` statements everywhere**.

That approach:

* does not scale
* is hard to reason about
* creates messy code

**adaptive-ui solves this by acting as a decision layer for your UI.**

---

## 🧠 What adaptive-ui Is (And Is NOT)

### ✅ What it IS

* a **logic layer** for UI behavior
* a way to detect user context
* a strategy system for adapting interfaces
* framework-friendly (React, Next.js, etc.)

### ❌ What it is NOT

* ❌ a UI component library
* ❌ a design system
* ❌ an analytics tool
* ❌ an AI / ML system
* ❌ a tracking library

adaptive-ui **never renders UI**. It only helps you make better decisions.

---

## 🏗️ How adaptive-ui Works (Simple Explanation)

adaptive-ui works in **three steps**:

### 1️⃣ Detect Signals

Signals are things like:

* slow network
* low battery
* many rapid clicks (impatience)

### 2️⃣ Build Context

From signals, adaptive-ui builds a **context**, such as:

* `slow-network`
* `impatient`
* `new-user`

### 3️⃣ Run Strategies

Strategies say:

> "When these conditions are true → do this"

Example:

* If user is impatient → simplify the UI
* If network is slow → disable animations

---

## 📦 Installation

```bash
npm install adaptive-ui
```

or

```bash
pnpm install adaptive-ui
```

or

```bash
bun add adaptive-ui
```

or

```bash
yarn add adaptive-ui
```

---

## ⚛️ Basic Usage (React / Next.js)

### Step 1: Import the hook

```ts
import { useAdaptive } from "adaptive-ui";
```

---

### Step 2: Use it inside a component

```tsx
export default function Dashboard() {
  const ui = useAdaptive();

  return <h1>Dashboard</h1>;
}
```

This gives you access to the **adaptive engine**.

---

## 🧩 Context Detection (Beginner Friendly)

adaptive-ui automatically detects some conditions.

### Example: Check if user is impatient

```tsx
if (ui.has("impatient")) {
  console.log("User is impatient");
}
```

You don’t need to know *how* impatience is detected.

That logic is handled internally.

---

## 🧠 Strategies (The Core Feature)

Strategies define **how your UI should react**.

### Example: Lite UI on slow network

```ts
ui.strategy({
  conditions: ["slow-network"],
  actions: () => {
    document.body.classList.add("ui-lite");
  }
});
```

This means:

> If network is slow → switch to lite UI

---

### Example: Focus mode for impatient users

```ts
ui.strategy({
  conditions: ["impatient"],
  actions: () => {
    document.body.classList.add("ui-focus");
  }
});
```

---

### Run strategies

```ts
ui.run();
```

This applies all matching strategies.

---

## 🎨 Example CSS

```css
.ui-lite * {
  animation: none !important;
  transition: none !important;
}

.ui-focus nav,
.ui-focus aside {
  display: none;
}
```

Your UI now adapts **without changing components**.

---

## 🧪 Debugging (Very Important)

To understand *why* the UI changed:

```ts
console.log(ui.explain());
```

Output:

```ts
{
  context: ["slow-network", "impatient"],
  strategies: 2
}
```

This helps avoid confusion during development.

---

## ♿ Accessibility-Friendly by Design

adaptive-ui helps you:

* reduce motion
* simplify layouts
* increase clarity

Without extra libraries.

It reacts to **behavior**, not user labels.

---

## 🚀 Why Use adaptive-ui?

* cleaner UI logic
* fewer edge cases
* better UX automatically
* no heavy setup
* beginner-friendly

Once added, it quietly improves your app.

---

## 🧱 What adaptive-ui Will NEVER Do

To keep trust high:

* ❌ no analytics
* ❌ no tracking
* ❌ no AI
* ❌ no user profiling
* ❌ no remote configs

Your app stays **privacy-respecting**.

---

## 🛣️ Roadmap

Planned features:

* debug overlay
* persistent context
* strategy priorities
* plugin system

Not planned:

* ML models
* server-side tracking
* UI rendering

---

## 🧠 Philosophy

> Good UI should feel invisible.

adaptive-ui helps you build interfaces that **respect users**, without extra complexity.

---

## 📄 License

MIT License

---

## 🙌 Final Note

If you are a beginner:

* start small
* add one strategy
* observe the effect

adaptive-ui grows **with your understanding**, not against it.
