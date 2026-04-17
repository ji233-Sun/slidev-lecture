---
# ============ Headmatter（整个 deck 的全局配置）============
# 👉 现场演示 Headmatter：可把 transition 删掉 / 改成 fade，观察整体切换
theme: default
title: Slidev 现场演示 Template
highlighter: shiki
lineNumbers: false
monaco: true
drawings:
  persist: false
addons:
  - slidev-addon-python-runner
---

# Slidev 现场演示 Template
## Before → 改一改 → After

<div class="pt-10 text-sm opacity-70">
  每页都是"尚未生效"的素材。按提示现场修改源码，效果立刻出现。
</div>

---

<!-- ====================================================== -->
<!-- 【DEMO 1】Frontmatter —— 当前：默认 layout，左上角标题     -->
<!-- 👉 现场演示：在上方 `---` 中间加入：                       -->
<!--      layout: center                                      -->
<!--      class: text-center                                  -->
<!--    标题会立刻居中                                         -->
<!-- ====================================================== -->

# DEMO 1 · Frontmatter

当前没有设置 layout 和 class。

**现场操作**：在本页最上方的 frontmatter 里加两行：

```yaml
layout: center
class: text-center
```

保存后，整页内容会立刻居中。

---

<!-- ====================================================== -->
<!-- 【DEMO 2】Layout —— 当前：default 单栏                    -->
<!-- 👉 现场演示：在上方加 frontmatter：                        -->
<!--      ---                                                 -->
<!--      layout: two-cols                                    -->
<!--      ---                                                 -->
<!--    然后在下方用 `::right::` 分隔左右两栏                   -->
<!-- ====================================================== -->

# DEMO 2 · Layout

当前是默认单栏。下面这段 `::right::` 还没生效，它只是被当成普通文字。

左栏内容：Slidev 是基于 Markdown 的演示工具。

::right::

右栏内容：这段现在只是普通段落，因为还没切换到 two-cols 布局。

**现场操作**：在本页顶部加 frontmatter：

```yaml
---
layout: two-cols
---
```

保存后，`::right::` 就会变成左右分栏的分隔符。

---

<!-- ====================================================== -->
<!-- 【DEMO 3】代码块行高亮 —— 当前：纯代码，无高亮              -->
<!-- 👉 现场演示：把 ```ts 改成 ```ts {2}                       -->
<!--    再改成 ```ts {1,3} / ```ts {all|1|2|3}                -->
<!-- ====================================================== -->

# DEMO 3 · 代码块行高亮

当前代码块只是普通展示，没有任何行被高亮。

```ts
const a = 1
const b = 2
const c = 3
```

**现场操作**：把上面的 ` ```ts ` 改成：

- ` ```ts {2} ` → 只高亮第 2 行
- ` ```ts {1,3} ` → 高亮 1、3 行
- ` ```ts {all|1|2|3} ` → 按 → 逐行推进高亮

---

<!-- ====================================================== -->
<!-- 【DEMO 4】Magic Move —— 当前：两个独立代码块                -->
<!-- 👉 现场演示：把两个 ```ts 代码块用 ````md magic-move ... ```` 包住 -->
<!-- ====================================================== -->

# DEMO 4 · Magic Move 代码过渡

当前是两段独立代码，切换时没有任何过渡动画。

```ts
let x = 1
```

```ts
const sum = 1 + 2
```

**现场操作**：把上面两个代码块用 `magic-move` 围栏包起来（外层用四个反引号）：

````md
```` md magic-move
```ts
let x = 1
```

```ts
const sum = 1 + 2
```
````
````

保存后，按 → 就能看到代码元素平滑过渡。

---

<!-- ====================================================== -->
<!-- 【DEMO 5】可运行代码 —— 当前：静态展示                     -->
<!-- 👉 现场演示：把 ```js 改成 ```js {monaco-run}              -->
<!--    Python 同理：```python → ```python {monaco-run}         -->
<!-- ====================================================== -->

# DEMO 5 · 可运行代码

当前只是语法高亮，不能编辑也不能运行。

<div class="grid grid-cols-2 gap-4 text-sm">

<div>

**JavaScript**

```js
function sum(arr) {
  return arr.reduce((a, b) => a + b, 0)
}
console.log(sum([1, 2, 3, 4, 5]))
```

</div>

<div>

**Python**

```python
nums = [3, 1, 4, 1, 5, 9, 2, 6]
print("排序:", sorted(nums))
```

</div>

</div>

**现场操作**：把 ` ```js ` 改成 ` ```js {monaco-run} `，Python 同理。右上角会出现 ▶ Run 按钮，代码可直接编辑运行。

---

<!-- ====================================================== -->
<!-- 【DEMO 6】公式 —— 当前：纯文本里的美元符号                   -->
<!-- 👉 现场演示：                                              -->
<!--   · 把 "E = mc^2" 外面加上 $...$ → 行内公式                -->
<!--   · 把大段公式用 $$...$$ 包起来 → 行间公式                  -->
<!-- ====================================================== -->

# DEMO 6 · LaTeX 公式

当前公式还没有被 `$` 包裹，只是一堆普通文字。

**行内公式候选**：E = mc^2

**行间公式候选**：

\int_{-\infty}^{\infty} e^{-x^2}\,dx = \sqrt{\pi}

**现场操作**：

- 把 `E = mc^2` 两边加上 `$`，变成 `$E = mc^2$` → 行内渲染
- 把积分式上下各加一行 `$$` → 行间渲染

```md
行内： $E = mc^2$

