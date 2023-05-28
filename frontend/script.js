fetch("https://api.w2g.tv/rooms/create.json", {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'charset': 'utf-8'
        },
        body: JSON.stringify({
            "w2g_api_key": "71qvndbcxph4ao2gwfps9ioo11mo62azb18ab0tmff08fmsce2o747n5p0pw8c71",
            "share": "https://www.youtube.com/watch?v=UePtoxDhJSw",
            "bg_color": "#00ff00",
            "bg_opacity": "50"
            })
        })
    .then(response => response.json())
    .then(function (data) {
        console.log("W2G: Here is your room! \n https://w2g.tv/rooms/" + data.streamkey);
    });