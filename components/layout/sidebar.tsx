'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Home,
  Users,
  Briefcase,
  MessageSquare,
  Settings,
  User,
  Plus,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { ScrollArea } from '@/components/ui/scroll-area';

const navItems = [
  { name: 'Dashboard', icon: Home, href: '/' },
  { name: 'Clients', icon: Users, href: '/clients' },
  { name: 'Talents', icon: User, href: '/talents' },
  { name: 'Gigs', icon: Briefcase, href: '/gigs' },
  { name: 'Comms Hub', icon: MessageSquare, href: '/comms' },
  { name: 'Settings', icon: Settings, href: '/settings' },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="hidden md:flex w-64 shrink-0 flex-col border-r bg-muted/40">
      {/* Header */}
      <div className="h-14 border-b px-4 flex items-center lg:h-[60px] lg:px-6">
        <Link href="/" className="text-xl font-bold text-primary">
          Ops Manage
        </Link>
      </div>

      {/* Nav */}
      <ScrollArea className="flex-1 px-2 py-4 lg:px-4">
        <nav className="space-y-1">
          {navItems.map((item) => {
            const isActive =
              item.href === '/'
                ? pathname === '/'
                : pathname.startsWith(item.href);

            return (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  'flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors',
                  isActive
                    ? 'bg-muted text-primary'
                    : 'text-muted-foreground hover:bg-muted hover:text-primary'
                )}
              >
                <item.icon className="h-4 w-4" />
                {item.name}
              </Link>
            );
          })}
        </nav>
      </ScrollArea>

      {/* Footer */}
      <div className="p-4 mt-auto">
        <Button className="w-full">
          <Plus className="h-4 w-4 mr-2" />
          New Client
        </Button>
      </div>
    </div>
  );
}
