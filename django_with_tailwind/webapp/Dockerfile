# Use the official Node.js image
FROM node:18-alpine

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json for npm install
COPY webapp/package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application
COPY webapp/ ./

# Build the app for production
RUN npm run build

# Install serve to serve the built app
RUN npm install -g serve

# Expose port for serving the app (typically 5000 for serve)
EXPOSE 5173

# Serve the app
CMD ["serve", "-s", "build", "-l", "5000"]
