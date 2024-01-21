import React from "react";
import news from "./articles_modified.json";
import Article from "./Article";

type Props = {
  news: NewsResponse;
};

function NewsList({ news }: Props) {
  return (
    <main className="grid grid-cols-1 md:grid-cols-2 lg-gray p-10 gap-10 font-sans">
      {news.data.map((article: Article) => (
        <Article key={article.title} article={article} />
      ))}
    </main>
  );
}

export default NewsList;
