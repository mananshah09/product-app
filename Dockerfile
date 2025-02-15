# Use official Node.js image as base
FROM node:18

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and install dependencies
COPY package.json package-lock.json ./
RUN npm install -g @angular/cli && npm install

# Copy the entire project
COPY . .

# Expose Angular's default port
EXPOSE 4200

# Run Angular app
CMD ["ng", "serve", "--host", "0.0.0.0"]
