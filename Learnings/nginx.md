# NGINX

The og tool that can be used as reverse proxy the way I am using.  
As loadbalancer, I will be using.

Its dope.

We just need to write a conf file  
similar to writing a json file.

The syntax is just wow.

Next, it takes care of everything magically.  
Thanks from the deepest of my heart to the creator.

## The conf file

The upstream name and the docker compose container name must match

Example

`docker-compose.yaml`

```yaml
chatf:
  build:
    dockerfile: dockerfile
    context: "./chat_feature"
  volumes:
    - /chat/node_modules
    - ./chat_feature:/chat
```

`nginx/default.conf`

```conf
upstream chatf{
    server chatf:3005;
}

server{
    listen 80;

    location /chatf {
        proxy_pass http://chatf;
    }
}

```
