# Evenzo
# 🎉 Evenzo — College Event Management, Reimagined

> Say goodbye to messy Google Forms. Evenzo is the all-in-one event management platform built exclusively for college students and organizers.

---

## 📌 About the Project

**Evenzo** is a modern web-based event management platform designed to simplify how college students discover, register for, and manage campus events. From tech fests and cultural nights to workshops and club meetups — Evenzo brings everything under one roof.

Traditional tools like Google Forms are clunky, hard to track, and offer zero event experience. Evenzo replaces them with a sleek, intuitive platform that makes event creation and participation effortless.

---

## 🚀 Features

- 🗓️ **Event Creation & Management** — Organizers can create, edit, and manage events with ease — no tech expertise required.
- 📋 **Smart Registrations** — Custom registration forms with built-in field validation, replacing the need for Google Forms entirely.
- 🎟️ **Digital Tickets & QR Check-in** — Auto-generated tickets with QR codes for fast, paperless entry.
- 📊 **Real-time Dashboard** — Live attendance tracking, registration stats, and participant management for organizers.
- 🔔 **Instant Notifications** — Email and in-app alerts for event updates, reminders, and announcements.
- 🔍 **Event Discovery** — Students can browse and filter upcoming college events by category, date, or department.
- 👤 **Student Profiles** — Each user has a profile showing their registered and past events.
- 🏫 **Multi-Club Support** — Multiple college clubs and societies can manage their own events independently on the same platform.

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|------------|
| Frontend | React.js / Next.js |
| Backend | Node.js + Express |
| Database | MongoDB |
| Authentication | JWT + OAuth (Google Login) |
| Styling | Tailwind CSS |
| Notifications | Nodemailer / Firebase Cloud Messaging |
| Hosting | Vercel (Frontend) + Render (Backend) |

> ⚡ Tech stack is flexible and can be adapted based on team preference.

---

## 🎯 Problem Statement

College events are still managed through a painful mix of:
- 📄 Google Forms for registration
- 📱 WhatsApp groups for announcements
- 🗒️ Manual spreadsheets for tracking attendees
- 📌 Physical posters for discovery

This leads to missed registrations, poor attendance visibility, and a terrible experience for both organizers and students.

**Evenzo solves all of this in one platform.**

---

## 💡 Why Evenzo?

| Traditional Way | Evenzo Way |
|----------------|------------|
| Google Forms for registration | Smart in-app registration |
| Manual Excel tracking | Real-time dashboard |
| WhatsApp spam for updates | Targeted notifications |
| No ticket system | QR-based digital tickets |
| Zero event discovery | Browse & filter events |

---

## 📂 Project Structure

```
evenzo/
├── client/               # Frontend (React/Next.js)
│   ├── components/       # Reusable UI components
│   ├── pages/            # App pages & routes
│   └── styles/           # Tailwind CSS styles
├── server/               # Backend (Node.js/Express)
│   ├── routes/           # API routes
│   ├── models/           # MongoDB schemas
│   ├── controllers/      # Business logic
│   └── middleware/       # Auth & validation
├── .env.example          # Environment variable template
├── README.md             # You're here!
└── package.json
```

---

## ⚙️ Getting Started

### Prerequisites

- Node.js >= 18.x
- MongoDB (local or Atlas)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/your-username/evenzo.git
cd evenzo

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env
# Edit .env with your MongoDB URI, JWT secret, etc.

# Run the development server
npm run dev
```

The app will be running at `http://localhost:3000`.

---

## 🌍 Live Demo

> 🔗 Coming Soon — [evenzo.vercel.app](https://evenzo.vercel.app)

---

## 🤝 Contributing

Contributions are welcome! Here's how to get started:

1. Fork the repository
2. Create your feature branch: `git checkout -b feature/AmazingFeature`
3. Commit your changes: `git commit -m 'Add some AmazingFeature'`
4. Push to the branch: `git push origin feature/AmazingFeature`
5. Open a Pull Request

---

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.

---

## 👨‍💻 Made with ❤️ for college students

**Evenzo** — *Because your college events deserve better than a Google Form.*
