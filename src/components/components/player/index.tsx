'use client'

import React from 'react';

import { usePathname } from 'next/navigation';

import { PiPlayCircleBold } from 'react-icons/pi';
import { MdPlayCircle } from 'react-icons/md';

import { ImagePath } from '@/types';

import colors from '@/themes';

import cn from 'classnames';

import styles from './styles.module.sass';


interface Props {
    path: ImagePath;
    video_url: string;
    handlePlayVideo: (argument: string) => void;
};

const Player = ({ path, video_url, handlePlayVideo }: Readonly<Props>) => {
    const pathname = usePathname();

    return (
        <div className={styles.playing} style={{ backgroundImage: `url(${path?.src})` }}>
            <button
                className={styles.icon}
                onClick={() => handlePlayVideo(video_url)}
            >
               <PiPlayCircleBold size={150} color={colors.white} />
            </button>
        </div>
    );
};

export default React.memo(Player);