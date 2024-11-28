from app import db_returner, User
from flask import Blueprint, render_template, request

db = db_returner()
views = Blueprint('views',__name__)

@views.route('/', methods=['GET','POST'])
def homepage():
    if request.method == 'POST':
        print('yes')
        pass
    
    return render_template('signup.html')