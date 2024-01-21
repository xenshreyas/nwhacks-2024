import React from 'react';
import { Card, CardTitle } from "@/components/ui/card";
import Image from 'next/image';

const Cards = () => {

  const card_text = "The elephant, a majestic and large mammal, is known for its distinctive features such as long tusks, a trunk, and large ears. They are highly intelligent, social creatures, often found in herds in the wild. Elephants are herbivores, consuming a diet of leaves, bark, and fruits. They are native to Africa and Asia, and are a symbol of strength and wisdom.";
  const card_title = "Elephant"

  return (
    <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
        <Card key={0} style={{ margin: '10px', padding: '20px', width: '50%', height: '50%' }}>
          <CardTitle>{card_title}</CardTitle>
          <Image src="/images/background.png" alt="Background" layout="responsive" width={50} height={50} style={{ width: '50%', height: 'auto' }} />
          <h2 style={{ fontWeight: 'bold' }}>{card_text}</h2>
        </Card>
    </div>
  );
};

export default Cards;