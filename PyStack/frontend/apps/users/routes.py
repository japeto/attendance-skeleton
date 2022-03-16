
from flask import Blueprint, render_template, request
users_bp = Blueprint('users_services', __name__)

@users_bp.route('/access', methods = ['POST'])
def access():
	# -- Write your code here
	return render_template('access.html')

@users_bp.route('/login')
def login():
	return render_template('login.html')

@users_bp.route('/logout', methods = ['POST', 'GET'])
def logout():
	if request.method == 'POST':
		return render_template('logout.html')
	else:
		return render_template('logout.html')

