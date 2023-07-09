# Stage 1: Install project dependencies
FROM node:16 as dependencies

WORKDIR /portfolio

# Copy package.json and package-lock.json
COPY portfolio/package*.json ./

# Install project dependencies with specific npm version
RUN npm install --global npm@9.8.0
RUN npm ci

# Stage 2: Build the Angular application
FROM dependencies as build

# Copy the source code
COPY portfolio .

# Build the Angular application
RUN npm run build

# Stage 3: Serve the built application with a lightweight web server
FROM nginx:latest

# Copy the built application from the previous stage
COPY --from=build /portfolio/dist/portfolio /usr/share/nginx/html

# Expose the default HTTP port
EXPOSE 80

# Start the Nginx web server
CMD ["nginx", "-g", "daemon off;"]
