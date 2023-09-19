## LMS Project Documentation ( Just a project to play with microservices and kubernetes)

## Link to technical documentation (https://sour-belly-929.notion.site/LMS-PROJECT-TECHNICAL-DOC-28aa2ce2fbd549c6b24694ddb0c8e9f8?pvs=4)

### Introduction

This document provides an overview of the Learning Management System (LMS) project. The system aims to provide a platform where students can enroll in courses, teachers can teach courses, tests can be conducted, and administrators can manage the platform.


### Architecture Overview

1. **Microservices Design**: The LMS system is designed with a microservices architecture. Each service is responsible for a distinct piece of functionality, ensuring scalability and maintainability.

2. **Services**:
    - **lms-iam**: Responsible for user authentication and authorization.
    - **lms-gateway**: Acts as an API gateway, managing the external API requests and directing them to the appropriate microservice.
    - **lms-course**: Manages courses, lessons, and enrollments.
    - **lms-test**: Handles tests and grading.
    - **lms-common**: A shared library containing utility functions, proto files for gRPC communication, and shared types.

3. **Communication**:
   - **gRPC Communication**:
       The lms-iam service and the lms-gateway service communicate using gRPC for efficient and type-safe communication.
   - **Kafka Event Bus**:
     Kafka acts as the main event bus for the system.
     All other services (except the lms-iam and lms-gateway interaction) use Kafka for communication, allowing them to react to different events happening in the system

4. **Database**: The system uses a mix of SQL and NoSQL databases. **lms-test** will use a NOSQL database, while the remaining services share the same SQL database. in a real prod app, each service will have its own database.

5. **Caching**: (coming soon)
    - Redis is introduced as a caching layer to speed up frequent data retrievals.

### Development Workflow

1. **Monorepo**: The project adopts a monorepo setup. This means all microservices and shared libraries exist within a single repository but are managed and deployed separately.

2 **Continuous Integration/Continuous Deployment (CI/CD)**: (coming soon)
    - Upon any change, a CI/CD pipeline ensures code quality, runs tests, and if everything passes, deploys the changes.

3 **Local Development**:
    - Using tools like nodemon for automatic reloading upon changes.
    - Local changes in `lms-common` are reflected in other services, ensuring seamless development.

### Deployment

1. **Digital Ocean**:
    - Chosen as the cloud provider for its simplicity and developer-friendly nature.
    - Utilizing Kubernetes for orchestration and scalability.

2. **Docker**: Each service is containerized using Docker for consistent runtime environments.

3. **Kubernetes**:
    - Each service runs in its own set of pods.
    - Services are exposed using LoadBalancers or Ingress controllers as necessary.

### Future Improvements

1. **Simulation Engine and Visualizer**: To simulate and visualize the working of the LMS system, reflecting the real-world usage.

2. **OAuth2 Integration**: To allow sign-ins with external providers like Google.
