# Stage 1: Build the Angular application
FROM node:14 as build

WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install project dependencies
RUN npm ci

# Copy the source code
COPY . .

# Build the Angular application
RUN npm run build

# Stage 2: Serve the built application with a lightweight web server
FROM nginx:latest

# Copy the built application from the previous stage
COPY --from=build /app/dist/portfolio /usr/share/nginx/html

# Expose the default HTTP port
EXPOSE 80

# Start the Nginx web server
CMD ["nginx", "-g", "daemon off;"]
