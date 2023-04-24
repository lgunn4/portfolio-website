# Specify the base image to use
FROM node:14-alpine

# Set the working directory
WORKDIR /app

# Copy the package.json and package-lock.json files to the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the app code to the container
COPY . .
RUN chmod 777 ./
RUN chmod -R 777 public/ src/

# Build the app
RUN npm run build

# Set the command to start the app
CMD ["npm", "start"]
