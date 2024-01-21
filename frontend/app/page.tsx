import Cards from '@/components/Cards';
import Red from '@/components/Red';
import Green from '@/components/Green';

export default function Home() {
  return (
    <div className="bg-cover bg-center h-screen" style={{ backgroundImage: "url('/images/background.png')" }}>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
        <Red />
        <Cards />
        <Green />
      </div>
    </div>
  );
}