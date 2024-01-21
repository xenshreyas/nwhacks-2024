import random
import pickle
from test import Article

# Load the urls from the pickle file
with open('articles.pkl', 'rb') as f:
    articles = pickle.load(f)

# with open('urls.txt', 'w') as file:
#     for a in random.sample(articles, 100):
#         # print(a.title)
#         # print(a.url)
#         # print(a.imageUrl)
#         # print(a.source)
#         # print()
#         file.write(a.url + '\n')

articles_with_content = 0

for a in articles:
    if a.content:
        articles_with_content+=1
        print(a.title)
        print(a.publish_time)
        print(a.content)
        print()

print("Number of articles:", articles_with_content)