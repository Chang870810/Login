# Packege version
* nodejs: 16.16.0
* npm: 8.11.0
* vite:
* mysql: 
* docker: 25.0.4
* workdir: ./Login

## Client 
### run client
```
cd client
npm run dev
```
### build image for client
```
sudo docker build -t "node:client" -f ./Dockerfile_client .
```
### run client in docker
```
sudo docker container run -it -v ./client:/app/client --network host --rm node:client
```
## Server
### run client
```
cd server
node index.js
```
### build image for server
```
sudo docker build -t "node:server" -f ./Dockerfile_server .
```
### run server in docker
```
sudo docker container run -it -v ./server:/app/server --network host --rm node:server
```
## Database
```
sudo docker container run -it -e MYSQL_ROOT_PASSWORD=Dev127336 --network host  --rm mysql:8.0
```

