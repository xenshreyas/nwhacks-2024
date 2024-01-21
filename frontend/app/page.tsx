import Cards from '@/components/Cards';

export default function Home() {
  return (
    <div className="bg-cover bg-center h-screen" style={{ backgroundImage: "url('/images/background.png')" }}>
      <Cards />
    </div>
  );
}