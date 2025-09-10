import { Skeleton } from './ui/skeleton';

export default function LoadingMdx() {
    return (
        <div>
            <div className="flex items-center justify-center py-8">
                <svg
                    className="h-8 w-8 animate-spin text-gray-500"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    aria-label="Loading"
                >
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
                </svg>
                <span className="ml-3 text-sm text-gray-700">Loading content…</span>
            </div>

            <Skeleton className="mx-auto h-48 w-1/2" />
        </div>
    );
}
