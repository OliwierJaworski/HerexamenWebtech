# Use the official Caddy image as the base
FROM caddy:2.4.6-alpine

# Copy the index.html file to the Caddy public directory
COPY index.html /usr/share/caddy/