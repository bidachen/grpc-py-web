import grpc
from services.userService import user_pb2_grpc
from services.userService import user_pb2
import flask
from flask import request, jsonify, Response

app = flask.Flask(__name__)
channel = grpc.insecure_channel('localhost:10000')
stub = user_pb2_grpc.UserStub(channel)
@app.route('/signup', methods=['POST'])
def signup():
    data = request.get_json(force=True)
    userData = user_pb2.SignupData(name=data['name'], email=data['email'],password=data['password'])
    status = stub.CreateNewUser(userData).status
    return Response(headers={'Access-Control-Allow-Origin':'*'}, status=status)

@app.route('/signin', methods=['POST'])
def signin():
    data = request.get_json(force=True)
    userData = user_pb2.SigninData(email=data['email'],password=data['password'])

    status = stub.UserSignin(userData).status
    return Response(headers={'Access-Control-Allow-Origin':'*'}, status=status)
    # return jsonify({'status':response.status})

app.run(debug=True, port=5000)