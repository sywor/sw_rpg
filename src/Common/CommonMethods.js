import React from 'react';

const empty_square = "/img/empty_square.svg";
const red_square = "/img/red_square.svg";

function renderRedPoolIcon(value, key) {
    switch (value) {
        case 1:
            return <img src={red_square} className="pool-icon" key={key} alt="red_square" />;
        default:
            return <img src={empty_square} className="pool-icon" key={key} alt="empty_square" />;
    }
}

function enrichItems(base, items) {

    return items.map((item) => {

        if ('modification' in item) {
            const base_data = Object.assign({},
                {
                    id: item.id,
                    type_key: item.type_key,
                    equiped: item.equiped
                },
                base[item.type_key]);

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
        }

        return item;
    });
}

export { renderRedPoolIcon, enrichItems as enrichItem }