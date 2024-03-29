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

## having route names other than the container name

So just a small change in the conf file

have the same name of upstream as the contaniner

```conf
upstream chatf{
    server chatf:3005;
}
server{
    listen 80;

        location /chatg {
        proxy_pass http://chatf;
    }
}
```

So as you can see the upstream is same but the changes are in the routing.

Also I made a small change in my chat server.

```
app.get("/chatf", (req, res) => {
  res.send("Chat route hit");
});
app.get("/chatg", (req, res)=>{
  res.send("Chat route hit");
});
```

### Edgecase

Since the `/chatg` was now `proxy_pass` to the chat app.  
So I needed to add the `chatg` route to the chat app.  
So that it can recieve the requests.
