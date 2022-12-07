# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm run build`

Creates prod build

### `npm run build-override`

Creates prod build without chunks for js files


# Getting Started with Docker


## View Docker Machines

docker -H tcp://172.25.212.94 images --all

## Build Docker Machine 

docker -H tcp://172.25.212.94 build -t donvit79/mern-front .

## Publish Docker Machine

docker -H tcp://172.25.212.94 push donvit79/mern-back

Note: you have to login to hub.docker.com with command docker -H tcp://172.25.212.94 login

## Run Docker Container 

 docker -H tcp://172.25.212.94 run -d --rm --name mern-k8s-front -p 8080:80 -e BASE_URL="http://localhost:5000" donvit79/mern-front


## View Docker Containers

docker -H tcp://172.25.212.94 container ls

## View Docker Containers running

PS C:\projects\mern\front> docker -H tcp://172.25.212.94 ps

## Usefull Links

https://developers.redhat.com/blog/2021/03/04/making-environment-variables-accessible-in-front-end-containers#inject_the_environment_variables


# Getting Started with Kubernetes

## Local Kubernetes with minikube 



