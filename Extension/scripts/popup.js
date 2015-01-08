$(document).ready(function() {
    console.log('ready');

    $.ajax({
            type: "GET",
            url: 'http://127.0.0.1:9393/',
        })
        .success(function(data) {
            console.dir(data);
            $('#quote').append(data);
            /*var pic = "<ul>",
                length = lengthOfHash(data['data']['children']),
                url, title;
            for (var i = 0; i < 7; i++) {
                rnjeesus = Math.floor(Math.random() * length) + 1;
                url = data.data.children[rnjeesus].data.url;
                title = data.data.children[rnjeesus].data.title;
                if (url.indexOf('gif') !== -1 && url.indexOf('gifv') === -1) {
                    pic += "<li>" + "<p>" + title + "</p>" + "<img src=\"" + url + "\">" + "</li>";
                }
            }

            pic += "</ul>";

            $('#pics').html(pic);*/



        })

});