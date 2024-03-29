# MERN on DOcker

## Objective

To learn how to dockerize a MERN app and ensure their communication

## Added the nginx and exposed the frontend

Now everything works smoothly.  
This is just the begining.  
I will make a complex version.

You can see all my learnings at

[Learnings](Learnings)

Everything which needed attention is written here.  
Feel free to ask, suggest or comment anything about this project in the issues

## This is mainly for learning

I am leaving it as it is for now.  
It will work as a reference for me and my juniors.

No discrimination even Seniors can read and be benifited LOL ; )

## Advantage of this project

You may want to use it as a base for your full stack project.  
With this project you can skip the DevOPS part.

I know learning is important. But it takes effort and time  
Its a quickle which will get you going.

### Changes You Might Need

- Changing the database and the `MONGO_URI` in the `docker-compose.yaml`
- You may want to change the ports in the `docker-compose.yaml` or the `nginx/default.conf`
- Thats it and its ready to build quick and ensure the connectivity.
- You may want to change the `MONGO_URI` and add the db at the end of the url.

## SETUP

_DOCKER WAY_

1. Clone this [repo](https://github.com/OAtulA/Mern-on-docker.git)  
   `git clone https://github.com/OAtulA/Mern-on-docker.git`

2. Go to the root directory and run `docker-compose up --build`  
   or if you have the latest docker it's now `docker compose up --build`

3. Go to [http://localhost:3050](http://localhost:3050)

but ensure you have at least this much space.  
I mean even if you run it on a 16GB pendrive Linux live USB. It will work.

```sh
docker images | grep mern
mern-on-docker-chatf                                   latest    5dd0782873b6   27 minutes ago      1.21GB
mern-on-docker-client                                  latest    714374fc7c04   36 minutes ago      187MB
mern-on-docker-nginx                                   latest    6f1762b966d6   About an hour ago   187MB
mern-on-docker-api                                     latest    49041d0764df   2 hours ago         1.17GB
```
