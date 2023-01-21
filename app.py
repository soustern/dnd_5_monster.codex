from flask import Flask, render_template, request
from helpers import lookup

app = Flask(__name__)

@app.route("/")
def index():
  input = lookup("acolyte")
  return render_template("header.html", input=input)