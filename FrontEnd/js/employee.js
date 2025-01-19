getAllEmployees()
function saveEmployee() {
    let name = $('#exampleFormControlInput2').val();
    let address = $('#exampleFormControlInput3').val();
    let number = $('#exampleFormControlInput4').val();
    let department = $('#exampleFormControlSelect5').val();

    $.ajax({
        method: "POST",
        contentType: "application/json",
        url: "http://localhost:8080/api/v1/employee/saveEmployee",
        async: true,
        data: JSON.stringify({
            "empID": "",
            "empName": name,
            "empAddress": address,
            "empMNumber": number,
            "empDepartment": department,
        }),
        success: function (data) {
            Swal.fire({
                icon: 'success',
                title: 'Employee Saved',
                text: 'The employee details have been successfully saved!',
                confirmButtonText: 'OK'
            });
            getAllEmployees();
        },
        error: function (xhr, exception) {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Failed to save the employee details. Please try again.',
                confirmButtonText: 'OK'
            });
        }
    });
}

function updateEmployee() {
    let empID = $('#exampleFormControlInput1').val();
    let name = $('#exampleFormControlInput2').val();
    let address = $('#exampleFormControlInput3').val();
    let number = $('#exampleFormControlInput4').val();
    let department = $('#exampleFormControlSelect5').val();

    $.ajax({
        method: "PUT",
        contentType: "application/json",
        url: "http://localhost:8080/api/v1/employee/updateEmployee",
        async: true,
        data: JSON.stringify({
            "empID": empID,
            "empName": name,
            "empAddress": address,
            "empMNumber": number,
            "empDepartment": department,
        }),
        success: function (data) {
            Swal.fire({
                icon: 'success',
                title: 'Employee Updated',
                text: 'The employee details have been successfully updated!',
                confirmButtonText: 'OK'
            });
            getAllEmployees();
        },
        error: function (xhr, exception) {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Failed to update the employee details. Please try again.',
                confirmButtonText: 'OK'
            });
        }
    });
}

function deleteEmployee() {
    let empID = $('#exampleFormControlInput1').val();

    Swal.fire({
        title: 'Are you sure?',
        text: "This action cannot be undone!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
        if (result.isConfirmed) {
            $.ajax({
                method: "DELETE",
                url: "http://localhost:8080/api/v1/employee/deleteEmployee/" + empID,
                async: true,
                success: function (data) {
                    Swal.fire(
                        'Deleted!',
                        'The employee has been deleted.',
                        'success'
                    );
                    getAllEmployees();
                },
                error: function (xhr, exception) {
                    Swal.fire({
                        icon: 'error',
                        title: 'Error',
                        text: 'Failed to delete the employee. Please try again.',
                        confirmButtonText: 'OK'
                    });
                }
            });
        }
    });
}

function filterByDepartment() {
    let selectedDepartment = document.getElementById("filterDepartment").value.toLowerCase();
    let rows = document.querySelectorAll("#empTable tr");

    rows.forEach(row => {
        let departmentCell = row.querySelector("td:last-child");
        if (departmentCell) {
            let department = departmentCell.innerText.toLowerCase();
            if (selectedDepartment === "" || department === selectedDepartment) {
                row.style.display = ""; // Show row
            } else {
                row.style.display = "none"; // Hide row
            }
        }
    });
}

// Function to export employee table data to PDF
function exportTableToPDF() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    // Get table data
    const table = document.getElementById("empTable");
    const rows = table.getElementsByTagName("tr");

    // Add header to PDF
    let yOffset = 10; // Initial Y position for the table
    doc.setFontSize(12);
    doc.text("Employee List", 14, yOffset);
    yOffset += 10;

    // Define column headers (optional)
    const headers = ['EmpID', 'Name', 'Address', 'Mobile Number', 'Department'];
    let xOffset = 14;

    // Add headers to the PDF
    headers.forEach((header, index) => {
        doc.text(header, xOffset + (index * 40), yOffset);
    });

    yOffset += 10; // Move to the next line

    // Loop through rows and add data to the PDF
    for (let i = 0; i < rows.length; i++) {
        const cols = rows[i].getElementsByTagName("td");
        for (let j = 0; j < cols.length; j++) {
            doc.text(cols[j].innerText, xOffset + (j * 40), yOffset);
        }
        yOffset += 8; // Move to the next line
    }

    // Save the PDF
    doc.save("All_employees.pdf");
}

// Attach the export function to the button
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("exportBtn").addEventListener("click", exportTableToPDF);
});


// Function to highlight employee details based on search value
function highlightEmployee() {
    let searchValue = document.getElementById("searchEmpID").value.toLowerCase();
    let rows = document.querySelectorAll("#empTable tr");

    rows.forEach(row => {
        // Reset the content by removing previous highlights
        row.innerHTML = row.innerHTML.replace(/<mark>(.*?)<\/mark>/g, "$1");

        if (searchValue) {
            let columns = row.querySelectorAll("td");
            columns.forEach(col => {
                if (col.innerText.toLowerCase().includes(searchValue)) {
                    let regex = new RegExp(searchValue, "gi");
                    col.innerHTML = col.innerHTML.replace(regex, match => `<mark>${match}</mark>`);
                }
            });
        }
    });
}

// Attach the highlightEmployee function to the input's event listener
document.addEventListener("DOMContentLoaded", () => {
    const searchInput = document.getElementById("searchEmpID");
    if (searchInput) {
        searchInput.addEventListener("input", highlightEmployee);
    }
});


function getAllEmployees(){
    $.ajax({
        method:"GET",
        url:"http://localhost:8080/api/v1/employee/getAllEmployees",
        async:true,
        success: function (data) {
            if (data.code==="00"){
                $('#empTable').empty();
                for (let emp of data.content){
                    let empID=emp.empID
                    let name=emp.empName
                    let address=emp.empAddress
                    let number=emp.empMNumber
                    let department=emp.empDepartment

                    var row=`<tr><td>${empID}</td><td>${name}</td><td>${address}</td><td>${number}</td><td>${department}</td></tr>`;
                    $('#empTable').append(row);
                }
            }
        },
        error: function (xhr, exception) {
            alert("Error")
        }
    })

}
$(document).ready(function () {
    $(document).on('click', '#empTable tr', function () {
        var col0 = $(this).find('td:eq(0)').text();
        var col1 = $(this).find('td:eq(1)').text();
        var col2 = $(this).find('td:eq(2)').text();
        var col3 = $(this).find('td:eq(3)').text();
        var col4 = $(this).find('td:eq(4)').text();

        $('#exampleFormControlInput1').val(col0);
        $('#exampleFormControlInput2').val(col1);
        $('#exampleFormControlInput3').val(col2);
        $('#exampleFormControlInput4').val(col3);
        $('#exampleFormControlSelect5').val(col4);

    })
})