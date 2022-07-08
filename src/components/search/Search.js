import { useState, useEffect } from 'react';
import { useDebounce } from 'use-debounce';
import classNames from 'classnames/bind';

import Links from '../links/Links';
import { useResultContext } from '../../contexts/ResultContextProvider';
import styles from './Search.module.scss';

const cx = classNames.bind(styles);

const Search = () => {
    const [text, setText] = useState('');
    const { setSearchTerm } = useResultContext();
    const [debouncedValue] = useDebounce(text, 500);

    useEffect(() => {
        if (debouncedValue) {
            setSearchTerm(debouncedValue);
        }
    }, [debouncedValue]);

    return (
        <div className={cx('search')}>
            <input
                value={text}
                type="text"
                className={cx('search-input')}
                placeholder="🔎 Search Google or type URL"
                onChange={(e) => setText(e.target.value)}
            />
            <Links />
        </div>
    );
};

export default Search;
