<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>ReactJS Universe by coderafroj</title>
  <style>
    /* Reset default styles */
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    /* Global styles */
    body {
      font-family: 'Poppins', sans-serif;
      background: linear-gradient(135deg, #61DAFB 0%, #1a1a1a 100%);
      color: #fff;
      min-height: 100vh;
      line-height: 1.6;
      overflow-x: hidden;
    }

    /* Header */
    header {
      text-align: center;
      padding: 2rem;
      background: rgba(0, 0, 0, 0.5);
      backdrop-filter: blur(10px);
      border-bottom: 2px solid #61DAFB;
    }

    header img {
      width: 120px;
      border-radius: 50%;
      border: 4px solid #61DAFB;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
      margin-bottom: 1rem;
    }

    header h1 {
      font-size: 3rem;
      color: #61DAFB;
      text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
    }

    header p {
      font-size: 1.2rem;
      color: #e0e0e0;
    }

    /* Navigation */
    nav {
      display: flex;
      justify-content: center;
      gap: 1rem;
      padding: 1rem;
      background: rgba(255, 255, 255, 0.1);
    }

    nav a {
      color: #fff;
      text-decoration: none;
      font-weight: 500;
      padding: 0.5rem 1rem;
      border-radius: 5px;
      transition: background 0.3s ease;
    }

    nav a:hover {
      background: #61DAFB;
      color: #1a1a1a;
    }

    /* Main content */
    .container {
      max-width: 1000px;
      margin: 2rem auto;
      padding: 0 1rem;
    }

    .section {
      background: rgba(255, 255, 255, 0.1);
      padding: 2rem;
      border-radius: 10px;
      margin-bottom: 2rem;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
    }

    .section h2 {
      font-size: 2rem;
      color: #61DAFB;
      margin-bottom: 1rem;
    }

    .section p, .section li {
      font-size: 1.1rem;
      color: #e0e0e0;
    }

    .section ul {
      list-style: none;
      padding-left: 1rem;
    }

    .section ul li::before {
      content: "🚀";
      margin-right: 0.5rem;
    }

    /* Code block */
    .code-block {
      background: #1a1a1a;
      padding: 1rem;
      border-radius: 8px;
      overflow-x: auto;
      margin: 1rem 0;
    }

    .code-block code {
      color: #61DAFB;
      font-family: 'Courier New', monospace;
    }

    /* Button */
    .btn {
      display: inline-block;
      padding: 0.8rem 1.5rem;
      background: #61DAFB;
      color: #1a1a1a;
      text-decoration: none;
      border-radius: 5px;
      font-weight: 600;
      transition: transform 0.2s ease, box-shadow 0.2s ease;
    }

    .btn:hover {
      transform: scale(1.05);
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.5);
    }

    /* Footer */
    footer {
      text-align: center;
      padding: 2rem;
      background: rgba(0, 0, 0, 0.5);
      border-top: 2px solid #61DAFB;
    }

    footer p {
      font-size: 1rem;
      color: #e0e0e0;
    }

    footer a {
      color: #61DAFB;
      text-decoration: none;
    }

    footer a:hover {
      text-decoration: underline;
    }

    /* Responsive design */
    @media (max-width: 768px) {
      header h1 {
        font-size: 2rem;
      }

      .section h2 {
        font-size: 1.5rem;
      }

      nav {
        flex-direction: column;
        gap: 0.5rem;
      }
    }
  </style>
  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap" rel="stylesheet">
</head>
<body>
  <!-- Header -->
  <header>
    <img src="https://avatars.githubusercontent.com/u/your-github-id?v=4" alt="coderafroj">
    <h1>ReactJS Universe</h1>
    <p>Built with ❤️ by <a href="https://github.com/coderafroj">coderafroj</a></p>
  </header>

  <!-- Navigation -->
  <nav>
    <a href="#about">About</a>
    <a href="#features">Features</a>
    <a href="#setup">Setup</a>
    <a href="#usage">Usage</a>
    <a href="#contact">Contact</a>
  </nav>

  <!-- Main content -->
  <div class="container">
    <!-- About Section -->
    <div class="section" id="about">
      <h2>🌟 About the Project</h2>
      <p>
        Welcome to <strong>ReactJS Universe</strong>, a showcase of cutting-edge React projects by <strong>coderafroj</strong>. This repository is packed with advanced React concepts, reusable components, and stunning UI designs inspired by modern HTML/CSS techniques.
      </p>
      <p>
        From custom renderers to full-stack apps, this is your playground to learn, build, and innovate!
      </p>
    </div>

    <!-- Features Section -->
    <div class="section" id="features">
      <h2>🔥 Key Features</h2>
      <ul>
        <li>Custom DOM renderer mimicking React's core logic.</li>
        <li>Reusable components for rapid development.</li>
        <li>State management with Hooks and Redux Toolkit.</li>
        <li>Dynamic routing with React Router v6.</li>
        <li>Modern UI with CSS-inspired styling.</li>
      </ul>
    </div>

    <!-- Setup Section -->
    <div class="section" id="setup">
      <h2>🛠️ Getting Started</h2>
      <p>Follow these steps to run the project locally:</p>
      <ol>
        <li>Clone the repo: <code>git clone https://github.com/coderafroj/reactjs.git</code></li>
        <li>Install dependencies: <code>npm install</code></li>
        <li>Run the app: <code>npm start</code></li>
      </ol>
      <a href="https://github.com/coderafroj/reactjs" class="btn">Explore on GitHub</a>
    </div>

    <!-- Usage Section -->
    <div class="section" id="usage">
      <h2>🚀 Usage Example</h2>
      <p>Check out my custom renderer in action:</p>
      <div class="code-block">
        <code>
function customRender(reactElement, main) {<br>
  const domElement = document.createElement(reactElement.type);<br>
  domElement.innerHTML = reactElement.children;<br>
  for (const prop in reactElement.props) {<br>
    domElement.setAttribute(prop, reactElement.props[prop]);<br>
  }<br>
  main.appendChild(domElement);<br>
}<br><br>
const reactElement = {<br>
  type: "a",<br>
  props: {<br>
    href: "https://google.com",<br>
    target: "_blank"<br>
  },<br>
  children: "Click me to visit Google"<br>
};<br><br>
const main = document.querySelector("#root");<br>
customRender(reactElement, main);
        </code>
      </div>
    </div>
  </div>

  <!-- Footer -->
  <footer id="contact">
    <p>
      Made with ❤️ by <a href="https://github.com/coderafroj">coderafroj</a> | 
      <a href="mailto:your-email@example.com">Contact Me</a>
    </p>
    <p>Star ⭐ this repo if you love it!</p>
  </footer>
</body>
</html>