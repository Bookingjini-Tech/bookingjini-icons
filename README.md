# BookingJini Icons

![BookingJini Icons](https://github.com/user-attachments/assets/56773076-97ee-48f8-b041-9a00042dd123)

![GitHub package.json version](https://img.shields.io/github/package-json/v/ramanujamgond/bookingjini-icons)
![GitHub last commit](https://img.shields.io/github/last-commit/ramanujamgond/bookingjini-icons)
![GitHub issues](https://img.shields.io/github/issues/ramanujamgond/bookingjini-icons)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)

## 🚀 Overview

The **BookingJini Icons** project is a structured repository for converting **SVG icons to web fonts** using `fantasticon`, `svgo`, and `oslllo-svg-fixer`. This project follows an automated workflow to ensure smooth processing, optimization, and publishing of the icons to npm.

### 📌 Note

### 🚀 **Why We Built This Icon Library**

At **BookingJini Labs**, we needed a **scalable and maintainable icon library** to streamline our design and development workflow. In the past, we attempted to build an **open-source icon library**, even listing it in **Google Summer of Code (GSoC)** to encourage community contributions. However, managing **unstructured changes** became overwhelming, leading to inconsistencies, and the project was eventually **discontinued**.

With the need resurfacing, we decided to **rebuild the library with automation at its core**—eliminating manual steps like SVG optimization and font generation. This time, instead of keeping it internal, we **published it as an npm package**, making it publicly accessible for others to **use, enhance, and contribute**, while ensuring it remains structured and maintainable. 🚀

### 🚨 **The Challenges with the Old Workflow**

In the previous version, the process of maintaining icons involved **several manual steps**:

1️⃣ **Designers provided SVGs.**  
2️⃣ **We manually converted them into web fonts using IcoMoon.**  
3️⃣ **The generated CSS was manually uploaded to a CDN** (e.g., [jsdelivr](https://cdn.jsdelivr.net/)).  
4️⃣ **Every icon update required repeating this tedious process.**

This approach was inefficient, time-consuming, and prone to errors.

### 🚀 **How We Automated Everything**

To eliminate **manual intervention**, we completely revamped the workflow:

✅ **Automated font generation** using [`fantasticon`](https://github.com/tancredi/fantasticon). (Due to compatibility issues, we use `fantasticon@1.2.3`, which works seamlessly with `Node.js 20.13.1`.)  
✅ **Automated SVG optimization** using [`oslllo-svg-fixer`](https://www.npmjs.com/package/oslllo-svg-fixer) and [`svgo`](https://github.com/svg/svgo) to **fix and compress** icons.  
✅ **Fully integrated build process** that handles everything from SVG processing to publishing the package on npm.

We are **continuously improving** this package to make it more **efficient, scalable, and developer-friendly**. **Your feedback, contributions, and suggestions are always welcome!** 🚀

## 📂 Project Setup

### **📁 Folder Structure**

```bash
bookingjini-icons/
├── font-dist/      # 🎨 Contains the final generated font files
├── icons-dist/     # 🛠 Contains the fixed and optimized SVG icons
├── icons-source/   # 📝 Contains the raw SVG icons before processing
├── .github/        # 🔄 Contains the GitHub Actions workflow for publishing
├── .gitignore      # ❌ Ignores node_modules and other unnecessary files
├── package.json    # 📜 Contains the project configuration and scripts
├── svgo.config.js  # ⚙️ Configuration for SVG optimization
└── README.md       # 📖 Documentation
```

## 💾 Installation

Ensure you have **Node.js** installed.

### **1️⃣ Clone the Repository**

```sh
git clone https://github.com/your-repository/bookingjini-icons.git
cd bookingjini-icons
```

### **2️⃣ Install Dependencies**

```sh
npm install
```

## 🛠 Tools Used

To process and convert SVG icons into a web font, we use the following npm tools:

```sh
npm install -g fantasticon@1.2.3  # 📌 Specific version to avoid punycode error
npm i -D svgo                     # 🎨 Optimizes SVG files
npm install oslllo-svg-fixer       # 🛠 Fixes SVG formatting issues
```

## 📜 Project Configuration

### **package.json**

The `package.json` file defines project metadata and scripts. Below is a breakdown of the **scripts** section:

```json
{
  "name": "bookingjini-icons",
  "version": "1.0.0",
  "main": "index.js",
  "scripts": {
    "build": "npm run icons:fix && npm run icons:compress && npm run icons:font",
    "icons:fix": "node node_modules/oslllo-svg-fixer/src/cli.js -s=icons-source -d=icons-dist",
    "icons:compress": "svgo icons-dist -o font-dist --config=svgo.config.js",
    "icons:font": "fantasticon icons-dist -o font-dist --name bookingjini-icons --font-height 100",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "description": "",
  "dependencies": {
    "oslllo-svg-fixer": "^5.0.0"
  },
  "devDependencies": {
    "svgo": "^3.3.2",
    "fantasticon": "^2.0.0"
  }
}
```

### **📝 Explanation of Scripts:**

- **`build`**: 🏗 Runs the complete build process by executing `icons:fix`, `icons:compress`, and `icons:font` sequentially.
- **`icons:fix`**: 🔧 Uses `oslllo-svg-fixer` to **clean and standardize** raw SVGs from `icons-source/` and save them in `icons-dist/`.
- **`icons:compress`**: 🎨 Uses `svgo` to **optimize** the cleaned SVG files in `icons-dist/` and outputs them into `font-dist/` using `svgo.config.js`.
- **`icons:font`**: 🏗 Uses `fantasticon` to **convert optimized SVG files** into web font files stored in `font-dist/`.
- **`test`**: 🛠 Placeholder test script that currently outputs an error.

### **⚙️ SVGO Configuration (svgo.config.js)**

This configuration optimizes SVG files by removing unnecessary metadata and formatting.

```javascript
module.exports = {
  multipass: true, // 🔄 Runs multiple passes to optimize SVG further
  plugins: [
    { name: "removeViewBox", active: false }, // 🖼 Keeps the viewBox attribute (important for scaling)
    { name: "removeDimensions", active: true }, // 📏 Removes width/height attributes to make the SVG responsive
    { name: "convertColors", params: { currentColor: true } }, // 🎨 Converts colors to `currentColor` for theme-based coloring
    { name: "cleanupNumericValues", params: { floatPrecision: 2 } }, // 🔢 Reduces the number of decimal places in numeric values
  ],
};
```

## 🚀 Workflow & Publishing

This repository includes an **automated workflow** inside `.github/workflows/` that handles:

- 🛠 **Processing & optimizing SVG icons**
- 🎨 **Generating web fonts using `fantasticon`**
- 📦 **Publishing to npm**

## 🔧 Usage

Once published, you can install and use the icon font in any project:

```sh
npm install bookingjini-icons
```

Then, in your CSS:

```css
import "bookingjini-icons/dist/fonts/bookingjini-icons.css";
```

## 🛠 Troubleshooting

- ❌ If **punycode errors** occur, ensure you are using `fantasticon@1.2.3`.
- ❌ Ensure `icons-source/` contains **valid** SVG files before running `npm run build`.
- ❌ If publishing issues occur, check **GitHub Actions logs** in `.github/workflows/`.

### 📚 Useful Resources

- [Create an Icon Web Font for Your Design System](https://dev.to/brunnerlivio/create-an-icon-web-font-for-your-design-system-1ei6)
- [Setting Up SVG Fixer (oslllo-svg-fixer) in Frontend Project](https://medium.com/techvraksh/setting-up-svg-fixer-oslllo-svg-fixer-in-frontend-project-8f229ea81bc5)
- [Fantasticon Documentation](https://github.com/tancredi/fantasticon#readme)
- [SVG to Font Icons Using NodeJS (YouTube)](https://www.youtube.com/watch?v=W1UPR9u5hu8)
- [Solving the Punycode Module Deprecation Issue in Node.js](https://dev.to/asim_khan_cbe65e41bcbbc65/solving-the-punycode-module-is-deprecated-issue-in-nodejs-2e59)

## 👥 Contributors

- **[Ramanujam Gond](https://github.com/ramanujamgond)**

## 📜 License

[MIT License](https://opensource.org/licenses/MIT)
