# docker-compose.yaml

Its just awesome it helps us bind multiple images into one.

The best part is unlike the way we need to build the image  
using the `docker build -f dockerfile -t tagname .`  

We can choose to simply write all the configurations and just do  

## Latest working way
`docker compose up` to start and `docker compose down` to stop it

The old way gives the `'ContainerConfig'` error which I don't know now.  
Will look into it later.

***Old way***
`docker-compose up` and `docker-compose down`   

It takes care of the rest. So elegant and classy.
