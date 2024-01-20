from pymongo.mongo_client import MongoClient
from pymongo.server_api import ServerApi

with open('dbpassword.txt', 'r') as f:
    dbpassword = f.read()

uri = f"mongodb+srv://aprameyaithal:{dbpassword}@cluster0.15wwgl1.mongodb.net/?retryWrites=true&w=majority"
# Create a new client and connect to the server
client = MongoClient(uri, server_api=ServerApi('1'))
# Send a ping to confirm a successful connection
try:
    client.admin.command('ping')
    print("Pinged your deployment. You successfully connected to MongoDB!")
except Exception as e:
    print(e)


# Access the database
db = client['news-app']

# Access the collection

def get_documents(collection_name):
    collection = db[collection_name]
    # Find all documents in the collection
    documents = collection.find()
    return list(documents)


def get_document(document_id, collection_name):
    collection = db[collection_name]
    # Find the document with the given ID
    document = collection.find_one({'_id': document_id})
    return document

def add_document(document, collection_name):
    collection = db[collection_name]
    # Insert the document into the collection
    collection.insert_one(document)
    return document

def add_summarized_news_article(document):
    """
    This is a sample MongoDB document for a news article. 

    Fields:
        title (str): The title of the news article.
        description (str): A brief description of the news article.
        content (str): The summarized content of the news article.
        url (str): The URL of the news article.
        urlToImage (str): The URL of the image for the news article.
        publishedAt (str): The publication date of the news article.
        source (dict): The source of the news article.
            id (str): The ID of the source.
            name (str): The name of the source.
        tags (list of str): Tags associated with the news article.
    """

    sample_news_article = {
        "title": "Sample title",
        "content": "Sample content", # summarized content
        "urlToImage": "Sample urlToImage",
        "publishedAt": "Sample publishedAt",
        "source": {
            "id": "Sample id",
            "name": "Sample name"
        },
        "tags": ["Sample tag 1", "Sample tag 2"]
    }
    
    add_document(document, 'news-articles')
    return document

def get_news_articles():
    # TODO: add filters and queries
    return get_documents('news-articles')

def generate_news_articles_by_tag(tag):
    cursor = news_articles_collection.find({'tags': tag})
    for document in cursor:
        yield f"data: {document}\n\n"


print(generate_news_articles_by_tag('Sample tag 1'))