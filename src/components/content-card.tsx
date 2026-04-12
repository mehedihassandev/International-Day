import React from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { AIInteraction } from './ai-interaction';

interface ContentCardProps {
  type: 'fact' | 'recipe';
  emoji: string;
  title: string;
  description: string;
  details?: string[];
  id: string;
}

export function ContentCard({ type, emoji, title, description, details, id }: ContentCardProps) {
  return (
    <Card className="h-full flex flex-col overflow-hidden group hover:shadow-lg transition-all duration-300 border-border/50">
      <CardHeader className="relative pb-0">
        <div className="absolute top-4 right-4 text-4xl transform group-hover:scale-110 transition-transform duration-300">
          {emoji}
        </div>
        <CardTitle className="text-xl font-bold text-primary pr-12">
          {title}
        </CardTitle>
        <Badge variant={type === 'fact' ? 'secondary' : 'outline'} className="w-fit mt-2 capitalize font-medium">
          {type}
        </Badge>
      </CardHeader>
      
      <CardContent className="flex-1 mt-4 space-y-3">
        <p className="text-muted-foreground text-sm leading-relaxed">
          {description}
        </p>
        
        {details && details.length > 0 && (
          <div className="mt-4 pt-4 border-t border-border/40">
            <h4 className="text-xs font-bold uppercase tracking-wider text-secondary mb-2">Highlights</h4>
            <ul className="grid grid-cols-1 gap-1">
              {details.slice(0, 3).map((item, idx) => (
                <li key={idx} className="text-xs flex items-start gap-2 text-muted-foreground">
                  <span className="text-secondary mt-1">•</span>
                  {item}
                </li>
              ))}
              {details.length > 3 && (
                <li className="text-[10px] italic text-muted-foreground/60 ml-4">and more...</li>
              )}
            </ul>
          </div>
        )}
      </CardContent>

      <CardFooter className="pt-0 pb-6 flex justify-between items-center">
        <AIInteraction 
          type={type} 
          title={title} 
          content={description + (details ? ' ' + details.join(', ') : '')} 
        />
      </CardFooter>
    </Card>
  );
}