from flask import Flask, render_template, jsonify, request, make_response
# from backend.tf import model
from flask_restful import Api, Resource
from flask_cors import CORS 
from random import *
from PIL import Image
from pathlib import Path
from io import BytesIO
import base64
import tensorflow as tf
from backend.tf.funmodel import gen_teste, proc_res
import json

MODEL = tf.keras.models.load_model('backend/tf/pesos-5.tf')

# static_folder: Specify the path of the static file built with vue
# template_folder: index built with vue.Specify html path
app = Flask(__name__,
            static_folder = "./dist/static",
            template_folder = "./dist")

#Japanese
app.config['JSON_AS_ASCII'] = False
#CORS=Terms for secure communication with Ajax
api = Api(app)
CORS(app)

UPLOAD_FOLDER = './backend/uploads'
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER

#Index when receiving any request.See html
@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def index(path):
    return render_template("index.html")

@app.route('/classification', methods=['POST'])
def uploadImage():
    if request.method == 'POST':
        base64_png = request.form['image']
        code = base64.b64decode(base64_png.split(',')[1]) 
        image_decoded = Image.open(BytesIO(code))
        image_decoded.save(Path(app.config['UPLOAD_FOLDER']) / 'image.png')

        response = load()

        return make_response(jsonify({'response': response}))
    else: 
        return make_response(jsonify({'result': 'invalid method'}), 400)


def load():
    try:
        # MODEL = tf.keras.models.load_model('backend/tf/pesos-5.tf')
        l = proc_res(MODEL.predict(gen_teste('backend/uploads/image.png')))
        
        json_string = json.dumps([ob.__dict__ for ob in l])
        
        print(json_string)
        
        return json_string

    except Exception as error:
        
        erro = { 'Error found' : error }
        print(erro)
        return erro

# app.run(host, port): Start flask server by specifying host and port
if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)