行间：
$$
\int_{-\infty}^{\infty} e^{-x^2}\,dx = \sqrt{\pi}
$$
```

---

<!-- ====================================================== -->
<!-- 【DEMO 7】点击动画 —— 当前：三块内容一起出现                 -->
<!-- 👉 现场演示：                                              -->
<!--   · 给第 2、3 个 div 加 v-click                            -->
<!--   · 或者把三个 <div> 外面包一层 <v-clicks> ... </v-clicks> -->
<!-- ====================================================== -->

# DEMO 7 · 点击动画

当前三块内容页面一加载就全部显示。

<div class="space-y-2 mt-4">

<div class="px-3 py-2 rounded bg-blue-50 dark:bg-blue-900/30 border border-blue-300">
  步骤一：安装依赖
</div>

<div class="px-3 py-2 rounded bg-green-50 dark:bg-green-900/30 border border-green-300">
  步骤二：配置环境
</div>

<div class="px-3 py-2 rounded bg-purple-50 dark:bg-purple-900/30 border border-purple-300">
  步骤三：启动项目
</div>

</div>

**现场操作**（任选其一）：

- 给后两个 `<div>` 加上 `v-click` 指令
- 或者三个 `<div>` 整体用 `<v-clicks>` ... `</v-clicks>` 包起来

保存后，按 → 就能逐步出现。

---

<!-- ====================================================== -->
<!-- 【DEMO 8】点击区间 —— 当前：黄框常驻，不会消失              -->
<!-- 👉 现场演示：给下方 div 加 v-click="[1, 3]"                -->
<!--    第 1 步出现，第 3 步消失                                 -->
<!-- ====================================================== -->

# DEMO 8 · 点击区间 `[start, end]`

当前黄色卡片一直显示。

<div class="mt-4 px-4 py-3 rounded bg-yellow-50 dark:bg-yellow-900/30 border border-yellow-300">
  我希望第 1 步才出现，第 3 步自动消失
</div>

<div class="mt-3 px-4 py-3 rounded bg-gray-100 dark:bg-gray-800 text-sm">
  这是一个对照用的参考框（始终显示）
</div>

**现场操作**：给黄色卡片的 `<div>` 加上属性：

```html
<div v-click="[1, 3]" class="...">
```

按 → 推进：第 1 步出现 → 第 3 步消失。

---
# 👉 可现场给本页加：clicks: 3
---

<script setup>
import { computed } from 'vue'
import { useNav } from '@slidev/client'
const { clicks } = useNav()
const colors = ['#60a5fa', '#34d399', '#f59e0b', '#a78bfa']
const current = computed(() => colors[Math.min(clicks.value, colors.length - 1)])
</script>

# DEMO 9 · useNav 编程式点击

当前下方色块是**静态**的——`clicks` 已经通过 `useNav()` 拿到了，但 style 没用上它。

<div class="grid grid-cols-2 gap-6 text-sm mt-4">

<div>

顶部 `<script setup>` 已准备好：

```ts
const { clicks } = useNav()
const colors = ['#60a5fa', '#34d399', '#f59e0b', '#a78bfa']
const current = computed(
  () => colors[Math.min(clicks.value, colors.length - 1)]
)
```

**现场操作**：把右侧色块的 style 改成：

```html
:style="{
  backgroundColor: current,
  transform: `scale(${1 + clicks * 0.1})`
}"
```

同时在本页 frontmatter 加 `clicks: 3`，按 → 看色块变色放大。

</div>

<div class="flex items-center justify-center">
  <div
    class="w-40 h-40 rounded-2xl flex items-center justify-center text-2xl font-bold text-white"
    :style="{ backgroundColor: '#64748b' }"
  >
    {{ clicks }}
  </div>
</div>

</div>

---

<script setup>
import { ref } from 'vue'
const count = ref(0)
const name = ref('Slidev')
</script>

# DEMO 10 · Vue 交互组件

当前按钮没有绑定事件、输入框没有 v-model——点击/输入都不会有任何反应。

<div class="grid grid-cols-2 gap-6 text-sm mt-4">

<div>

顶部 `<script setup>` 已准备好：

```ts
const count = ref(0)
const name = ref('Slidev')
```

**现场操作**：

1. 给按钮加上 `@click="count++"`
2. 给输入框加上 `v-model="name"`

保存后点击按钮、输入文字，立刻看到响应式更新。

</div>

<div class="flex flex-col gap-3 items-center justify-center">
  <button class="px-5 py-2 bg-blue-500 text-white rounded-lg shadow">👍 已点击 {{ count }} 次</button>
  <input class="border px-2 py-1 rounded text-black bg-white w-40 text-center" placeholder="输入名字" />
  <div>你好，<span class="font-bold text-green-500">{{ name }}</span>！</div>
</div>

</div>

---

<!-- ====================================================== -->
<!-- 【DEMO 11】v-motion —— 当前：静态出现，无动画               -->
<!-- 👉 现场演示：给两个 div 加上 v-motion 及 initial/enter      -->
<!-- ====================================================== -->

# DEMO 11 · v-motion 运动动画

当前两个色块直接显示，没有进入动画。

<div class="grid grid-cols-2 gap-6 text-sm mt-4">

<div>

**现场操作**：给右侧两个 `<div>` 加上：

```html
<div
  v-motion
  :initial="{ opacity: 0, x: -80 }"
  :enter="{
    opacity: 1, x: 0,
    transition: { duration: 700 }
  }"
