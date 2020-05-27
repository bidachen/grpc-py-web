import grpc
from concurrent import futures
import time
import user_pb2
import user_pb2_grpc
import userHandler
class UserServicer(user_pb2_grpc.UserServicer):
    def CreateNewUser(self, request, context):
        response = user_pb2.Response()
        response.status = userHandler.CreateNewUser(request.name, request.email, request.password)
        return response

    def UserSignin(self, request, context):
        response = user_pb2.Response()
        response.status = userHandler.UserSignin(request.email, request.password)
        return response
print('server is ready')
server = grpc.server(futures.ThreadPoolExecutor(max_workers=10))
user_pb2_grpc.add_UserServicer_to_server(UserServicer(), server)
server.add_insecure_port('[::]:10000')
server.start()

try:
    while True:
        time.sleep(86400)
except KeyboardInterrupt:
    server.stop(0)