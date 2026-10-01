# Task 1: Automate Code Deployment Using a CI/CD Pipeline (GitHub Actions)

**Elevate Labs DevOps Internship, Task 1**

A simple Node.js web app with a CI/CD pipeline built on **GitHub Actions**. On every push to `main`, the pipeline tests the app, builds a Docker image and pushes it to **DockerHub**.

## Tools Used
- GitHub and GitHub Actions
- Node.js 20
- Docker and DockerHub

## Project Structure
```
.
├── .github/workflows/main.yml   # CI/CD pipeline
├── test/app.test.js             # Automated test
├── app.js                       # Node.js web app
├── package.json
├── Dockerfile
└── .dockerignore
```

## How the Pipeline Works
The workflow is in `.github/workflows/main.yml` and runs on every **push to `main`**.

1. **test job**
   - Checks out the code
   - Sets up Node.js 20
   - Runs `npm install` and `npm test`
2. **build-and-push job** (runs only if `test` passes, using `needs: test`)
   - Checks out the code
   - Logs in to DockerHub using GitHub Secrets
   - Builds the Docker image and pushes it to DockerHub

Flow: **push to main → test → build → push to DockerHub**

## Secrets Configuration
Credentials are never written in the code. They are stored in
**Repo → Settings → Secrets and variables → Actions**:

| Secret | Purpose |
|---|---|
| `DOCKERHUB_USERNAME` | My DockerHub username |
| `DOCKERHUB_TOKEN` | DockerHub access token (Read & Write) |

## Run Locally
```bash
# Run the app
npm install
npm start
# open http://localhost:3000

# Run the tests
npm test

# Build and run with Docker
docker build -t nodejs-demo-app .
docker run -p 3000:3000 nodejs-demo-app
```

## Docker Image
Published on DockerHub: `mohammadadnankhan/nodejs-demo-app`

```bash
docker pull mohammadadnankhan/nodejs-demo-app:latest
```

## What I Learned
- How a CI/CD pipeline automates test, build and deploy steps
- Difference between jobs and steps, and how `needs` controls job order
- How to keep credentials safe using GitHub Secrets
- How the Docker build and push workflow works in GitHub Actions

## Screenshots
*Add screenshots of the successful GitHub Actions run and the DockerHub image here.*

## Author
Mohammad Adnan Khan | [GitHub](https://github.com/AddyKhan257)
