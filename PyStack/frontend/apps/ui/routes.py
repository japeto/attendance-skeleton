from optparse import Option
from flask import Blueprint, render_template
ui_bp = Blueprint('ui_service', __name__)

@ui_bp.route('/about')
def about():
	return render_template('about.html')


@ui_bp.route('/question/<qid>')
def questions(qid):
	questions={
		'1':{
			'question':'¿Esta es un pregunta dicotomica?',
			'options':['No', 'Si'] # lista de opciones SI_NO
			},
		'2':{
			'question':'¿Esta es un pregunta seleción multiple?',
			'options':['A', 'B', 'C', 'D']
			},
		'3':{
			'question':'¿Esta es un pregunta de escala?',
			'options':['1', '2', '3', '4'] # lista de opciones Likert1_4
			},
		'4':{
			'question':'¿Esta es un pregunta de escala?',
			'options':['1', '2', '3', '4', '5', '6']
			},
		'5':{
			'question':'¿Esta es un pregunta dicotomica?',
			'options':['Verdadero', 'Falso'] # lista de opciones VF
			},
		'6':{
			'question':'¿Esta es un pregunta dicotomica?',
			'options':['De acuerdo', 'En desacuerdo']
			}
		}

	if int(qid) == len(questions):
		qid = 0
	
	qid = int(qid) + 1
	qid = str(qid)
	qobj= questions[qid]

	return render_template('questions.html', qobj= qobj, qid=qid)