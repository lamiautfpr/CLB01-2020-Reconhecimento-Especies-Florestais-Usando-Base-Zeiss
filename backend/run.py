from flask import Flask
from flask_restful import Resource, Api, reqparse
from flask_cors import CORS
from tensorflow.keras.models import load_model
import funmodel as fm
import werkzeug
import numpy as np
import cv2
import os

app = Flask(__name__)
cors = CORS(app, resources={r"/api/*": {"origins": "*"}})
api = Api(app)

MODEL = load_model('assets/pesos-5.tf')

@app.after_request
def after_request(response):
  response.headers.add('Access-Control-Allow-Origin', '*')
  response.headers.add('Access-Control-Allow-Headers', 'Content-Type,Authorization')
  response.headers.add('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE')
  return response

class teste(Resource):
  def post(self):
    parser = reqparse.RequestParser()
    parser.add_argument('file', type=werkzeug.datastructures.FileStorage , location='files')
    fil = parser.parse_args()
    img = fil['file'].read()
    
    npimg = np.fromstring(img, np.uint8)
    cvimg = cv2.imdecode(npimg, cv2.IMREAD_COLOR)

    ret = fm.proc_res(MODEL.predict(fm.generator(cvimg)))
    return ret

api.add_resource(teste, '/teste')

if __name__ == "__main__":
  app.run(host='0.0.0.0')
