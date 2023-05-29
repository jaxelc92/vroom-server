const button = document.getElementById('createRoomButton');

button.addEventListener('click', () => {
    fetch("http://localhost:3000/rooms/create.json", {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            "w2g_api_key": "71qvndbcxph4ao2gwfps9ioo11mo62azb18ab0tmff08fmsce2o747n5p0pw8c71",
            "share": "https://vimeo.com/831069425?share=copy",
            "bg_color": "#3F3452",
            "bg_opacity": "100"
            })
        })
    .then(response => response.json())
    .then(function (data) {
        console.log(data)
        console.log("W2G: Here is your room! \n https://w2g.tv/rooms/" + data.streamkey);
    })
  .catch(error => {
    // Handle any errors
    console.error(error);
  });
});