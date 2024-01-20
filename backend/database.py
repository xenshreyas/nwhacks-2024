from pymongo import MongoClient

# Connect to the MongoDB server
client = MongoClient('mongodb+srv://aprameyaithal:qnpnN4Z3aeEj6rWy@cluster0.15wwgl1.mongodb.net/?retryWrites=true&w=majority')

# Access the database
db = client['news-app']

# Access the collection
collection = db['news']

def get_documents():
    # Find all documents in the collection
    documents = collection.find()

    return list(documents)


# def get_document(document_id):
#     # Find the document with the given ID
#     document = collection.find_one({'_id': document_id})

#     return document

def add_document(document):
    # Insert the document into the collection
    collection.insert_one(document)

    return document