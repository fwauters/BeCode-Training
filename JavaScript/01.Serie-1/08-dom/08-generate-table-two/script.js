// 08-dom/08-generate-table-two/script.js - 8.8: creating a table (2)

(() => {

    // your code here

    // Create a table in the element "target"
    let table = document.createElement("table");
    document.getElementById("target").appendChild(table);

    // Function that generate n rows
    function generateRow(n) { 
        for (let i = 0; i < n; i++) {
            // define the multiplicator
            mult = i + 1;
            // and pass them throught the addRow function
            addRow("table", n, mult);
        }
    }

    // Function that add rows
    function addRow(tableId, n, mult) {
        // Get reference of the table
        let tableRef = document.querySelector(tableId); 
        // Insert row at the end of the table
        let newRow = tableRef.insertRow(-1); 
        // Insert cells trought the generateCells function
        generateCells(n, newRow, mult);
    }

    // Function that generate n cells/columns
    function generateCells(n, newRow, m) {
        for (let i = 0; i < n; i++) {
            // and generate/insert there content
            x = newRow.insertCell(i);
            x.innerHTML = m * (i + 1);
        }
    }

    generateRow(10);

})();
