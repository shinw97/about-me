from flask import Flask
from flask import request
from flask import jsonify
import requests

import smtplib, ssl


from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart


app = Flask(__name__)

from flask_cors import CORS
CORS(app, origins=['https://shinw97.github.io', 
# 'http://localhost:3000'，'http://127.0.0.1:3000'
])

port = 587  # For starttls
smtp_server = "smtp.gmail.com"
sender_email = '****'
receiver_email = "****"
password = "****"


@app.route("/send-message/", methods=['POST'])
def index():
	try:
		name = request.form['Name']
		email = request.form['Email']
		subject = request.form['Subject']
		message_body = request.form['Message']
		captcha_response = request.form['g-recaptcha-response']

		email_subject = '[shinw97.github.io] You got a new message!'

		verified = verify(captcha_response)

		if verified:
			body =  'Subject: ' + subject + '\n' + 'Sender Name: ' + name + '\n' + 'Sender Email: ' + email + '\n\n' + message_body

			message = MIMEMultipart("alternative")
			message["Subject"] = email_subject
			message["From"] = sender_email
			message["To"] = receiver_email

			message.attach(MIMEText(body, 'plain'))

			context = ssl.create_default_context()
			try:
				with smtplib.SMTP(smtp_server, port) as server:
					# server.ehlo()  # Can be omitted
					server.starttls(context=context)
					# server.ehlo()  # Can be omitted
					server.login(sender_email, password)
					server.sendmail(sender_email, receiver_email, message.as_string())
			except Exception as e:
				raise e
				response = jsonify({
					'verified': False,
					})
				return response
			
			print(message)
			response = jsonify({
					'verified': True,
					})
			return response
		
		print('unverified')
		response = jsonify({
					'verified': False,
					})
		return response
	except Exception as e:
		raise e
		response = jsonify({
					'verified': False,
					})
		return response




def verify(token):
	SECRET_KEY = '****'
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