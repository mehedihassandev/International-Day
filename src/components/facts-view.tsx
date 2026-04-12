import React from 'react';
import { FACTS } from '@/lib/data';
import { ContentCard } from './content-card';

export function FactsView() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-1">
      {FACTS.map((fact) => (
        <ContentCard
          key={fact.id}
          id={fact.id}
          type="fact"
          emoji={fact.emoji}
          title={fact.title}
          description={fact.content}
        />
      ))}
    </div>
  );
}