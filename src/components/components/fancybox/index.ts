import React, { useEffect } from 'react';

import { Fancybox as NativeFancybox } from '@fancyapps/ui';
import '@fancyapps/ui/dist/fancybox/fancybox.css';
import { Options } from '@/src/types';

interface Props {
    children: React.ReactNode
    options: Options;
};

function Fancybox({ children, options }: Readonly<Props>) {
    const delegate = '[data-fancybox]';

    useEffect(() => {
        const opts = options || {};

        NativeFancybox.bind(delegate, opts);

        return () => {
            NativeFancybox.destroy();
        };
    }, [options]);

    return children;
}

export default Fancybox;
