const parentElement = document.getElementById('table-container'); 
const table = document.createElement('table');

for (let i = 0; i < 10; i++) {
    const row = document.createElement('tr');

    for (let j = 0; j < 10; j++) {
        const cell = document.createElement('td'); 
        const number = i * 10 + j + 1;
        const text = document.createTextNode(number);

        cell.appendChild(text);
        row.appendChild(cell);
    }

    table.appendChild(row);
}

parentElement.appendChild(table);



