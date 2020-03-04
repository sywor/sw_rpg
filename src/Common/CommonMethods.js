import React from 'react';

const empty_square = "/img/empty_square.svg";
const red_square = "/img/red_square.svg";

function renderRedPoolIcon(value, key) {
    switch (value) {
        case 1:
            return <img src={red_square} className="pool-icon" key={key} />;
        default:
            return <img src={empty_square} className="pool-icon" key={key} />;
    }
}

function enrichItem(base, items) {

    return items.map((item) => {
        const base_data = Object.assign({}, { key: item.key }, base[item.key]);

        for (var key of Object.keys(item.modification)) {
            if (base_data.hasOwnProperty(key)) {
                if (typeof base_data[key] === 'string') {
                    base_data[key] += " " + item.modification[key];
                }
                else {
                    base_data[key] += item.modification[key];
                }
            }
        }

        base_data.condition = [].concat(item.condition);

        return base_data;
    });
}

export { renderRedPoolIcon, enrichItem }