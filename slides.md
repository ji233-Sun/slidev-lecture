---
theme: default
background: https://images.unsplash.com/photo-1557683316-973673baf926?q=80&w=2029&auto=format&fit=crop
class: text-center
highlighter: shiki
lineNumbers: false
monaco: true
info: |
  ## 用Slidev轻松制作可互动演示
drawings:
  persist: false
transition: slide-left
title: 用Slidev轻松制作可互动演示
addons:
  - slidev-addon-python-runner
---

# 用Slidev轻松制作可互动演示
## 探索下一代基于开发者的幻灯片制作工具

<div class="pt-12">
  <span @click="$slidev.nav.next" class="px-2 py-1 rounded cursor-pointer" hover="bg-white bg-opacity-10">
    开始探索 <carbon:arrow-right class="inline"/>
  </span>
</div>

---
transition: fade-out
---

# 高级功能纵览

Slidev 专为开发者而生，内置了许多强大的功能，让演示不再枯燥。

- 🔢 **完整的数学公式支持** (LaTeX)
- 📝 **代码高亮与展示** (Shiki)
- 💻 **可编辑甚至可运行的代码块** (Monaco)
- 🧩 **任意使用Vue组件提升互动性**
- 🌟 **平滑炫酷的切换效果** (Vue Transition)

<br>
<br>

点击下方或者键盘方向键进行体验。

---
transition: slide-up
---

# 1. 优雅地插入公式 (Math Equations)

Slidev 原生支持 KaTeX，只需使用标准的 LaTeX 语法即可轻松渲染：

这是一个行内的公式：$E = mc^2$

这是一个独立的公式块：
$$
f(x) = \int_{-\infty}^\infty
    \hat f(\xi)\,e^{2 \pi i \xi x}
    \,d\xi
$$

**方程组示例：**
$$
\begin{cases}
a_1x+b_1y+c_1z=d_1 \\
a_2x+b_2y+c_2z=d_2 \\
a_3x+b_3y+c_3z=d_3
\end{cases}
$$

> 告别繁杂的插图截屏，一切尽在代码掌控之中！

---
transition: zoom
---

# 2. 精美的代码展示与幻影过渡动画

基于强大的 Shiki 引擎，不仅支持通过 `{all|1|4|all}` 控制**行高亮**，还能实现**Shiki Magic Move**，即多个代码状态之间不可思议的平滑形态过渡动画。

<div class="grid grid-cols-2 gap-8 text-sm">

<div>

**✨ 行级高亮演示**

```ts {all|1|4|all}
// 请在键盘按下右键，体验逐行高亮
import { ref } from 'vue'

const message = ref('Hello')

console.log(message.value)
```

</div>

<div>

**🎩 Shiki Magic Move**

````md magic-move
```ts
// 之后是 Magic Move 动画阶段
let message = 'Magic Move'
```

```ts
// 元素会自动打乱并平滑过渡到新位置
import { ref } from 'vue'

const message = ref('Magic Move')
```

```ts
// 极其完美的变量演变展示
import { ref } from 'vue'

const message = ref('Magic Move')
message.value = 'Is Awesome!'
```
````

</div>

</div>

> **小贴士**：在这页里随着你的点击，左侧先完成行高亮，之后右侧开始代码形态变形！

---
transition: slide-left
---

# 3. 可编辑且可运行的代码

幻灯片内不仅能展示代码，还能**随时修改**、**直接执行**！

在代码块后缀加上 `{monaco-run}`，就可以体验现场编码。试试修改下方代码并点击右上方出现的 `➔ Run`：

```js {monaco-run}
// 尝试修改下方的输入，或者随便写点逻辑，然后点击右侧的播放按钮运行！
function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

const result = fibonacci(10);
console.log('斐波那契数列第10项是:', result);
```

> **应用场景:** 极其适合用来在技术演讲时实地排错，或实时验证新思路！

---
transition: slide-left
---

# 4. Python 代码实时运行演示

借助 Monaco 引擎与幻灯片插件，像 Python 这样的语言也能获得极佳的**语法高亮**与**内置运行体验**。

<div class="text-sm">

```python {monaco-run}
# 在浏览器内部直接运行代码！尝试破坏语法或者运行获得排序结果。
def quick_sort(arr):
    if len(arr) <= 1: return arr
    
    pivot = arr[len(arr) // 2]
    left = [x for x in arr if x < pivot]
    middle = [x for x in arr if x == pivot]
    right = [x for x in arr if x > pivot]
    
    return quick_sort(left) + middle + quick_sort(right)

print("快速排序结果:", quick_sort([34, 12, 1, 99, 45, 12, 8]))
```

</div>

> **应用场景:** 无论是数据科学还是后端开发演讲，都能让观众代入到你的现场 Debug （排错和补全）思路里！

---
transition: slide-up
---

