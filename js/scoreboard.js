(function () {
    createScoreboardTable();
}());

function createScoreboardTable() {
    let tableRef = document.getElementsByClassName('participants__tbody')[0];
    participants.participants.forEach((entry, rowNumber) => {
        let row = tableRef.insertRow();
        createCell(row, +rowNumber + 1);
        createCell(row, entry.name, 'text_left');
        createCell(row, entry.country, 'text_left');
        createCell(row, entry.title, 'text_left');
        let score = Object.keys(participants.ceiling).reduce((accumulator, key) => +accumulator + +entry[key], 0);
        createCell(row, score);
    });
}

function createCell(row, value, cellClass) {
    let cell = row.insertCell();
    cell.appendChild(document.createTextNode(value + ''));
    cell.className = cellClass;
}