import random
import pickle
from test import Article

# Load the urls from the pickle file
with open('articles.pkl', 'rb') as f:
    articles = pickle.load(f)

with open('urls.txt', 'w') as file:
    file.truncate(0)
    for a in random.sample(articles, 40):
        # print(a.title)
        # print(a.url)
        # print(a.imageUrl)
        # print(a.source)
        # print()
        if (not a.content) or (len(a.content.strip()) == 0):
            file.write(a.url + '\n')
