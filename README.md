# Code Craft It Solution

Code Craft It Solution is a premium software agency website built with modern web technologies. This project showcases the company's services, team, portfolio, and career opportunities, featuring a sleek, responsive design and seamless user experience.

![Project Banner](public/og-image.png)

## 🚀 Features

*   **Modern & Responsive Design**: Built with refined UI components, glassmorphism effects, and smooth animations using Framer Motion.
*   **Dynamic Career Portal**: Users can browse job openings and apply directly through the website.
*   **Email Integration**:
    *   Direct email via EmailJS for general inquiries.
    *   Robust application handling with auto-replies using EmailJS.
*   **Job Application Form**: Detailed form validating user input, handling file uploads (resumes), and supporting international phone formats.
*   **Service Showcases**: Dedicated sections for Web Development, Mobile Apps, SEO, and more.
*   **Optimized Performance**: Fast loading times and SEO best practices (meta tags, open graph support).

## 🛠️ Tech Stack

*   **Frontend**: React (Vite), TypeScript
*   **Styling**: Tailwind CSS, Shadcn UI
*   **Animations**: Framer Motion
*   **Email Service**: EmailJS
*   **Backend Logic**: Node.js/Express (for advanced email handling and future modularity)
*   **Icons**: Lucide React

## 📂 Project Structure

```
├── public/              # Static assets (images, icons)
├── src/
│   ├── components/      # Reusable UI components (Header, Footer, Team, etc.)
│   │   ├── ui/          # Shadcn UI primitives
│   ├── pages/           # Main page views (Jobs, Contact, Privacy, etc.)
│   ├── assets/          # Project-specific images and styles
│   ├── main.tsx         # Entry point
│   └── index.css        # Global styles (Tailwind)
├── backend/             # Node.js backend for extended functionality
└── index.html           # Main HTML template
```

## ⚡ Getting Started

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/your-username/Final-website.git
    cd Final-website
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Configure Environment Variables:**
    Create a `.env` file in the root directory and add your EmailJS credentials:
    ```env
    VITE_EMAILJS_SERVICE_ID=your_service_id
    VITE_EMAILJS_TEMPLATE_ID=your_template_id
    VITE_EMAILJS_AUTO_REPLY_TEMPLATE_ID=your_auto_reply_template_id
    VITE_EMAILJS_PUBLIC_KEY=your_public_key
    ```

4.  **Run the development server:**
    ```bash
    npm run dev
    ```

## 🚀 Deployment

The project is optimized for deployment on platforms like Vercel, Netlify, or GitHub Pages.

To build for production:
```bash
npm run build
```

## 📄 License

This project is proprietary to **Code Craft It Solution**. All rights reserved.

---

### Contact Us

*   **Website**: [Code Craft It Solution](https://codecraftpakistan.github.io/Final-website/)
*   **Email**: codecraftitsol@gmail.com
*   **LinkedIn**: [Code Craft It Solution](https://www.linkedin.com/company/code-craft-it-solution)
