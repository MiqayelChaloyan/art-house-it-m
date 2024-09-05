'use client'

import React from 'react';

import Link from 'next/link';
import { useLocale, useTranslations } from 'next-intl';

import { useDispatch, useSelector } from 'react-redux';
import { onPlay, setPath } from '@/store/player_reducer';

import Player from '@/components/components/player';
import Container from '@/components/components/container';

import { Pages } from '@/constants/pages';
import { ImagePath } from '@/types';
import { ReduxType } from '@/types';

import { urlForImage } from '../../../../../sanity/imageUrlBuilder';

import cn from 'classnames';

import styles from './styles.module.sass';
import { MMArmenU } from '@/constants/font';


interface Props {
    video: VIDEO;
};

const VideoPlayer = ({ video }: Readonly<Props>) => {
    const path: ImagePath = urlForImage(video?.video_light)
    const isPlay = useSelector((state: ReduxType) => state.player.isPlay);
    const dispatch = useDispatch();
    const t = useTranslations();
    const localActive = useLocale();

    const handlePlayVideo = (path: string) => {
        dispatch(onPlay(!isPlay));
        dispatch(setPath(path));
    };

    return (
        <div className={styles.container}>
            <Container className='container'>
                <div className={styles.player}>
                    <Player
                        path={path}
                        video_url={video?.video_url}
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