'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { Compass, UtensilsCrossed } from 'lucide-react';
import { cn } from '@/lib/utils';

/**
 * Premium Navigation component for the Bangladesh Cultural Showcase.
 * Features the national flag as a logo and modern tab-based switching.
 */
export function Navigation() {
  const pathname = usePathname();

  const navItems = [
    { name: 'Explore Facts', href: '/', icon: Compass },
    { name: 'Bengali Kitchen', href: '/foods', icon: UtensilsCrossed },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full glass shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo Section */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative h-12 w-12 flex items-center justify-center">
              {/* Stylized BD Flag Logo */}
              <div className="absolute inset-0 bg-bd-green rounded-xl rotate-3 group-hover:rotate-0 transition-transform duration-300 shadow-lg" />
              <div className="relative h-6 w-6 bg-bd-red rounded-full shadow-inner animate-glow" />
            </div>
            <div className="hidden sm:block">
              <span className="text-xl font-black tracking-tight text-bd-green block leading-none">
                INTERNATIONAL <span className="text-bd-red">DAY</span>
              </span>
              <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-muted-foreground">
                Heritage of Bangladesh
              </span>
            </div>
          </Link>

          {/* Navigation Items */}
          <div className="flex items-center gap-2 bg-muted/30 p-1 rounded-2xl border">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              const Icon = item.icon;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    'relative flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300',
                    isActive ? 'text-white' : 'text-muted-foreground hover:text-foreground'
                  )}
                >
                  {isActive && (
                      <motion.div
                        layoutId="nav-pill"
                        className="absolute inset-0 bg-bd-green shadow-md rounded-xl"
                        initial={false}
                        transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                      />
                  )}
                  <Icon className={cn('h-4 w-4 relative z-10', isActive && 'animate-pulse')} />
                  <span className="relative z-10">{item.name}</span>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
}
