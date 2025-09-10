import { Breadcrumbs } from '@/components/breadcrumbs';
import { SidebarTrigger } from '@/components/ui/sidebar';
import { type BreadcrumbItem as BreadcrumbItemType } from '@/types';
import { GitHubLogoIcon, Half2Icon } from '@radix-ui/react-icons';
import { Button } from './ui/button';

export function AppSidebarHeader({ breadcrumbs = [] }: { breadcrumbs?: BreadcrumbItemType[] }) {
    const toggleAppearance = () => {
        document?.documentElement?.classList?.toggle('dark');
    };

    return (
        <header className="sticky top-0 left-0 flex h-16 shrink-0 items-center justify-between gap-2 border-b border-sidebar-border/50 px-6 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12 md:px-4">
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
