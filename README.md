# Charlie Brown ($CHARLIE) Website

A modern, cartoon-themed website for the Charlie Brown memecoin community takeover. Built with React, Vite, and Tailwind CSS.

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository (if you haven't already):
   ```bash
   git clone <repository-url>
   cd charlie-brown-coin
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173`.

## 🛠 Project Structure

```
/src
├── /components
│   ├── Hero.jsx        # Main landing section with image and CTA
│   ├── About.jsx       # Project description and story
│   ├── TokenInfo.jsx   # Contract address and copy functionality
│   ├── Community.jsx   # Social media links
│   └── Footer.jsx      # Copyright and disclaimer
├── /assets             # Static assets
├── App.jsx             # Main application component
├── main.jsx            # Entry point
└── index.css           # Global styles and Tailwind imports
```

## 🌍 Deployment to Vercel

1.  **Push to GitHub:**
    -   Initialize a git repository: `git init`
    -   Add files: `git add .`
    -   Commit: `git commit -m "Initial commit"`
    -   Create a new repo on GitHub and push your code.

2.  **Deploy on Vercel:**
    -   Go to [Vercel](https://vercel.com) and sign up/login.
    -   Click **"Add New..."** -> **"Project"**.
    -   Import your GitHub repository.
    -   Vercel will automatically detect that this is a **Vite** project.
    -   Click **"Deploy"**.

That's it! Your website will be live in less than a minute.

## 🎨 Customization

-   **Colors:** Edit `tailwind.config.js` to change the `charlie-yellow`, `charlie-red`, etc.
-   **Content:** Edit the components in `src/components/` to update text, links, or images.
