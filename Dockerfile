# starts with a lightweight image
FROM node:20-alpine

# this is the working directory inside the docker container
WORKDIR /app

# Copy only the dependencies of the project
COPY package*.json ./

# Install the dependencies from package,json
RUN nmp ci 

# copy the rest of the file 
COPY . .

# Expose the port on which the app run 
EXPOSE 3000

# Start the application 
CMD ["npm", "start"] 

