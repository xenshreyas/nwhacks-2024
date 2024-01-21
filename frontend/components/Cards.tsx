"use client"

import React, { useEffect, useState } from 'react';
import { Card } from "@/components/ui/card";

const Cards = () => {
  const news = ['news1', 'news2', 'news3']

  return (
    <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
      {news.map((news_item, index) => (
        <Card key={index} style={{ margin: '10px', padding: '20px' }}>
          <h2 style={{ fontWeight: 'bold' }}>{news_item}</h2>
        </Card>
      ))}
    </div>
  );
};

export default Cards;