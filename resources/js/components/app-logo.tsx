import AppLogoIcon from './app-logo-icon';

export default function AppLogo() {
    return (
        <>
            <div className="rounded-mdtext-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center bg-white">
                <AppLogoIcon className="text-white dark:text-black" />
            </div>
            <div className="ml-1 grid flex-1 text-left text-sm">
                <span className="mb-0.5 truncate leading-tight font-semibold">Altsiris - Shadcn UI</span>
            </div>
        </>
    );
}
