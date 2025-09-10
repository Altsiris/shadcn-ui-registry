import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { AlertCircle, AlertTriangle, Info } from 'lucide-react';

export function InfoAlert({ children }: { children: React.ReactNode }) {
    return (
        <Alert variant="default" className="border-blue-500 bg-blue-50 dark:border-blue-800 dark:bg-blue-950">
            <Info className="h-5 w-5 text-blue-500" />
            <AlertTitle>Info</AlertTitle>
            <AlertDescription>{children}</AlertDescription>
        </Alert>
    );
}

export function WarningAlert({ children }: { children: React.ReactNode }) {
    return (
        <Alert variant="default" className="border-yellow-500 bg-yellow-50 dark:border-yellow-800 dark:bg-yellow-950">
            <AlertTriangle className="h-5 w-5 text-yellow-500" />
            <AlertTitle>Warning</AlertTitle>
            <AlertDescription>{children}</AlertDescription>
        </Alert>
    );
}

export function DangerAlert({ children }: { children: React.ReactNode }) {
    return (
        <Alert variant="default" className="border-red-500 bg-red-50 dark:border-red-800 dark:bg-red-950">
            <AlertCircle className="h-5 w-5 text-red-500" />
            <AlertTitle>Danger</AlertTitle>
            <AlertDescription>{children}</AlertDescription>
        </Alert>
    );
}
