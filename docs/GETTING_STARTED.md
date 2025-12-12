# Getting Started with Corporio

## Prerequisites

- **Node.js**: Version 22 or higher.
- **pnpm**: Fast, disk space efficient package manager.

## Installation

1.  **Clone the repository** (if you haven't already):

    ```bash
    git clone <repository-url>
    cd Corporio
    ```

2.  **Install dependencies**:
    ```bash
    pnpm install
    ```

## Running the Development Server

Start the local development server with live reload:

```bash
pnpm start
```

The site will be available at `http://localhost:1313`.

## Building for Production

Generate the static site in the `public/` directory:

```bash
pnpm run build
```

## Development Tools

### Linting

Check scripts, styles, and markdown for errors:

```bash
pnpm run lint
```

### Formatting

Format code using Prettier:

```bash
pnpm run format
```
