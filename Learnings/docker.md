# Docker

Yeah I know it no need to worry.  
3 basic commands in the docker file will get it all done

Commands

- FROM
- WORKDIR
- RUN
- COPY
- CMD

That's it I need no more

## EDGECASE

## Vite

Vite is not that good.
I do not know why but I had to use a nginx to expose this react application.  
Probably because the vite isn't doing that good of a job.

Thanks to this repo on gitlab ![repo](https://gitlab.com/codeching/docker-multicontainer-application-react-nodejs-postgres-nginx-basic/-/tree/master?ref_type=heads)

I finally found it was just a few minor edits and it works well now.

So in my client folder.  
I added an `nginx` dir and a `default.conf` file in it.  
Which basically is this

```conf
server {
    listen 5000;

    location / {
        root /usr/share/nginx/html;
        index index.html index.htm;
        try_files $uri $uri/ /index.html;
    }
}
```

The port I listed here is the port where my react app is running.  
You can see the root, index and try_files.

**_Also look at this dockerfile for the client_**

```dockerfile
# version: 0.013

# Builder stage
FROM node:20 as builder

WORKDIR /app
COPY ./package.json ./
RUN npm install
COPY . .
RUN npm run build

# Production stage
FROM nginx

# Copy Nginx configuration
COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf

# Copy built files from the builder stage to Nginx
COPY --from=builder /app/dist /usr/share/nginx/html
```

As you can see the copy of the built files from the builder stage to Nginx.  
THe last line is very important  
You see it is the same as the root and index.  
Thats the crucial thing.
