import grpc
from services.userService import user_pb2_grpc
from services.userService import user_pb2

channel = grpc.insecure_channel('localhost:10000')
stub = user_pb2_grpc.UserStub(channel)
userData = user_pb2.SignupData(name='test', email='test@test.com',password='123456')

response = stub.CreateNewUser(userData)
print(response.status)