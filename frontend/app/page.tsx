import Header from "./Header";
import NewsList from "./NewsList";
import news from "./articles_modified.json";

function Home() {
  console.log(news);

  return (
    <div style={{ backgroundColor: '#d9ead3' }} className="bg-gray-700">
      <Header />
      <NewsList news={news} />
    </div>
  );
}

export default Home;
