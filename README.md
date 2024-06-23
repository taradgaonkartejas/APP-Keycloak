# REST App with Vite, React, Node.js, and Prisma

## Installation

### Prerequisites

- Node.js (>=14.x)
- npm or yarn
- mysql or any other Prisma-supported database

### Steps

1. Clone the repository:

    ```sh
    git clone https://github.com/taradgaonkartejas/APP-Keycloak.git
    cd APP-Keycloak
    ```

2. Install dependencies for both frontend and backend:

    ```sh
    npm install
    cd APP-Client
    npm install
    cd ../APP-Server
    npm install
    ```

3. Set up environment variables:

    Create a `.env` file in the `server` directory with the following contents:

    ```sh
    DATABASE_URL="postgresql://username:password@localhost:5432/your-database-name"
    PORT=5000
    ```

4. Apply database migrations using Prisma:

    ```sh
    cd APP-server
    npx prisma migrate dev
    ```

## Project Structure

