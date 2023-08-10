# Use a base image that includes Caddy
FROM caddy:2.4.6-alpine

# Install openSSH server
RUN apk update && apk upgrade && apk add openssh-server

# Create a non-root user with shell access
RUN adduser -D -s /bin/ash myuser

# Set a password for the non-root user (CHANGE THIS TO A SECURE PASSWORD)
RUN echo "myuser:WebTechOli2023" | chpasswd

# Set the non-root user as the default user
USER myuser

# Copy the index.html file to the Caddy public directory
COPY index.html /usr/share/caddy/

# Expose SSH and HTTP ports
EXPOSE 22
EXPOSE 80

# Set Caddy environment variables for custom configuration
ENV CADDY_HTTP_PORT=80
ENV CADDY_ROOT=/usr/share/caddy
ENV CADDY_ENCODE_GZIP=true

# Start Caddy
CMD ["caddy", "run"]