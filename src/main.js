import "./styles/styles.css";

const games = [
  {
    title: "Semi-trailer Parking",
    titleZh: "半挂车倒车入库",
    status: "Playable",
    date: "2026",
    href: "https://semi-trailer-parking.tankxu.com/",
    repoName: "semi-trailer-parking-simulator",
    summary:
      "2D 半挂车停车模拟器，带路径预测和铰接车辆物理，适合反复练习倒车角度。",
    tags: ["2D", "Physics", "Parking"],
    accent: "#4BC3CB",
    scene: "parking",
  },
  {
    title: "Excavator Ball Digging",
    titleZh: "挖掘机挖球",
    status: "In development",
    date: "2026",
    href: "https://game.tankxu.com/excavator/",
    repoName: "excavator-sim",
    summary:
      "网页 3D 限时挖球游戏，目标是用挖掘机操作感、沙土物理和计时挑战做出短局乐趣。",
    tags: ["3D", "Three.js", "Rapier"],
    accent: "#DE9D1F",
    scene: "excavator",
  },
];

function previewMarkup(scene) {
  if (scene === "parking") {
    return `
      <div class="parking-scene" aria-hidden="true">
        <span class="parking-road"></span>
        <span class="parking-grid parking-grid-a"></span>
        <span class="parking-grid parking-grid-b"></span>
        <span class="truck cab"></span>
        <span class="truck trailer"></span>
        <span class="path-line"></span>
      </div>
    `;
  }

  return `
    <div class="dig-scene" aria-hidden="true">
      <span class="sun"></span>
      <span class="sand"></span>
      <span class="ball ball-a"></span>
      <span class="ball ball-b"></span>
      <span class="boom"></span>
      <span class="arm"></span>
      <span class="bucket"></span>
      <span class="body"></span>
      <span class="track"></span>
    </div>
  `;
}

function gameCard(game) {
  return `
    <article class="game-card" style="--accent: ${game.accent}">
      <a class="preview-link" href="${game.href}" aria-label="打开 ${game.titleZh}">
        ${previewMarkup(game.scene)}
      </a>
      <div class="game-content">
        <div class="game-heading">
          <div>
            <p class="kicker">${game.status}</p>
            <h2><a href="${game.href}">${game.title}</a></h2>
          </div>
          <time>${game.date}</time>
        </div>
        <p class="zh-title">${game.titleZh}</p>
        <p class="summary">${game.summary}</p>
        <div class="meta-row">
          <div class="tags">
            ${game.tags.map((tag) => `<span>${tag}</span>`).join("")}
          </div>
          <a class="repo-link" href="../${game.repoName}/">Project</a>
        </div>
      </div>
    </article>
  `;
}

document.querySelector("#app").innerHTML = `
  <div class="page-shell">
    <header class="hero">
      <nav class="topbar" aria-label="Site">
        <a class="brand" href="/" aria-label="奇思妙坦 Games">
          <img class="brand-title" src="/web-title.svg" alt="奇思妙坦" />
          <span class="brand-divider"></span>
          <span class="brand-games">GAMES</span>
        </a>
      </nav>

      <section class="intro">
        <div class="intro-copy">
          <h1>Games made for tiny moments of play.</h1>
          <p class="lead">
            这里会放我做的网页游戏和交互实验。先从半挂车停车、挖掘机挖球开始，
            慢慢把那些需要手感、物理和一点点幽默感的想法都收进来。
          </p>
        </div>
        <div class="hero-game-mark" aria-hidden="true">
          <span class="level-line"></span>
          <span class="playfield"></span>
          <span class="finish-pad"></span>
          <span class="score-dot score-a"></span>
          <span class="score-dot score-b"></span>
          <span class="score-dot score-c"></span>
          <span class="mini-rig rig-body"></span>
          <span class="mini-rig rig-arm"></span>
          <span class="mini-rig rig-bucket"></span>
        </div>
      </section>
    </header>

    <section class="section-title" aria-label="Game list title">
      <span></span>
      <p>Current Games</p>
    </section>

    <section class="game-list" aria-label="Games">
      ${games.map(gameCard).join("")}
    </section>

    <footer>
      <p>Product Designer / Creator / Game tinkerer</p>
      <a href="https://tankxu.com">Back to tankxu.com</a>
    </footer>
  </div>
`;
