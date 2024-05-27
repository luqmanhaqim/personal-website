# Use the official Node.js image as the base image
FROM node:22

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the Next.js application
RUN npm run build

# Expose the port the app runs on
EXPOSE 3002

# Set environment variable for the port
ENV PORT=3002
ENV NEXT_PUBLIC_BACKEND_URL=http://backend:4000/api/repos

# Start the Next.js application
CMD ["npm","run","start"]
