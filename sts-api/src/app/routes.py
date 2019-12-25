from app import app
from flask import jsonify
from datetime import datetime

@app.route('/heartbeat/')
def heartbeat():
    response = jsonify({"currentTime": datetime.now()})
    response.headers.add('Access-Control-Allow-Origin', '*')
    return response