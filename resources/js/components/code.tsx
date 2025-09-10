import React, { useCallback } from 'react';
// @ts-expect-error no types
import SyntaxHighlighter from 'react-syntax-highlighter';
// @ts-expect-error no types
import { a11yDark, a11yLight  } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { Button } from './ui/button';
import { CopyIcon } from 'lucide-react';
import { Tooltip, TooltipTrigger, TooltipContent } from './ui/tooltip';
import { toast } from 'sonner';
import { useAppearance } from '@/hooks/use-appearance';


type Props = React.PropsWithChildren<React.ComponentProps<typeof SyntaxHighlighter>>;

export function Code({ children, ...props }: Props) {
    children = (children ?? '').toString().trim();

    const { appearance } = useAppearance();

    const handleCopy = useCallback(() => {
        navigator.clipboard.writeText(children as string);
        toast.success('Code copied to clipboard');
    }, [children]);

    return (
        <div className="relative">
            <Tooltip>
                <TooltipTrigger asChild>
                    <Button onClick={handleCopy} variant={'ghost'} size={'icon'} className="absolute p-1 right-1 top-1 z-10">
                        <CopyIcon />
                    </Button>
                </TooltipTrigger>                
                <TooltipContent>Copy code</TooltipContent>
            </Tooltip>
            <SyntaxHighlighter {...props} style={appearance === 'dark' ? a11yDark : a11yLight} customStyle={{ background: 'var(--muted)' }} >
                {children}
            </SyntaxHighlighter>
        </div>
    );
}
