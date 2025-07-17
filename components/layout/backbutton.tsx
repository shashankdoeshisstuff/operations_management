'use client';

import { useRouter } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface BackButtonProps {
  label?: string;
}

export function BackButton({ label = 'Back' }: BackButtonProps) {
  const router = useRouter();

  return (
    <Button
      variant="ghost"
      onClick={() => router.back()}
      className="flex items-center gap-2"
    >
      <ArrowLeft className="w-4 h-4" />
      {label}
    </Button>
  );
}
