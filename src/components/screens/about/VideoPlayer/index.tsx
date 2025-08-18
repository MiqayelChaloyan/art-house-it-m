'use client'

import React, { useEffect, useState } from 'react';

import Link from 'next/link';
import { useLocale, useTranslations } from 'next-intl';

import { useDispatch, useSelector } from 'react-redux';
import { onPlay, setPath } from '@/src/store/player_reducer';

import Player from '@/src/components/components/player';
import Container from '@/src/components/components/container';

import { Pages } from '@/src/constants/pages';
import { MMArmenU } from '@/src/constants/font';

import { ImagePath } from '@/src/types';
import { ReduxType } from '@/src/types';

import { urlForImage } from '@/sanity/imageUrlBuilder';
import VideoPreview from '@/sanity/videoBuilder';

import cn from 'classnames';

import styles from './styles.module.sass';


interface Props {
    video: VIDEO;
};

const VideoPlayer = ({ video }: Readonly<Props>) => {
    const [url, setUrl] = useState<string>('');
    const path: ImagePath = urlForImage(video?.video_light);
    const isPlay = useSelector((state: ReduxType) => state.player.isPlay);
    const dispatch = useDispatch();
    const t = useTranslations();
    const localActive = useLocale();

    const handlePlayVideo = (path: string) => {
        dispatch(onPlay(!isPlay));
        dispatch(setPath(path));
    };

    useEffect(() => {
        if (video?.useUpload) {
            const videoUrl = VideoPreview(video?.videoFile);
            setUrl(videoUrl?.url);
        } else {
            setUrl(video?.video_url);
        }
    }, []);

    return (
        <div className={styles.container}>
            <Container className='container'>
                <div className={styles.player}>
                    <Player
                        path={path}
                        video_url={url}
                        handlePlayVideo={handlePlayVideo}
                    />
                </div>
            </Container>
            <div className={styles.button_group}>
                <Link
                    href={`/${localActive}${Pages.CONTACT}`}
                    aria-label={Pages.CONTACT}
                    className={cn(styles.link, MMArmenU.className)}
                    prefetch={true}
                    passHref
                >
                    {t('buttons.register-now')}
                </Link>
            </div>
        </div>
    )
};

export default React.memo(VideoPlayer);