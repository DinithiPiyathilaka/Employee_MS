function saveEmployee(){

    let name=$('#exampleFormControlInput2').val();
    let address=$('#exampleFormControlInput3').val();
    let number=$('#exampleFormControlInput4').val();

    $.ajax({
        method:"POST",
        contentType:"application/json",
        url:"http://localhost:8080/api/v1/employee/saveEmployee",
        async:true,
        data:JSON.stringify({
            "empID":"",
            "empName":name,
            "empAddress":address,
            "empMNumber":number
        }),
        success: function (data) {
            alert("saved")
            getAllEmployees()
        },
        error: function (xhr, exception) {
            alert("rrrrError")
        }
    })

}