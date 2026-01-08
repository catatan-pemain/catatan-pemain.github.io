document.getElementById('goButton').addEventListener('click', function() {
    var url = document.getElementById('url').value;
    if (url) {
        if (!url.startsWith("http://") && !url.startsWith("https://")) {
            url = "https://" + url;  // Menambahkan "https://" jika tidak ada
        }
        document.getElementById('webView').src = url;
    }
});

document.getElementById('url').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        var url = document.getElementById('url').value;
        if (url) {
            if (!url.startsWith("http://") && !url.startsWith("https://")) {
                url = "https://" + url;  // Menambahkan "https://" jika tidak ada
            }
            document.getElementById('webView').src = url;
        }
    }
});
