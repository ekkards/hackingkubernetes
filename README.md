# hackingkubernetes
Hackerkiste Augsburg 2018 code samples

## Build code
```
docker build -t ekkards/hackingkubernetes .
docker image ls
```

## Test locally
```
docker run -p 4000:8080 ekkards/hackingkubernetes
docker container ls
```
and open URL `http://localhost:4000` in browser

## Publish to dockerhub
```
docker tag ekkards/hackingkubernetes ekkards/hackingkubernetes:v1
docker push ekkards/hackingkubernetes:v1
```
