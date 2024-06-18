FROM node:slim

WORKDIR /app

COPY package.json ./

RUN npm install

COPY . .

# Build the React app
RUN npm run build

# Install a simple HTTP server to serve the static files
RUN npm install -g serve

# Expose the port the app runs on
EXPOSE 5173

# Command to run the app
CMD ["serve", "-s", "dist", "-l", "5173"]
