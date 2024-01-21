import pickle
from test import Article

# Load the articles from the pickle file
with open('articles.pkl', 'rb') as f:
    articles = pickle.load(f)

# Load the urls from the text file
with open('urls.txt', 'r') as f:
    urls = f.read().splitlines()

# Load the contents from the text file
with open('contents.txt', 'r') as f:
    contents = f.read().split('\\?><?\\')

# For each content, set the article with the same url as the corresponding index in urls.txt
for i, content in enumerate(contents):
    for article in articles:
        if article.url == urls[i]:
            article.content = content
            break

# Save the articles back to the pickle file
with open('articles.pkl', 'wb') as f:
    pickle.dump(articles, f)
