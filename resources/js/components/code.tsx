import { useAppearance } from '@/hooks/use-appearance';
import { CopyIcon } from 'lucide-react';
import React, { useCallback } from 'react';
// @ts-expect-error no types
import { a11yDark, a11yLight } from 'react-syntax-highlighter/dist/esm/styles/hljs';
// @ts-expect-error no types
import SyntaxHighlighter from 'react-syntax-highlighter';
import { toast } from 'sonner';
import { Button } from './ui/button';
import { Tooltip, TooltipContent, TooltipTrigger } from './ui/tooltip';

type Props = React.PropsWithChildren<React.ComponentProps<typeof SyntaxHighlighter>>;

export function Code({ children, ...props }: Props) {
    children = ((children as string) ?? '').toString().trim();

    const { appearance } = useAppearance();

    const handleCopy = useCallback(() => {
        navigator.clipboard.writeText(children as string);
        toast.success('Code copied to clipboard');
    }, [children]);

    return (
        <div className="relative">
            <Tooltip>
                <TooltipTrigger asChild>
                    <Button onClick={handleCopy} variant={'ghost'} size={'icon'} className="absolute top-1 right-1 z-10 p-1">
                        <CopyIcon />
                    </Button>
                </TooltipTrigger>
                <TooltipContent>Copy code</TooltipContent>
            </Tooltip>
            <SyntaxHighlighter {...props} style={appearance === 'dark' ? a11yDark : a11yLight} customStyle={{ background: 'var(--muted)' }}>
                {children}
            </SyntaxHighlighter>
        </div>
    );
}

export function CodeDiff({ children, language = 'typescript' }: React.PropsWithChildren<{ language?: string }>) {
    const lines = (children ?? '').toString().trim().split('\n');
    const addedLinesIndices = lines
        .map((line, index) => (line.startsWith('+') && !line.startsWith('+++') ? index + 1 : -1))
        .filter((index) => index !== -1);
    const removedLinesIndices = lines
        .map((line, index) => (line.startsWith('-') && !line.startsWith('---') ? index + 1 : -1))
        .filter((index) => index !== -1);

    return (
        <Code
            language={language}
            wrapLines
            showLineNumbers
            lineProps={(lineNumber: number) => {
                const style: React.CSSProperties = {};

                if (addedLinesIndices.includes(lineNumber)) {
                    style.backgroundColor = 'rgba(0, 255, 0, 0.2)';
                } else if (removedLinesIndices.includes(lineNumber)) {
                    style.backgroundColor = 'rgba(255, 0, 0, 0.2)';
                }

                return { style, 'data-line-number': lineNumber };
            }}
        >
            {lines.map((line) => (line.startsWith('+') || line.startsWith('-') ? line.slice(1) : line)).join('\n')}
        </Code>
    );
}
