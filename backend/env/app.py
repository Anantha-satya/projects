from flask import request, jsonify
from flask_mysql import MySQL
from services._connection import Ecomm1


app = Flask(__name__)
app.config['MYSQL_HOST'] = 'localhost'
app.config['MYSQL_USER'] = 'root'
app.config['MYSQL_PASSWORD'] = 'Mysql@123'
app.config['MYSQL_'] = 'mydb1'

mysql = MySQL(app)

# API endpoint for user signup
@app.route('/api/mydb1', methods=['POST'])
def signup():
    # Get the user data from the request
    username = request.json['username']
    password = request.json['password']

    # Connect to the MySQL database
    cur = Ecomm1

    # Check if the username already exists
    cur.execute("SELECT * FROM mydb1 WHERE username = %s", (username,))
    user = cur.fetchone()
    if user:
        return jsonify({'message': 'Username already exists'})

    # Insert the new user into the database
    cur.execute("INSERT INTO mydb1 (username, password) VALUES (%s, %s)", (username, password))
    mysql.connection.commit()
    cur.close()

    return jsonify({'message': 'User registered successfully'})

# API endpoint for user login
@app.route('/', methods=['POST'])
def login():
    # Get the user data from the request
    username = request.json['username']
    password = request.json['password']

    # Connect to the MySQL database
    cur = mysql.connection.cursor()
    print("hello")

    # Check if the username and password match
    cur.execute("SELECT * FROM mydb1 WHERE username = %s AND password = %s", (username, password))
    user = cur.fetchone()
    if not user:
        return jsonify({'message': 'Invalid username or password'})

    # Return a success message or user data
    return jsonify({'message': 'User logged in successfully', 'user': user})

if __name__ == '__main__':
    app.run()
