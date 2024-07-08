# Use the official Node.js image.
FROM node:18-alpine

# Create and change to the app directory.
WORKDIR /usr/src/app

# Copy app files.
COPY . .

# Install dependencies.
RUN npm install

# Build the app.
RUN npm run build

# Serve the app
RUN npm install -g serve
CMD ["serve", "-s", "out"]
