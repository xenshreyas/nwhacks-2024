import json

import pickle

from datetime import datetime


class Article:
    def __init__(self, url, imageUrl, title, content, source):
        self.url = url
        self.imageUrl = imageUrl
        self.title = title
        self.content = content
        self.source = source


if __name__ == "__main__":
    try:
        with open('articles.pkl', 'rb') as f:
            articles = pickle.load(f)
    except FileNotFoundError:
        articles = []

    with open('links.json', 'r') as file:
        data = json.load(file)

    # existing_urls = [article.url for article in articles]

    # new_articles = [Article(post.get('url'), post.get('urlToImage'), post.get('title'), False, post.get('source').get('name'))
    #                 for post in data['articles'] if post.get('url') not in existing_urls]
    # articles.extend(new_articles)

    for article in articles:
        if article.content:
            article.content = article.content.strip().replace('Final summarized text: ', '').strip()

    print(len(articles))

    with open('articles.pkl', 'wb') as f:
        pickle.dump(articles, f)

    
