from flask import Flask
from flask_mail import Mail
from flask import request
from flask import jsonify
from flask import Response
import requests

app = Flask(__name__)

# from flask_cors import CORS
# CORS(app)

from flask_mail import Message

app.config['MAIL_SERVER']='smtp.gmail.com'
app.config['MAIL_PORT'] = 465
app.config['MAIL_USERNAME'] = 'email@email.com'
app.config['MAIL_PASSWORD'] = '*****'
app.config['MAIL_USE_TLS'] = False
app.config['MAIL_USE_SSL'] = True

mail = Mail(app)

@app.route("/send-message/", methods=['POST'])
def index():
	try:
		name = request.form['Name']
		email = request.form['Email']
		subject = request.form['Subject']
		message = request.form['Message']
		captcha_response = request.form['g-recaptcha-response']
		
		email_subject = '[shinw97.github.io] You got a new message!'

		verified = verify(captcha_response)

		if verified:
			message =  'Subject: ' + subject + '\n' + 'Sender Name: ' + name + '\n' + 'Sender Email: ' + email + '\n\n' + message

			msg = Message(subject=email_subject,
						body=message,
						sender=email,
						recipients=["shinw97@hotmail.com"])
			mail.send(msg)

			print(message)
			response = jsonify({
					'status': 'verified',
					})
			return response
		print('unverified')
		response = jsonify({
					'status': 'unverified',
					})
		return response
	except Exception as e:
		raise e
		return str(e)




def verify(token):
	SECRET_KEY = '6Ld_OrYUAAAAAGaMoREvGl5IqVHiMTRYw05oFmWf'
	r = requests.post('https://www.google.com/recaptcha/api/siteverify', data={'secret': SECRET_KEY, 'response': token})
	status = r.status_code
	response = jsonify({
		'status_code': status,
		'success': r.json()['success']
	})
	print(r.json())
	return r.json()['success']

@app.route("/test-api/", methods=['GET'])
def testAPI():
	response = jsonify({'res': 'hey'})
	return response


if __name__ == '__main__':
	app.run()