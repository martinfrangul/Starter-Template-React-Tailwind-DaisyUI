# React + Vite + TailwindCSS + DaisyUI Starter Template

This is a **starter template** for React projects using [Vite](https://vitejs.dev/), preconfigured with [TailwindCSS](https://tailwindcss.com/) and [DaisyUI](https://daisyui.com/). This template is designed to help you quickly set up a modern, fast, and styled React application.

## Features

- ⚡️ **Vite** as the bundler, providing a fast and lightweight development experience.
- 🎨 **TailwindCSS** for utility-first, efficient styling.
- 🌼 **DaisyUI** as a Tailwind plugin for pre-styled and customizable components.
- 🔥 Ready-to-use configuration to jumpstart your development.

## Requirements

- **Node.js**: >= 14.x
- **npm**: >= 6.x or **yarn**: >= 1.22.x

## Getting Started

Follow these steps to use this template in your project:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/your-template-repo.git
   cd your-template-repo
   ```

2. **Install dependencies:**

    Using npm:
    
    ```bash
    npm install
    ```
    
    Or using yarn:
    
    ```bash
    yarn install
    ```

3. **Start the development server:**

    Using npm:
    
    ```bash
    npm run dev
    ```
    
    Or using yarn:
    
    ```bash
    yarn dev
    ```

4. **Build for production:**

    Using npm:
    
    ```bash
    npm run build
    ```
    
    Or using yarn:
    
    ```bash
    yarn build
    ```

5. **Preview the production build locally:**

    Using npm:
    
    ```bash
    npm run serve
    ```
    
    Or using yarn:
    
    ```bash
    yarn serve
    ```

## Customization

- **TailwindCSS Configuration:** Modify the `tailwind.config.js` file to customize TailwindCSS according to your project needs.

    "I added a color template to customize your own color classes, which is commented out in the `tailwind.config.js` file."
    
- **DaisyUI Configuration:** Customize DaisyUI components or theme settings in the `daisyui.config.js` file.

    The dark mode of DaisyUI is disabled by default. To enable it, change this
    ```bash
    daisyui: {
      darkTheme: false,
    },
    ```
    
    to `true`.

## License

This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for more information.