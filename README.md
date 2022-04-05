# Helload world
This is a load test playground to decide which languanges/frameworks to use for web servers



## Run Locust Via Pipenv
```bash
pipenv install --dev # install pipenv dependencies
pipenv run locust # connect to http://localhost:8089
```

## Run Locust Via Docker
```bash
docker-compose up --scale worker=4
```



# Running k6 load test
```bash
# install k6
brew install k6
k6 run k6/script.js # change url and config in this script to control load test
```