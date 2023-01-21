from flask import Flask, render_template, request
from helpers import lookup

app = Flask(__name__)

@app.route("/", methods=["GET"])
def index():
    return render_template("header.html")