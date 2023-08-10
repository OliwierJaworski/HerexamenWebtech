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

# Create a Caddyfile for custom Caddy configuration
RUN echo "{
    http_port 80
    root * /usr/share/caddy
    encode gzip
}" > /etc/caddy/Caddyfile

# Expose SSH and HTTP ports
EXPOSE 22
EXPOSE 80

# Start Caddy with the custom Caddyfile
CMD ["caddy", "run", "--config", "/etc/caddy/Caddyfile"]