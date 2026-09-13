import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-burnt-peach focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 select-none cursor-pointer',
  {
    variants: {
      variant: {
        primary:
          'bg-burnt-peach text-jet-black font-bold shadow-sm hover:bg-burnt-peach-hover active:scale-[0.98]',
        secondary:
          'bg-jet-black text-platinum shadow-sm hover:bg-jet-black/90 active:scale-[0.98]',
        outline:
          'border border-jet-black text-jet-black bg-transparent hover:bg-jet-black hover:text-platinum active:scale-[0.98]',
        outlineInvert:
          'border border-platinum text-platinum bg-transparent hover:bg-platinum hover:text-jet-black active:scale-[0.98]',
        soft:
          'bg-desert-sand text-jet-black font-semibold hover:bg-desert-sand/85 active:scale-[0.98]',
        ghost:
          'text-jet-black hover:bg-platinum hover:text-burnt-peach',
        link:
          'text-burnt-peach underline-offset-4 hover:underline p-0 h-auto font-medium',
        whatsapp:
          'bg-[#25D366] text-white hover:bg-[#20bd5a] active:scale-[0.98]',
      },
      size: {
        default: 'h-11 px-5 py-2.5',
        sm: 'h-9 px-3.5 text-xs',
        lg: 'h-12 px-7 text-base font-semibold',
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
