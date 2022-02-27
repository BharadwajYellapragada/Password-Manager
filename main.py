from flask import Flask, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/getsomedata')
def getSomeData():
    return 'somedata'

@app.route('/somedata',methods = ['GET', 'POST'])
def SomeData():
    name = request.args.get('name')
    data = request.get_json()
    data_name = data['name']
    if data_name == name:
        return data
    else:
        return {"Match":False}

if __name__ == '__main__':
    app.run()