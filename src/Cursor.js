import React from 'react';
import './main.scss'
import './Cursor.scss';

const Cursor = () => {
    const cursorRef = React.useRef(null);

    React.useEffect(() => {
        document.addEventListener('mousemove', (event) => {
            const { clientX, clientY } = event;
            const mouseX = clientX - cursorRef.current.clientWidth / 2;
            const mouseY = clientY - cursorRef.current.clientHeight / 2;
            cursorRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
        });
    }, []);

    return <div className='app_cursor' ref={cursorRef} />;
};

export default Cursor;
