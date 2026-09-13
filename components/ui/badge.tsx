import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const badgeVariants = cva(
  'inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold tracking-wide transition-colors',
  {
    variants: {
      variant: {
        default: 'bg-brand-primary/10 text-brand-primary border border-brand-primary/20',
        dark: 'bg-brand-dark/90 text-white backdrop-blur-sm',
        gold: 'bg-brand-gold/15 text-brand-gold border border-brand-gold/30',
        outline: 'border border-line text-brand-dark/80 bg-white/80',
        cream: 'bg-cream-200 text-brand-dark',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {}

export function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <span className={cn(badgeVariants({ variant, className }))} {...props} />
  );
}
