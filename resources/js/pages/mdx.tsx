import LoadingMdx from '@/components/loading-mdx';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';
import React from 'react';

type Props = {
    slug: string;
};

const breadcrumbs: BreadcrumbItem[] = [
    //
];

export default function Mdx({ slug }: Props) {
    const MdxComponent = React.useMemo(() => React.lazy(() => import(`./mdx/${slug}.mdx`)), [slug]);

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title={slug} />
            <div className="mx-auto prose dark:prose-invert">
                <React.Suspense fallback={<LoadingMdx />}>
                    <MdxComponent />
                </React.Suspense>
            </div>
        </AppLayout>
    );
}
