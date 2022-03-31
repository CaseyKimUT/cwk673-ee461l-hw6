from flask import Flask, jsonify
#from flask_cors import CORS

app = Flask(__name__, static_folder="./client/build", static_url_path="/")

#CORS(app)

@app.route('/name/<fname>', methods=["GET"])
def user_last_name(fname):
    lname = "User Not Found"
    if(fname == 'Casey'):
        lname = "Kim"
    return jsonify(lnameOut=lname)

@app.route('/')
def index():
    return app.send_static_file('index.html')

if __name__ == "__main__":
    app.run(host='0.0.0.0', debug=False, port=os.environ.get('PORT', 80))
