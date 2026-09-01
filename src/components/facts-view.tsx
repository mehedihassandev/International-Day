'use client';

import React from 'react';
import { Fact } from '@/data/facts';
import { useFacts } from '@/hooks/useFacts';
import { ContentCard } from './content-card';

export function FactsView() {
  const { data: factsResponse } = useFacts();
  const facts = factsResponse?.data || [];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-1">
      {facts.map((fact: Fact) => (
        <ContentCard
          key={fact.id}
          id={fact.id}
          type="fact"
          emoji="🇧🇩"
          title={fact.title}
          description={fact.description}
        />
      ))}
    </div>
  );
}