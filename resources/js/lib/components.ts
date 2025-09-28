import { NavItem } from '@/types';
import { Filter } from 'lucide-react';

export const components: NavItem[] = [
    {
        title: 'Laravel Query Builder',
        href: route('mdx', 'laravel-query-builder'),
        icon: Filter,
    },
];
