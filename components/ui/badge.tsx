import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const badgeVariants = cva(
  'inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold tracking-wide transition-colors',
  {
    variants: {
      variant: {
        default: 'bg-burnt-peach/15 text-burnt-peach border border-burnt-peach/30 font-semibold',
        dark: 'bg-jet-black/90 text-platinum backdrop-blur-xs border border-white/10',
        gold: 'bg-desert-sand/30 text-jet-black border border-desert-sand/60 font-semibold',
        outline: 'border border-dust-grey text-jet-black bg-white/90',
        cream: 'bg-platinum text-jet-black border border-dust-grey/60',
        accent: 'bg-burnt-peach text-jet-black font-bold',
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
