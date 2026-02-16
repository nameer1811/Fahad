# Sheikh Fahad - Personal Website

A modern, high-performance personal portfolio website built with React and Tailwind CSS.

**Live Site:** [sheikhfahad.me](http://sheikhfahad.me)

## Tech Stack

- **Frontend Framework**: [React.js](https://reactjs.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [React Icons](https://react-icons.github.io/react-icons/)
- **Contact Form**: [EmailJS](https://www.emailjs.com/)
- **Background**: Custom HTML5 Canvas (Matrix Rain Effect)
- **Deployment**: [GitHub Pages](https://pages.github.com/)

## Key Features

- **Matrix Landing**: A custom-built Matrix rain animation that welcomes visitors.
- **Dynamic Projects**: A glassmorphic grid showcasing data engineering and software projects.
- **Seamless Navigation**: A fixed, translucent top-nav with scroll-aware social icons.
- **Responsive Design**: Fully optimized for mobile, tablet, and desktop viewing.
- **Secure Handling**: Externalized service credentials using environment variables.

## Local Development

1. Clone the repository:
   ```bash
   git clone https://github.com/nameer1811/Fahad.git
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file with your EmailJS credentials:
   ```env
   REACT_APP_EMAILJS_SERVICE_ID=your_service_id
   REACT_APP_EMAILJS_TEMPLATE_ID=your_template_id
   REACT_APP_EMAILJS_PUBLIC_KEY=your_public_key
   ```
4. Start the development server:
   ```bash
   npm start
   ```
