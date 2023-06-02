// JavaScript source code
  // AJAX çağrısı yapma
$.ajax({
    url: "https://api.example.com/data", // İstek yapılacak URL
    method: "GET", // İstek metodunu belirtme (GET, POST, vb.)
    dataType: "json", // İstek sonucunun veri tipi (json, xml, text, vb.)
    success: function(response) {
        // İstek başarılı olduğunda çalışacak kod bloğu
        console.log("Response:", response);
    },
    error: function(xhr, status, error) {
        // İstek başarısız olduğunda çalışacak kod bloğu
        console.log("Error:", error);
    }
});

