# Vite

This is super cool awesome tool to setup the project.  

However with the default file it generates is not capable of being used with the docker.  
So I had to some adjustments and it started working.

## Look what I did

vite.config.js

```JS
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    watch: {
      usePolling: true,
    },
    port: 5000,
    strictPort: true,
    host: true,
    origin: "http://localhost:5000",
  },
  preview: {
    host: true,
    origin: "http://localhost:5000",
    port: 5000,
    strictPort: true,
  },
});
```

here we can see I have added the `server` and `preview` section.  
Also in each section I have added the host, port, origin and strictPort.

Some key options:

- port: The port the dev server will listen on.

- host: Bind the server to a specific IP instead of localhost.

- strictPort: Exit if specified port is already in use instead of trying another.

- watch: Configures file watching behavior. The usePolling option here enables polling  
  for changes rather than relying on native file watching which can have issues.

- origin: Sets the Access-Control-Allow-Origin header for the dev server.  
  This enables CORS for the specified origin.

The preview options are similar but configure the preview server started when running vite preview.  
This gives a production-like preview of the app for testing builds.

The key options like port, host, origin mirror those in server  
but apply to the preview server instead.

All these are required to make it work with docker.   
Especially the origin and strictPort thing  
else despite exposing the port it does not work.

## Main Learning now

We have to specify many things in the config to make it ready for production.  
The dev environment thing does not work well with the docker.  
It has to be well defined.