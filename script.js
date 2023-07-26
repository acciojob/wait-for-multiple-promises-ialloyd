//your JS code here. If required.
const output = document.querySelector('#output');
const loadingRow = document.createElement('tr');
loadingRow.id = 'loading';
const loadingCell = document.createElement('td');
loadingCell.colSpan = 2;
loadingCell.textContent = 'Loading...';
loadingRow.appendChild(loadingCell);
output.appendChild(loadingRow);

const promises = [];

for (let i = 0; i < 3; i++) {
    promises.push(new Promise((resolve) => {
        const time = Math.random() * 2000 + 1000;
        setTimeout(() => {
            resolve([`Promise ${i + 1}`, time / 1000]);
        }, time);
    }));
}

Promise.all(promises).then((results) => {
    output.removeChild(loadingRow);
    let totalTime = 0;
    results.forEach(([name, time]) => {
        totalTime += time;
        const row = document.createElement('tr');
        const nameCell = document.createElement('td');
        nameCell.textContent = name;
        row.appendChild(nameCell);
        const timeCell = document.createElement('td');
        timeCell.textContent = time.toFixed(3);
        row.appendChild(timeCell);
        output.appendChild(row);
    });
    const totalRow = document.createElement('tr');
    const totalNameCell = document.createElement('td');
    totalNameCell.textContent = 'Total';
    totalRow.appendChild(totalNameCell);
    const totalTimeCell = document.createElement('td');
    totalTimeCell.textContent = (totalTime).toFixed(3);
    totalRow.appendChild(totalTimeCell);
    output.appendChild(totalRow);
});
