// 08-dom/07-generate-table-one/script.js - 8.7: creating a table (1)


(() => {

    // your code here

    // Create a table in the element "target"
    let table = document.createElement("table");
    document.getElementById("target").appendChild(table);

    function addRow(tableId) {
        // Get reference of the table
        let tableRef = document.querySelector(tableId);
      
        // Insert row at the end of the table
        let newRow = tableRef.insertRow(-1);
      
        // Insert cell in the row at index 0
        let newCell = newRow.insertCell(0);
    }

    // Function that generate n rows
    function generateRow(n) { 
        for (let i = 0; i < n; i++) {
            // and add them throught the addRow function
            addRow("table");    
        }
    }

    generateRow(10);
})();
