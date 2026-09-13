import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 select-none cursor-pointer',
  {
    variants: {
      variant: {
        primary:
          'bg-brand-primary text-white shadow-sm hover:bg-brand-primary-hover active:scale-[0.98]',
        secondary:
          'bg-brand-navy text-white shadow-sm hover:bg-slate-800 active:scale-[0.98]',
        outline:
          'border border-brand-primary text-brand-primary bg-transparent hover:bg-brand-primary hover:text-white',
        outlineInvert:
          'border border-white/80 text-white bg-transparent hover:bg-white hover:text-brand-navy',
        ghost:
          'text-brand-dark hover:bg-cream-100 hover:text-brand-primary',
        link:
          'text-brand-primary underline-offset-4 hover:underline p-0 h-auto',
        whatsapp:
          'bg-[#25D366] text-white hover:bg-[#20bd5a] active:scale-[0.98]',
      },
      size: {
        default: 'h-11 px-5 py-2.5',
        sm: 'h-9 px-3.5 text-xs',
        lg: 'h-12 px-7 text-base font-medium',
        icon: 'h-10 w-10',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'default',
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = 'Button';
