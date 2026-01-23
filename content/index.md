---
hide:
  - footer
  - toc
---

<div id="hero">
  <canvas id="gfx-canvas"></canvas>
</div>

<script type="module" src="/javascripts/hero.js"></script>
<link rel="stylesheet" href="/stylesheets/hero.css">

<div class="hero-content">
  <h1 class="hero-title">
    Deep dives into game engines, graphics, and systems
  </h1>

  <p class="hero-subtitle">
    Practical explorations of rendering, tooling, and engine architecture.<br>
    Written by someone who actually builds these things.
  </p>

  <div class="avatar">
    <img src="/assets/me.png" alt="Headshot of Adam Foflonker">
    <div class="caption">Adam Foflonker · Game Engine Developer</div>
  </div>
</div>

<!-- TODO: Combine avatar.css into hero.css -->
<link rel="stylesheet" href="/stylesheets/avatar.css">

## What I write about

- **Rendering & Graphics**  
  Shaders, pipelines, GPU architecture, WebGPU, Vulkan, and why things flicker.

- **Game Engine Architecture**  
  ECS design, asset pipelines, tooling, hot-reload, and mistakes you only make once.

- **Systems & Low-Level Work**  
  Memory, performance, build systems, interop, and debugging the un-debuggable.

<!-- TODO: Rewrite the content here obviously... -->
## Featured writing

- **[Building a Shader-Driven Hero Section Without Killing Performance](markdown/get-started.md)**  
  Lessons learned embedding real-time graphics into a static site.

- **[Why WebGPU Changes the Way We Think About the Web](markdown/markdown.md)**  
  Practical differences from WebGL, without the marketing fog.

- **[Engine Architecture Notes: What Scales and What Doesn’t](markdown/markdown.md)**  
  Hard-won lessons from real engine codebases.

---

<p style="opacity: 0.7; font-size: 0.9rem;">
This site is a living notebook. Expect experiments, revisions, and strong opinions backed by code.
</p>
