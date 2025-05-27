# Average Calculator Frontend

This is a Vite + React frontend application for the Average Calculator microservice.

## Setup

1. Ensure you have Node.js installed (v14+ recommended).

2. Install dependencies:

```bash
npm install
```

3. Run the development server:

```bash
npm run dev
```

4. Open the URL shown in the terminal (usually http://localhost:3000).

## Notes

- The frontend expects the backend microservice to be running at `http://localhost:9876`.
- The backend should expose the API endpoint `/numbers/:numberid` where `numberid` is one of `p`, `f`, `e`, or `r`.
- Enter a valid number ID in the input box and click "Calculate" to fetch and display the average calculation results.
- The UI uses Material UI for styling.

## Installing Material UI

If Material UI is not installed, run:

```bash
npm install @mui/material @emotion/react @emotion/styled
```

## Vite + React Setup

If you want to create the project from scratch, run:

```bash
npm create vite@latest frontend -- --template react
cd frontend
npm install
npm install @mui/material @emotion/react @emotion/styled
```

Then replace `src/App.jsx` with the provided code.
