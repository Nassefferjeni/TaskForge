# TaskForge

TaskForge is a web application that allows users to authenticate, create, edit, and delete to-do items. It utilizes Firebase for database management and authentication. The frontend is developed using Svelte, and the project is managed using PNPM.

## Getting Started

### Prerequisites

Make sure you have the following tools installed on your machine:

- [Node.js](https://nodejs.org/)
- [pnpm](https://pnpm.io/) (to install it globally, run `npm install -g pnpm`)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Nassefferjeni/TaskForge.git

   ```

2. Navigate to the project directory:

   ```bash
   cd TaskForge

   ```

3. Install dependencies using pnpm:

   ```bash
   pnpm install

   ```

4. Create a .env file in the root directory of the project and populate it with the following environment variables:
   ```bash
   VITE_API_KEY=your-api-key
   VITE_AUTH_DOMAIN=your-auth-domain
   VITE_PROJECT_ID=your-project-id
   VITE_STORAGE_BUCKET=your-storage-bucket
   VITE_MESSAGING_SENDER_ID=your-messaging-sender-id
   VITE_APP_ID=your-app-id
   ```

### Development

To run the development server:

    pnpm dev

Open http://localhost:5173 in your browser to view the app.
