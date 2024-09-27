document.addEventListener('DOMContentLoaded', () => {
  const table = document.getElementById('chemicalsTable');
  const tbody = table.querySelector('tbody');
  let selectedRow = null;

  // Add a new row
  document.getElementById('addRow').addEventListener('click', () => {
    const newRow = tbody.insertRow();
    const checkboxCell = newRow.insertCell(0);
    const nameCell = newRow.insertCell(1);
    const vendorCell = newRow.insertCell(2);
    const densityCell = newRow.insertCell(3);
    const viscosityCell = newRow.insertCell(4);
    const packagingCell = newRow.insertCell(5);
    const packSizeCell = newRow.insertCell(6);
    const unitCell = newRow.insertCell(7);
    const QuantityCell = newRow.insertCell(8)

    checkboxCell.innerHTML = '<input type="checkbox">';
    nameCell.textContent = 'New Chemical';
    vendorCell.textContent = 'N/A';
    densityCell.textContent = 'N/A';
    viscosityCell.textContent = 'N/A';
    packagingCell.textContent = 'N/A';
    packSizeCell.textContent = 'N/A';
    unitCell.textContent = 'N/A';
    QuantityCell.textContent = 'N/A';
  });

  // Select a row on click
  tbody.addEventListener('click', (e) => {
    const row = e.target.closest('tr');
    if (row) {
      if (selectedRow) {
        selectedRow.classList.remove('selected');
      }
      row.classList.add('selected');
      selectedRow = row;
    }
  });

  // Move the selected row up
  document.getElementById('moveUp').addEventListener('click', () => {
    if (selectedRow && selectedRow.previousElementSibling) {
      tbody.insertBefore(selectedRow, selectedRow.previousElementSibling);
    }
  });

  // Move the selected row down
  document.getElementById('moveDown').addEventListener('click', () => {
    if (selectedRow && selectedRow.nextElementSibling) {
      tbody.insertBefore(selectedRow.nextElementSibling, selectedRow);
    }
  });

  // Delete the selected row
  document.getElementById('deleteRow').addEventListener('click', () => {
    if (selectedRow) {
      tbody.removeChild(selectedRow);
      selectedRow = null;
    }
  });

  // Refresh the data (dummy functionality)
  document.getElementById('refresh').addEventListener('click', () => {
    alert('Data refreshed!');
  });

  // Save the data (dummy functionality)
  document.getElementById('saveData').addEventListener('click', () => {
    alert('Data saved!');
  });
});
