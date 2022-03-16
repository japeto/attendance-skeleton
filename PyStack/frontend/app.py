
from flask import Flask, render_template
from apps.ui.routes import ui_bp as ui
from apps.users.routes import users_bp as users
from apps.course.routes import course_bp as course

app = Flask(__name__)
app.register_blueprint(ui)
app.register_blueprint(users)
app.register_blueprint(course)

# GETs
@app.route('/')
def dashboard():
	return render_template('index.html')

if __name__ == "__main__":
	app.run(host = "0.0.0.0",debug=True)
