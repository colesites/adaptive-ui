# @c-technology/adaptive-ui

> **Human-aware UI adaptation for modern web apps**

`@c-technology/adaptive-ui` is a **TypeScript-first library** that helps your UI adapt to **users**, not just screen sizes.

Instead of only responding to `mobile`, `desktop`, or `tablet`, this library reacts to **real conditions** like:

* slow network
* low battery
* user impatience
* first-time vs returning users
* accessibility stress

This README explains everything **from zero**, assuming you are a beginner.

---

## 🚨 The Problem (Why @c-technology/adaptive-ui Exists)

Most web apps today:

* look responsive
* but feel frustrating

Why? Because they adapt to **screens**, not **people**.

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

`@c-technology/adaptive-ui` solves this by acting as a **decision layer** for your UI.

---

## 🧠 What It Is (And Is NOT)

### ✅ What it IS

* a **logic layer** for UI behavior
* a way to detect user context
* a **strategy system** for adapting interfaces
* framework-friendly (React, Next.js, etc.)

### ❌ What it is NOT

* ❌ a UI component library
* ❌ a design system
* ❌ an analytics tool
* ❌ an AI / ML system
* ❌ a tracking library

This library **never renders UI**. It only helps you make better decisions.

---

## 🏗️ How It Works (Simple Explanation)

### 1️⃣ Detect Signals

Signals are things like:

* slow network
* low battery
* many rapid clicks (impatience)

### 2️⃣ Build Context

From signals, it builds a **context**, such as:

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
npm install @c-technology/adaptive-ui
```

or

```bash
pnpm add @c-technology/adaptive-ui
```
or

```bash
bun add @c-technology/adaptive-ui
```

or

```bash
yarn add @c-technology/adaptive-ui
```

---

## ⚛️ Basic Usage (React / Next.js)

### Step 1: Import the hook

```ts
import { useAdaptive } from "@c-technology/adaptive-ui";
```

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

Example: Check if user is impatient

```ts
if (ui.has("impatient")) {
  console.log("User is impatient");
}
```

You don’t need to know how impatience is detected — the logic is handled internally.

---

## 🧠 Strategies (The Core Feature)

Define **how your UI should react**.

### Example: Lite UI on slow network

```ts
ui.strategy({
  conditions: ["slow-network"],
  actions: () => {
    document.body.classList.add("ui-lite");
  }
});
```

### Example: Focus mode for impatient users

```ts
ui.strategy({
  conditions: ["impatient"],
  actions: () => {
    document.body.classList.add("ui-focus");
  }
});
```

### Run strategies

```ts
ui.run();
```

Applies all matching strategies.

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

Your UI adapts without changing components.

---

## 🧪 Debugging

Check why the UI changed:

```ts
console.log(ui.explain());
```

Example output:

```ts
{
  context: ["slow-network", "impatient"],
  strategies: 2
}
```

---

## ♿ Accessibility-Friendly by Design

* reduces motion
* simplifies layouts
* increases clarity

It reacts to **behavior**, not user labels.

---

## 🚀 Why Use It?

* cleaner UI logic
* fewer edge cases
* better UX automatically
* no heavy setup
* beginner-friendly

---

## 🧱 What It Will NEVER Do

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

It helps you build interfaces that **respect users** without extra complexity.

---

## 📄 License

MIT License

---

## 🙌 Final Note

If you are a beginner:

* start small
* add one strategy
* observe the effect

`@c-technology/adaptive-ui` grows with your understanding, not against it.
