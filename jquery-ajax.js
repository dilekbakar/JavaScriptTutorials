// JavaScript source code
  // AJAX cagrısı yapma
$.ajax({
    url: "https://api.example.com/data", // Istek yapılacak URL
    method: "GET", // Istek metodunu belirtme (GET, POST, vb.)
    dataType: "json", // Istek sonucunun veri tipi (json, xml, text, vb.)
    success: function(response) {
        // İstek basarılı oldugunda calısacak kod blogu
        console.log("Response:", response);
    },
    error: function(xhr, status, error) {
        // İstek basarısız oldugunda çalışacak kod blogu
        console.log("Error:", error);
    }
});

