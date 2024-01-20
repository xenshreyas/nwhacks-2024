from flask import Flask, jsonify, Response
from flask_cors import CORS

import database as db

# app instance
app = Flask(__name__)
CORS(app)

# /api/home
@app.route("/api/home", methods=['GET'])
def return_home():
    return jsonify({
        'message': "Test message"
    })

# /api/news_articles
@app.route('/api/news_articles_by_tag/<tag>')
def get_news_articles_by_tag(tag):
    return Response(db.generate_news_articles(tag), mimetype='text/event-stream')


if __name__ == "__main__":
    app.run(debug=True, port=8080)