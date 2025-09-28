import { Breadcrumbs } from '@/components/breadcrumbs';
import { SidebarTrigger, useSidebar } from '@/components/ui/sidebar';
import { useAppearance } from '@/hooks/use-appearance';
import { cn } from '@/lib/utils';
import { type BreadcrumbItem as BreadcrumbItemType } from '@/types';
import { GitHubLogoIcon, Half2Icon } from '@radix-ui/react-icons';
import { useCallback } from 'react';
import { Button } from './ui/button';

export function AppSidebarHeader({ breadcrumbs = [] }: { breadcrumbs?: BreadcrumbItemType[] }) {
    const { appearance, updateAppearance } = useAppearance();

    const { open } = useSidebar();

    const toggleAppearance = useCallback(() => {
        updateAppearance(appearance === 'dark' ? 'light' : 'dark');
    }, [appearance, updateAppearance]);

    return (
        <header
            className={cn(
                'fixed top-0 right-0 z-40 flex h-16 w-full shrink-0 items-center justify-between gap-2 border-b border-sidebar-border/50 bg-background/80 px-6 backdrop-blur-sm transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12 group-has-data-[collapsible=icon]/sidebar-wrapper:w-[calc(100%-var(--sidebar-width-icon)-(--spacing(4))-2px)] md:px-4',
                open && 'md:w-[calc(100%-var(--sidebar-width))]',
            )}
        >
            <div className="flex items-center gap-2">
                <SidebarTrigger className="-ml-1" />
                <Breadcrumbs breadcrumbs={breadcrumbs} />
            </div>

            <div className="flex items-center gap-0.5">
                <Button size={'icon'} variant={'ghost'} asChild>
                    <a href="https://github.com/Altsiris/shadcn-ui-registry" target="_blank" referrerPolicy="no-referrer" className="">
                        <GitHubLogoIcon />
                    </a>
                </Button>
                <Button size={'icon'} variant={'ghost'} onClick={toggleAppearance}>
                    <Half2Icon />
                </Button>
            </div>
        </header>
    );
}
