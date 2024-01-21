import React, { useEffect, useState } from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

const Cards = () => {
  const news = ['news1', 'news2', 'news3'];

  return (
    <Card>
      <CardHeader>
        <CardTitle>Major News</CardTitle>
        <img src="/images/background.png"></img>
        <CardDescription>Card Description</CardDescription>
      </CardHeader>
      <CardContent>
        <p>In a quiet forest, sunlight filtered through emerald leaves, casting a gentle glow on the moss-covered ground. A babbling brook murmured nearby, as vibrant butterflies danced in the warm breeze. The air carried the sweet fragrance of wildflowers, creating a serene haven for contemplation. Nature's symphony played softly, inviting peace and tranquility to envelop the enchanted woodland.</p>
      </CardContent>
      <CardFooter>
        <p>Card Footer</p>
      </CardFooter>
    </Card>
  );
};

export default Cards;
