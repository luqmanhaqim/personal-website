# DevOps Capstone Project for CCSD

## Overview
This repository is created to deliver the requested DevOps capstone project for CCSD. The project demonstrates a full-stack application utilizing modern DevOps practices, including containerization, continuous integration/continuous deployment (CI/CD), and monitoring.

## Tooling and Technologies

### Code
1. **Next.js (Frontend)**: A React framework for building modern web applications.
2. **Node.js (Backend)**: A JavaScript runtime for building scalable backend services.

### Containerization
1. **Docker**: A platform for developing, shipping, and running applications in containers.
2. **Docker Compose**: A tool for defining and running multi-container Docker applications.
3. **Docker Hub**: A cloud-based repository for Docker images.

### CI/CD
1. **Jenkins**: An open-source automation server used for building, deploying, and automating software development processes.

### Monitoring
1. **Prometheus**: An open-source systems monitoring and alerting toolkit.
2. **Grafana**: An open-source platform for monitoring and observability. Grafana is used to visualize metrics collected by Prometheus from the Node.js backend endpoint.
   

## High Level Architecture Diagram
![image](https://github.com/luqmanhaqim/personal-website/assets/169234696/621395c0-0bb1-49b4-b137-139308419624)


## Setup Instructions

### Prerequisites
- Docker
- Docker Compose
- Jenkins

### Clone the Repository
```bash
git clone https://github.com/yourusername/your-repo-name.git
cd personal-website
```
### Build and Run the Application
Using Docker Compose
```bash
docker-compose up --build -d
```
This command will build and start all services defined in the docker-compose.yml file, including the frontend, backend, Prometheus, and Grafana.

### Configure Jenkins
Install Jenkins following the official documentation.
Configure Jenkins to use the Docker daemon (either using Docker-in-Docker or Docker socket binding).
Create a new Jenkins pipeline and use the provided Jenkinsfile for the pipeline script.

## Access the Application
1.Frontend: http://localhost:3002 

2.Backend: http://localhost:4000

3.Grafana: http://localhost:3000

4.Prometheus: http://localhost:9090 

5.Jenkins: http://localhost:8080

### Monitoring Setup
Prometheus is configured to scrape metrics from the Node.js backend endpoint and visualize them through the Grafana dashboard. The configuration for Prometheus scraping is included in the prometheus.yml file, which is mounted into the Prometheus container.

### Usage
1. **Next.js Frontend**
The Next.js frontend application is responsible for rendering the user interface and interacting with the backend services.

2. **Node.js Backend**
The Node.js backend application exposes RESTful APIs that are consumed by the frontend application and monitored by Prometheus.

3. **CI/CD Pipeline**
The Jenkins pipeline automates the build, test, and deployment processes for both frontend and backend services. The pipeline is defined in the Jenkinsfile.

4. **Monitoring with Prometheus and Grafana**
Prometheus collects metrics from the backend service, and Grafana visualizes these metrics. Access Grafana to view and customize dashboards as needed.

### Contribution Guidelines
Fork the repository.
Create a new branch for your feature or bugfix.
Commit your changes and push them to your forked repository.
Create a pull request to merge your changes into the main repository.

### License
This project is licensed under the MIT License. See the LICENSE file for more details.

### Contact
For any questions or inquiries, please contact haqimsyahril@gmail.com.
