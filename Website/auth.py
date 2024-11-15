from app import db_returner, User
from flask import Blueprint, render_template, request

db = db_returner()
auth = Blueprint('auth',__name__)

@auth.route('/sign-up', methods=['GET','POST'])
def signup():
    if request.method == 'POST':
        username = request.form.get('username')
        email = request.form.get('email')
        password1 = request.form.get('password1')
        password2 = request.form.get('password2')
        print(username,password1)
        if password1 == password2:
            newUser = User(username=username,email=email,password=password1)
            db.session.add(newUser)
            db.session.commit()
            print("updated")
            return render_template('index.html')
        return render_template('signup.html')

@auth.route('/login', methods=['GET','POST'])
def login():
    if request.method == 'POST':
        pass
    
    return render_template('index.html')

