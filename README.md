![Main Pipeline](https://github.com/00-Sachin/Simple-NodeJS-Api/actions/workflows/main-pipeline.yml/badge.svg)
![PR Pipeline](https://github.com/00-Sachin/Simple-NodeJS-Api/actions/workflows/pr-pipeline.yml/badge.svg)
 
# DevOps Practice API
A Node.js Express application with a full CI/CD pipeline using GitHub Actions.

## Pipeline Architecture
1. **PR Opened** → Triggers Reusable Build/Test → Blocks merge if tests fail.
2. **Merge to Main** → Triggers Build/Test → Triggers Docker Build/Push to DockerHub → Deploys to Production.
3. **Cron Job** → Runs a container health check every 12 hours.

