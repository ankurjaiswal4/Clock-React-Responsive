import React from 'react';
const Clock = () => {
    var inc = 1000;

    function clock() {
        const date = new Date();

        const hours = ((date.getHours() + 11) % 12 + 1);
        const minutes = date.getMinutes();
        const seconds = date.getSeconds();

        const hour = hours * 30;
        const minute = minutes * 6;
        const second = seconds * 6;

        document.querySelector('.hour').style.transform = `rotate(${hour}deg)`
        document.querySelector('.minute').style.transform = `rotate(${minute}deg)`
        document.querySelector('.second').style.transform = `rotate(${second}deg)`
    }

    setInterval(clock, inc);

    return (
        <div className="clock-wrapper">
            <div className="clock">
                <div className="wrap">
                    <span className="hour"></span>
                    <span className="minute"></span>
                    <span className="second"></span>
                    <span className="dot"></span>
                </div>
            </div>
        </div>
    );
}

export default Clock;