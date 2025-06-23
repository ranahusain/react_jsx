# Setup JSON server

1. yarn add -D json-server
2. go to package.json and add the line in scripts => server: "json-server --watch src/jobs.json --port 8000"
   "scripts": {
   "dev": "vite",
   "build": "vite build",
   "lint": "eslint .",
   "preview": "vite preview",
   "server": "json-server --watch src/jobs.json --port 8000"
   },
3. yarn server

---