<script setup>
import { ref } from 'vue'
const likes = ref(0)
const name = ref('Slidev 专家')
</script>

# 5. 强大的可互动前端组件 (Vue)

Slidev 的每一页背后都是一个真正的 **Vue 组件**。这赋予了演示文档无限的可能与交互性！

<div class="grid grid-cols-2 gap-4 mt-8">
  <div class="border border-gray-400 p-4 rounded bg-gray-50 dark:bg-gray-800 text-center flex flex-col justify-center items-center h-40">
    <p class="mb-4">实时交互的状态变更：</p>
    <!-- 引入原生Vue逻辑 -->
    <button class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded shadow transition-all active:scale-95" @click="likes++">
      👍 喜欢 {{ likes }}
    </button>
  </div>
  
  <div class="border border-gray-400 p-4 rounded bg-gray-50 dark:bg-gray-800 text-center flex flex-col justify-center items-center h-40">
    <p class="mb-4">响应式输入反馈：</p>
    <input v-model="name" class="border p-1 rounded text-black bg-white focus:ring-2 focus:outline-none mb-2 w-32 text-center" />
    <p v-if="name" class="text-green-500 font-bold">你好，{{ name }}！</p>
  </div>
</div>

---
transition: slide-left
---

# 6. 可拓展（折叠/展开）与可拖拽对象

无论是由长变短的**可拓展对象**，还是允许受众随心自由拖曳的**移动对象**，给演示都带来了无穷的灵活性。

<div class="grid grid-cols-2 gap-8 mt-8">

<div>
📦 可拓展 (Expandable) 数据展示

<details class="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg cursor-pointer mt-4 shadow-sm">
  <summary class="font-bold text-blue-500 hover:text-blue-600 transition-colors outline-none">
    点击展开：Slidev 核心对象数据结构
  </summary>
  <div class="mt-4 text-xs bg-white dark:bg-gray-900 p-3 rounded overflow-x-auto text-left shadow-inner border border-gray-200 dark:border-gray-700">
  <pre><code>{
  "project": "Slidev",
  "version": "^52.14.2",
  "tags": [
    "Markdown",
    "Vue Components",
    "Monaco",
    "Interactivity"
  ],
  "engines": {
    "node": ">=18.0.0"
  },
  "isAwesome": true
}</code></pre>
  </div>
</details>

</div>

<div>
🖐️ 自由的可拖拽 (Draggable) 对象

<div v-drag="[478,154,439,183]" class="mt-4 p-6 bg-green-50 dark:bg-green-900/30 border-2 border-green-400 dark:border-green-600 rounded-xl text-center cursor-move text-green-800 dark:text-green-100 shadow-lg transform transition-transform hover:scale-105 duration-300">
  <div class="text-4xl mb-3">🎈</div>
  这是一个加入了 <code>v-drag</code> 指令的组件实例。<br><br>
  <strong>试试在播放页面中，将我用鼠标拖拽到任意位置！</strong>
</div>

</div>

</div>

> **小贴士**：这类复杂的内嵌和可拓展对象逻辑能让你在发表演讲报告时刻游刃有余地控制展示细节。

---
layout: section
transition: slide-up
---

# 第二部分
## Slidev 基础使用方法

从 0 到 1，先掌握最小可用流程。

---
transition: slide-left
---

# 7. 本节你将掌握什么

<v-clicks>

- 如何创建并启动一个 Slidev 项目
- `slides.md` 的核心结构：Headmatter / Frontmatter / 分隔符
- 常见语法：代码块、讲者备注、布局配置
- 演示时最常用的 UI 与快捷键

</v-clicks>

> 目标：10 分钟内写出一份可演讲、可导出、可部署的基础幻灯片。

---
transition: slide-left
---

# 8. 创建并运行项目

根据官方 Getting Started，建议本地环境如下：

- Node.js `>= 20.12.0`
- `pnpm`（推荐）

```bash
# 全局安装 pnpm（如果还没有）
npm i -g pnpm

# 创建项目
pnpm create slidev

# 进入目录并启动
pnpm install
pnpm dev
```

常用命令：

- `pnpm dev`：本地预览（通常会打开 `http://localhost:3030`）
- `pnpm build`：构建静态站点
- `pnpm export`：导出 PDF / PPTX / PNG
- `pnpm slidev --help`：查看 CLI 帮助

---
transition: slide-left
---

# 9. 理解 slides.md 的结构

```md
---
theme: default
title: 我的第一份 Slidev
---

# Slide 1

这是第一页

---
layout: center
class: text-center
---

# Slide 2
```

要点：

- 第一段 YAML 叫 **Headmatter**，作用于整个 deck
- 后续每页开头 YAML 叫 **Frontmatter**，作用于单页
- `---`（独占一行）用于分隔幻灯片

---
transition: slide-left
---