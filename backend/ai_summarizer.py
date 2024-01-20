import os
from dotenv import load_dotenv
import requests

import openai

# Load .env file
load_dotenv()

# Get API key from environment variable
api_key = os.getenv("OPENAI_API_KEY")

client = openai.OpenAI(
    api_key=api_key,
)

article = 


chat_completion = client.chat.completions.create(
    messages=[
        {
            "role": "user",
            "content": f"Summarize the following news article in 50-60 words. Mention important points that are relevant to the topic. Output only the summarized article, and nothing else. The article is {article}",
        }
    ],
    model="gpt-3.5-turbo",
)

assistant_response = chat_completion.choices[0].message.content
print(assistant_response)