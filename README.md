# qtsnac Web Village 🎮🌐

**A dynamic, modern landing page built for the Twitch streamer & Marvel Rivals content creator – qtsnac.**  
This project serves as a digital hub for fans, providing real-time Twitch status, setup information, social media connections, and much more.

---

## 🚀 Live Demo

👉 [Visit the live site](https://qtsnac.online/)  

---

## 📌 Project Overview

**qtsnac Web Village** is a responsive single-page application designed to showcase the streamer's personality, content, and gaming presence across platforms. Developed with a lightweight stack for fast performance and scalable features.

### 🧩 Current Key Features

- 🎯 **Single Landing Page** – Focused, minimal, and highly engaging.
- 🔴 **LIVE NOW Button** – Appears dynamically when qtsnac is live; redirects to the Twitch stream.
- 🎥 **Twitch Goals Display** – Displays real-time labels for subscriber, follower, or custom goals.
- 🧍‍♀️ **Streamer Bio Section** – Includes a short summary and games currently streamed.
- 🛠️ **Setup & Gear Showcase** – Full list of PC components and peripherals.
- 📜 **Twitch Chat Rules** – Clearly listed community rules for viewers.
- 🤝 **Partners** – Logos or names of affiliate/partner brands.
- 📲 **Social Media Icons** – Redirects to her Instagram, Twitter, YouTube, Discord, etc.
- 🎨 **Built With**:
  - **Netlify** – Deployment & hosting
  - **Vite** – Fast development environment
  - **TypeScript** – Type-safe scripting
  - **HTML/CSS/JavaScript** – Web foundation

---

## 🖥️ Tech Stack

| Category        | Technology        |
|----------------|-------------------|
| Hosting         | Netlify           |
| Build Tool      | Vite              |
| Languages       | TypeScript, HTML, CSS, JavaScript |
| Version Control | Git + GitHub      |
| Deployment      | Continuous (via Netlify CI/CD) |

---

## 📋 Twitch Rules & Partner Section

- Be respectful to everyone.
- No spam or self-promotion.
- Keep it family friendly.
- Keep it chill and fun. 😎

### 🤝 Partners
- Marvel Rivals Community Creators
- Gaming Gear Brands (to be added)

---

## 🔧 Setup Instructions


# Clone the repository
- git clone https://github.com/aleksandrostosunidis/qtsnacwebpage.git

# Navigate into the project directory
- cd qtsnacwebpage-main

# Install dependencies
- npm install

# Run the development server
- npm run dev

# Build for production
- npm run build
## Roadmap

## 📁 File Structure Overview

```bash
qtsnac-web-village/
├── src/                                # Main source directory
├── supabase/                           # Backend or API logic (Supabase Functions)
│   └── functions/
│       └── twitch-status/
│           └── index.ts                # Twitch LIVE status logic
├── .env.example                        # Environment variable example file
├── .gitignore                          # Git ignored files
├── README.md                           # Project documentation
├── index.html                          # HTML template
├── eslint.config.js                    # ESLint configuration
├── package.json                        # Project metadata and scripts
├── package-lock.json                   # Exact dependency tree
├── postcss.config.js                   # PostCSS settings
├── tailwind.config.js                  # Tailwind CSS configuration
├── tsconfig.json                       # Global TypeScript configuration
├── tsconfig.app.json                   # App-specific TS config
├── tsconfig.node.json                  # Node-specific TS config
├── vite.config.ts                      # Vite configuration
```
## Related

- [Twitch Developer Docs](https://dev.twitch.tv/docs)
- [Supabase Functions](https://supabase.com/docs/guides/functions)
- [Netlify Docs](https://docs.netlify.com/)


## 📡 API Reference

---

### 🎥 `GET /api/twitch-status`

Checks the current live status of the streamer on Twitch.

#### ➤ Endpoint (via Supabase Edge Function)

---

### 🔧 Query Parameters

| Parameter    | Type   | Required | Description                     |
|--------------|--------|----------|---------------------------------|
| `channel`    | string | ✅ Yes    | Twitch channel name to check    |

---

### ✅ Example Request

```bash
GET /api/twitch-status?channel=qtsnac
```

```bash
fetch("https://supabase-url/functions/v1/twitch-status?channel=qtsnac")
  .then(res => res.json())
  .then(data => console.log(data));
```

## 📈 Future Improvements

The site is constantly evolving to become a full web experience:

✅ Planned Upgrades:

- 🔍 SEO Optimization

- 🛠️ Dynamic Web Features – Less static content, more interactivity.

- 📝 Extended "About Me" Section – Full biography and personal story.

- 🎨 Font & Style Overhaul – More custom styling & modern UI touch-ups.

- 🧭 Navigation Bar – Add Home, About, Twitch, and Contact sections.

- 📺 Embed Twitch Stream – View Twitch and chat directly from the site.

- 🧼 Web Maintenance – Clean code, performance monitoring, and regular updates.

- 🧩 Custom Home Logo

- 🧠 Accessibility & Responsiveness Enhancements

- 🌍 Multi-language Support (future idea)
## 🤝 Contributing

Currently, contributions are internal only. In future versions, the project might open up for community UI/UX help, API integrations, and localization.


## 📝 License

This project is under the MIT License.


## ❓ FAQ

<details>
  <summary>📌 Who is this website for?</summary>
  This website is built for qtsnac, a content creator and streamer focused on games like Marvel Rivals, Valorant, and more. It provides a central hub for her Twitch stream, goals, setup, and social links.
</details>

<details>
  <summary>🎥 How does the LIVE NOW button work?</summary>
  The LIVE NOW button fetches real-time stream status from the Twitch API via a Supabase Edge Function. When the streamer goes live, the button appears and redirects viewers to her live Twitch stream.
</details>

<details>
  <summary>🧪 Can I contribute to this project?</summary>
  Yes! Contributions are welcome. Whether it's bug fixes, design improvements, or new features, feel free to open a Pull Request or suggest ideas via Issues.
</details>

<details>
  <summary>🖥️ What technologies are used?</summary>
  The project uses:
  - Vite + TypeScript for frontend development
  - Tailwind CSS for styling
  - Supabase for backend API (Twitch status)
  - Netlify for hosting & continuous deployment
</details>

<details>
  <summary>🔐 Is user data collected?</summary>
  No personal user data is collected or stored by this site. The Twitch API is only used to check if the streamer is currently live.
</details>

<details>
  <summary>🔧 How do I run the project locally?</summary>
  Just clone the repo and run:
  
  ```bash
  npm install
  npm run dev
  ```
</details>

## 📬 Support

For support, join our [Discord Server](https://discord.com/invite/5jNGHcWuFX).


### 🙌 Acknowledgements

- Special thanks to the **qtsnac** community 💜
- Twitch for its powerful public API
- Supabase for making serverless functions simple and fast
- You, for checking out the repo 🙏


## 💡 Authors

Made with ❤️ by Alexandros – QA Engineer & C# Developer
- [@aleksandrostosunidis](https://github.com/aleksandrostosunidis)
