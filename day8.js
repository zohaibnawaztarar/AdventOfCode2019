const fs = require('fs');


const assign = (map, x, y, value) => {
    if (!map[x]) map[x] = {};
    if (value !== 2) map[x][y] = value;
}

(function () {
    fs.open('input/day8', 'r', (err, file) => {
        fs.readFile(file, {encoding: 'utf-8'}, (err, data) => {
            const list = data.match(/.{1,150}/g);
    let index = 0;
    let count = 150;
    for (let i = 0; i < list.length; i++) {
        const layer = list[i];
        const thisCount = layer.match(/0/g).length;
        if (thisCount < count) {
            index = i;
            count = thisCount;
        }
    }
    const bestLayer = list[index];
    console.log(bestLayer.match(/1/g).length * bestLayer.match(/2/g).length);
});
});
})();

(function () {
    fs.open('input/day8', 'r', (err, file) => {
        fs.readFile(file, {encoding: 'utf-8'}, (err, data) => {
            const rowCount = 6;
    const columnCount = 25;
    const instructionLength = rowCount * columnCount;
    const list = data.match(new RegExp('.{1,' + instructionLength + '}', 'g')).reverse();
    const map = {};

    for (const layer of list) {
        const rows = layer.match(new RegExp('.{1,' + columnCount + '}', 'g'));
        for (let i = 0; i < rows.length; i++) {
            const row = rows[i];
            for (let j = 0; j < row.length; j++) {
                const value = Number(row[j]);
                assign(map, j, i, value);
            }
        }
    }

    for (let i = 0; i < rowCount; i++) {
        let string = '';
        for (let j = 0; j < columnCount; j++) {
            string += map[j][i] === 1 ? '□' : ' ';
        }
        console.log(string);
    }
});
});
})();