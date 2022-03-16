
from flask import Blueprint, url_for, redirect
course_bp = Blueprint('course_services', __name__)

@course_bp.route('/course/<course_id>', methods = ['GET'])
def access(course_id):
	# -- Write your code here
	course_qid = 1
	return redirect(url_for('ui_service.questions', qid=course_qid))