>
  ← 从左飞入
</div>
```

第二个可改成 `scale: 0.3` + `transition: { type: 'spring' }` 看弹性缩放。

</div>

<div class="flex flex-col gap-3 justify-center">
  <div class="px-4 py-3 rounded-xl bg-blue-50 dark:bg-blue-900/30 border border-blue-300">← 从左飞入</div>
  <div class="px-4 py-3 rounded-xl bg-purple-50 dark:bg-purple-900/30 border border-purple-300">⊕ Spring 弹性缩放</div>
</div>

</div>

---
# 👉 可现场给本页加：clicks: 3
---

# DEMO 12 · v-mark 手绘标注

当前文字中的关键词**没有任何标注**。

<div class="mt-8 text-xl leading-loose">

Slidev 是专为
<span>开发者</span>
设计的工具，

支持
<span>Markdown + Vue 混写</span>，

而传统 PPT 则
<span>效率低下</span>。

</div>

**现场操作**：给三个 `<span>` 分别加上指令：

```html
<span v-mark.highlight.yellow="1">开发者</span>
<span v-mark.underline.orange="2">Markdown + Vue 混写</span>
<span v-mark.strike-through.red="3">效率低下</span>
```

同时给本页 frontmatter 加 `clicks: 3`。按 → 依次出现标注。

---

<!-- ====================================================== -->
<!-- 【DEMO 13】过渡效果 —— 当前：无 transition                  -->
<!-- 👉 现场演示：在本页 frontmatter 加 transition: zoom / fade  -->
<!-- ====================================================== -->

# DEMO 13 · 页面过渡

当前从上一页切到本页是**瞬间切换**（headmatter 的全局 transition 已经去掉了）。

**现场操作**：在本页顶部加 frontmatter：

```yaml
---
transition: zoom
---
```

可选值：

<div class="grid grid-cols-3 gap-3 mt-4 text-sm">
  <div class="px-3 py-2 rounded bg-gray-100 dark:bg-gray-800"><code>slide-left</code></div>
  <div class="px-3 py-2 rounded bg-gray-100 dark:bg-gray-800"><code>slide-up</code></div>
  <div class="px-3 py-2 rounded bg-gray-100 dark:bg-gray-800"><code>fade</code></div>
  <div class="px-3 py-2 rounded bg-gray-100 dark:bg-gray-800"><code>fade-out</code></div>
  <div class="px-3 py-2 rounded bg-gray-100 dark:bg-gray-800"><code>zoom</code></div>
  <div class="px-3 py-2 rounded bg-gray-100 dark:bg-gray-800"><code>none</code></div>
</div>

改好后返回上一页再前进，就能看到切换动画。

---

# DEMO 14 · 结束页

一页一特性，改哪讲哪。

<div class="mt-6 opacity-60 text-sm">
  按 <kbd class="px-2 py-0.5 bg-gray-700 rounded">o</kbd> 看总览 &nbsp;·&nbsp;
  按 <kbd class="px-2 py-0.5 bg-gray-700 rounded">p</kbd> 进演讲者模式 &nbsp;·&nbsp;
  按 <kbd class="px-2 py-0.5 bg-gray-700 rounded">d</kbd> 切暗色
</div>

**最后可以现场演示**：给本页加 frontmatter：

```yaml
---
layout: center
class: text-center
---
```

标题立刻居中，完美收尾。