FROM node:18

# Install OpenSSL
RUN apt-get update -y && \
    apt-get install -y openssl

# Set working directory
WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy application files
COPY . .

# Generate Prisma Client
RUN npx prisma generate

# Start the application
CMD ["npm", "start"]