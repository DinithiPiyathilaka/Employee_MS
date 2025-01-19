# Employee Management System (EmployeeMS)

## Overview
This project is a simple **Employee Management System** built using **Spring Boot**. It allows users to manage employee information, including:

- Adding new employees
- Updating existing employees
- Deleting employees
- Retrieving employee details
- Uploading employee profile pictures
- Search and filtering option
- Exporting data into a pdf file

The system uses a **MySQL** database for persistent storage and offers **RESTful APIs** for handling employee-related operations.

---

## Setup Instructions

- **Prerequisites**
- **Java 8 or higher**
- **MySQL 5.7 or higher**
- **Maven or Gradle for dependency management**
- **IDE (IntelliJ IDEA, Eclipse, etc.)**

---

## Technologies Used

- **Spring Boot**: Backend framework
- **Spring Data JPA**: Database interaction
- **ModelMapper**: Object mapping between DTO and Entity
- **MySQL**: Database
- **Lombok**: Reduces boilerplate code
- **Spring MVC**: REST controllers
- **Spring Boot REST APIs**: Employee operations
- **File Upload**: Handles profile picture uploads

---


## Features Overview

### 1. Export Table to PDF
- **Feature**: Employees’ table data can be exported to a PDF document, including the employee ID, name, address, mobile number, and department. This functionality adds convenience for reporting and data export.
- **Technologies**:
  - **jsPDF**: A JavaScript library used to generate PDF documents in the browser. It allows you to capture the table's contents and format it neatly in a PDF.
  - **JavaScript**: For triggering the export function when the user clicks the "Export to PDF" button.

### 2. Employee Search & Highlight
- **Feature**: A search feature allows users to find an employee by their ID. The matching text within the table rows is highlighted, making it easier to identify the employee.
- **Technologies**:
  - **JavaScript/jQuery**: The search function dynamically filters and highlights employee records as the user types in the input box. The `mark` tag is used to highlight the matching text.
  - **Regular Expressions (RegEx)**: Used to match search terms across the text and highlight them in the table.

### 3. AJAX Integration for Employee Data Management
- **Feature**: The system uses AJAX to interact with the back-end server to fetch all employees, save new employees, update existing records, and delete employee records. This approach improves user experience by eliminating page reloads.
- **Technologies**:
  - **AJAX**: To make HTTP requests asynchronously to the back-end server, ensuring the page remains responsive while interacting with the server.
  - **jQuery**: Facilitates the AJAX calls and manipulates the DOM based on the server's response.

### 4. Form Validation and Feedback (SweetAlert2)
- **Feature**: The form provides real-time validation and feedback, ensuring that users are informed of errors (e.g., failed data submission or update) or success (e.g., successful data submission).
- **Technologies**:
  - **SweetAlert2**: A library for creating beautiful, customizable alerts. Used here to notify the user about the result of an action (such as success or failure of adding, updating, or deleting an employee).

### 5. Responsive Employee Table
- **Feature**: A table that lists employee details such as ID, name, address, mobile number, and department. This table is dynamically populated using data fetched from the server.
- **Technologies**:
  - **Bootstrap**: Provides responsive grid and table styling, ensuring that the employee table is well-organized and adapts to various screen sizes.
  - **jQuery**: Used to dynamically update the table rows based on data returned from the back-end server.

### 6. Dynamic Data Population and Editing
- **Feature**: When a user clicks on a table row, the employee details are dynamically populated into the form fields, allowing for editing of the selected employee’s details.
- **Technologies**:
  - **jQuery**: Handles the click event and dynamically populates the form fields with the selected employee's data.



---





