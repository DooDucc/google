/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ReactPlayer from 'react-player';
import classNames from 'classnames/bind';

import { useResultContext } from '../../contexts/ResultContextProvider';
import Loading from '../loading/Loading';
import styles from './Results.module.scss';

const cx = classNames.bind(styles);

const Results = () => {
    const { results, isLoading, getResults, searchTerm } = useResultContext();
    const location = useLocation();

    useEffect(() => {
        if (searchTerm) {
            if (location.pathname === '/video') {
                getResults(`/search/q=${searchTerm} videos`);
            } else if (location.pathname === '/') {
                getResults(`/search/q=${searchTerm}&num=40`);
            } else {
                getResults(`${location.pathname}/q=${searchTerm}&num=40`);
            }
        }
    }, [searchTerm, location.pathname]);

    if (isLoading) {
        return <Loading />;
    }

    switch (location.pathname) {
        case '/search':
            return (
                <div className={cx('search')}>
                    <div className={cx('search-wrapper')}>
                        {results?.map(({ link, title }, index) => (
                            <div key={index} className={cx('search-result')}>
                                <a href={link} target="_blank" rel="noreferrer">
                                    <p className={cx('search-link')}>
                                        {link.length > 30 ? link.substring(0, 30) : link}
                                    </p>
                                    <p className={cx('search-title')}>{title}</p>
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            );
        case '/image':
            return (
                <div className={cx('images')}>
                    <div className={cx('images-wrapper')}>
                        {results?.map(({ image, link: { href, title } }, index) => (
                            <a href={href} target="_blank" key={index} rel="noreferrer" className={cx('image-link')}>
                                <img src={image?.src} alt={title} loading="lazy" />
                                <p className={cx('image-desc')}>{title}</p>
                            </a>
                        ))}
                    </div>
                </div>
            );
        case '/news':
            return (
                <div className={cx('news')}>
                    <div className={cx('news-wrapper')}>
                        {results?.map(({ links, source, title }, index) => (
                            <div key={index} className={cx('news-result')}>
                                <a
                                    style={{ textDecoration: 'none' }}
                                    href={links?.[0].href}
                                    target="_blank"
                                    rel="noreferrer "
                                >
                                    <p className={cx('news-title')}>{title}</p>
                                </a>
                                <div>
                                    <a className={cx('news-link')} href={source?.href} target="_blank" rel="noreferrer">
                                        {' '}
                                        {source?.href}
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            );
        case '/video':
            return (
                <div className={cx('videos')}>
                    <div className={cx('videos-wrapper')}>
                        {results?.results?.map((video, index) => (
                            <div key={index} className={cx('videos-result')}>
                                {video?.additional_links?.[0].href && (
                                    <ReactPlayer
                                        url={video?.additional_links?.[0].href}
                                        controls
                                        width="355px"
                                        height="200px"
                                    />
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            );

        default:
            return 'error';
    }
};

export default Results;
