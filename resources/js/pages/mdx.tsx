import LoadingMdx from '@/components/loading-mdx';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';
import React from 'react';

type Props = {
    slug: string;
    slugHeadline: string;
};

const breadcrumbs: BreadcrumbItem[] = [
    //
];

export default function Mdx({ slug, slugHeadline }: Props) {
    const MdxComponent = React.useMemo(() => React.lazy(() => import(`./mdx/${slug}.mdx`)), [slug]);

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title={slugHeadline} />
            <div className="mx-auto prose dark:prose-invert">
                <React.Suspense fallback={<LoadingMdx />}>
                    <MdxComponent />
                </React.Suspense>
            </div>
        </AppLayout>
    );
}
