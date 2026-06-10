# 🧠 Neurona

**Neurona** is an open-source, self-hosted, AI-powered personal finance tracker designed to help you manage your expenses, analyze spending habits, and gain insights through AI.

## ✨ Features

- 📊 Track income and expenses
- 🤖 AI-powered financial insights using Groq
- 🔒 Fully self-hosted
- 🐳 One-command Docker deployment
- 🗄️ PostgreSQL database support
- ⚡ Fast and lightweight

---

## 🚀 Quick Start

Deploy Neurona in seconds using Docker Compose:

```bash
docker compose up -d
```

Once the containers are running, open your browser and access the application.

---

## 🔧 Environment Variables

Create a `.env` file in the project root and configure the following variables:

```env
# Groq API Key
# Get your API key here: https://console.groq.com/keys
GROQ_API_KEY=gsk_XXXXXXXXXXXXXXXXXXXXX

# AI Model
GROQ_MODEL=llama-3.1-8b-instant

# PostgreSQL Configuration
POSTGRES_DB=neurona_db
POSTGRES_USER=postgres
POSTGRES_PASSWORD=password
POSTGRES_PORT=5432

# Docker Database Service Name
POSTGRES_DOCKER_SERVICE_NAME=db
```

---

## 🐳 Running with Docker

Start all services:

```bash
docker compose up -d
```

View logs:

```bash
docker compose logs -f
```

Stop all services:

```bash
docker compose down
```

---

## 📜 License

This project is released under the MIT License.

---

## 🤝 Contributing

Contributions, feature requests, and bug reports are welcome. Feel free to open an issue or submit a pull request.