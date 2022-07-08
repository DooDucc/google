import { useState } from 'react';
import { NavLink } from 'react-router-dom';

import './Links.scss';

const links = [
    { url: '/search', text: '🔎 All' },
    { url: '/image', text: '📸 Images' },
    { url: '/news', text: '📰 News' },
    { url: '/video', text: '📺 Videos' },
];

const Links = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const handleClick = (index) => {
        setActiveIndex(index);
    };

    const handleActiveStyle = (index) => {
        if (index === activeIndex) {
            return 'link';
        } else {
            return 'link';
        }
    };
    return (
        <div className="links-wrapper">
            {links.map(({ url, text }, index) => (
                <NavLink key={index} className={handleActiveStyle(index)} to={url} onClick={() => handleClick(index)}>
                    {text}
                </NavLink>
            ))}
        </div>
    );
};

export default Links;
