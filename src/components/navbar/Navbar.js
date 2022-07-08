/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react';
import classNames from 'classnames/bind';

import styles from './Navbar.module.scss';
import Search from '../search/Search';

const cx = classNames.bind(styles);

const Navbar = () => {
    return (
        <div className={cx('navbar')}>
            <div className={cx('nav-wrapper')}>
                <a className={cx('logo')} href="/">
                    <span style={{ color: 'blue' }}>G</span>
                    <span style={{ color: 'red' }}>o</span>
                    <span style={{ color: 'red' }}>o</span>
                    <span style={{ color: 'blue' }}>g</span>
                    <span style={{ color: 'orange' }}>l</span>
                    <span style={{ color: 'green' }}>e</span>
                </a>
                <Search />
            </div>
        </div>
    );
};

export default Navbar;
