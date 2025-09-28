import { AlertDescription, AlertTitle, Alert as AlertUI } from '@/components/ui/alert';
import { cn } from '@/lib/utils';
import { cva, type VariantProps } from 'class-variance-authority';
import { AlertCircle, AlertTriangle, Info, LucideProps } from 'lucide-react';
import React from 'react';

type variant = 'info' | 'warning' | 'danger';

type AlertProps = React.PropsWithChildren<VariantProps<typeof alertVariants> & { variant?: variant }>;

const alertVariants = cva<{ variant: { [key in variant]: string } }>('z-0 border-l-4 p-4', {
    variants: {
        variant: {
            info: 'border-blue-500 bg-blue-50 dark:border-blue-800 dark:bg-blue-950',
            warning: 'border-yellow-500 bg-yellow-50 dark:border-yellow-800 dark:bg-yellow-950',
            danger: 'border-red-500 bg-red-50 dark:border-red-800 dark:bg-red-950',
        },
    },
    defaultVariants: {
        variant: 'info',
    },
});

const iconVariants = cva<{ variant: { [key in variant]: string } }>('size-5', {
    variants: {
        variant: {
            info: 'text-blue-500',
            warning: 'text-yellow-500',
            danger: 'text-red-500',
        },
    },
    defaultVariants: {
        variant: 'info',
    },
});

export function AlertIcon({ variant, ...props }: LucideProps & { variant: variant }) {
    const iconProps = { ...props, className: cn(iconVariants({ variant })) };

    switch (variant) {
        case 'warning':
            return <AlertTriangle {...iconProps} />;
        case 'danger':
            return <AlertCircle {...iconProps} />;
        default:
            return <Info {...iconProps} />;
    }
}

export function Alert({ children, variant = 'info' }: AlertProps) {
    return (
        <AlertUI className={cn(alertVariants({ variant }))}>
            <AlertIcon variant={variant} />
            <AlertTitle className="capitalize">{variant}</AlertTitle>
            <AlertDescription>{children}</AlertDescription>
        </AlertUI>
    );
}
