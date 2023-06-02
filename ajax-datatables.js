// JavaScript source code
//Ajax-datatable olusturma
$(document).ready(function () {
    $('#exampleTable').DataTable({
        "ajax": {
            "url": "https://api.example.com/data", 
            "dataSrc": ""
        },
        "columns": [
            { "data": "column1" },
            { "data": "column2" },
            { "data": "column3" }
        ]
    });
});

