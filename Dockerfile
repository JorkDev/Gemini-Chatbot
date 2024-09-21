# Stage 1: Build Stage
# This stage is responsible for installing dependencies and building the app.
FROM node:18-alpine AS build

# Set working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json or yarn.lock if you're using Yarn
COPY package*.json ./

# Install dependencies
RUN npm install --legacy-peer-deps

# Copy the entire application code into the container
COPY . .

# Build the app
RUN npm run build

# Stage 2: Production Stage
# This stage is optimized for running the app with a smaller image size.
FROM node:18-alpine AS production

# Set working directory in the container
WORKDIR /app

# Copy only the necessary files from the build stage
COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app/dist ./dist

# Expose a port (example for a web application)
EXPOSE 3000

# Set environment variables (you can define more as needed)
ENV NODE_ENV=production
ENV PORT=3000

# Command to run the application
CMD ["npm", "start"]

# Stage 3: Optional Test Stage (if you have tests)
FROM build AS test

# Install test dependencies
RUN npm install --only=dev

# Run tests
CMD ["npm", "test"]
