from locust import TaskSet, between, task
from locust.contrib.fasthttp import FastHttpUser


class HelloWorldTaskSet(TaskSet):
    @task
    def check_health(self):
        # self.client.get("http://localhost:8090/hello") # go net/http
        # self.client.get("http://host.docker.internal:8090/hello") # go net/http
        
        # self.client.get("http://localhost:8080/api/v1/example/helloworld") # gogin
        # self.client.get("http://localhost:80") # fastapi
        self.client.get("http://localhost:8080/hello/nick") # Micronaut
        # self.client.get("http://host.docker.internal/hello/nick") # Micronaut



class User(FastHttpUser):
    tasks = [HelloWorldTaskSet]
    # wait_time = between(0.0000001, 0.0000005)
