// " iftp57qmjswvnwgj2uwy2p3uqh0y72 "
// [ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"]
// https://api.twitch.tv/kraken/channels/freecodecamp?

$(document).ready(function(){
    var streams = ["ESL_SC2", "esl_csgo", "coldside", "syndicate", "OgamingSC2", "cretetion", "freecodecamp", "habathcx", "RobotCaleb", "noobs2ninjas", "PGL", "lirik", "scump", "elded", "agony"];
    var url = "https://api.twitch.tv/kraken/streams/freecodecamp?client_id=iftp57qmjswvnwgj2uwy2p3uqh0y72";

    $.getJSON(url, function(data){
        if(data.stream === null)
            $("#fccStatus").html("Free Code Camp is currently OFFLINE");
        else
            $("#fccStatus").html("Free Code Camp is currently ONLINE");
    });


    for(var i=0; i<streams.length; i++)
    {
        $.ajax({
            type: "GET",
            url: "https://api.twitch.tv/kraken/channels/" + streams[i],
            headers: {
                "client-ID": "iftp57qmjswvnwgj2uwy2p3uqh0y72"
            },
            success: function(data1){
                console.log(data1.status); 
                var name = data1.name.toUpperCase(); 
                var url2 = "https://api.twitch.tv/kraken/streams/" + data1.name + "?client_id=iftp57qmjswvnwgj2uwy2p3uqh0y72";

                $.getJSON(url2, function(data2){
                    if(data2.stream === null && data1.status !== null)
                    {
                        $("#display").append('<table id="menu1"><tr><td id="logo"><img src="'+data1.logo+'"></td><td id="user"><a href="https://www.twitch.tv/'+data1.name+'" target="blank">'+name+'</a></td><td id="status">OFFLINE</td><td id="game">Null</td></tr></table>');
                    }
                    else if(data1.status === null)
                    {
                        $("#display").append('<table id="menu1"><tr><td id="logo"> <h3>N/A</h3> </td><td id="user"><a href="https://www.twitch.tv/'+data1.name+'" target="blank">'+name+'</a></td><td id="status">OFFLINE</td><td id="game">N/A</td></tr></table>');
                    }
                    else
                    {
                        $("#display").append('<table id="menu2"><tr><td id="logo"><img src="'+data1.logo+'"></td><td id="user"><a href="https://www.twitch.tv/'+data1.name+'" target="blank">'+name+'</a></td><td id="status">ONLINE</td><td id="game">'+data1.game+'</td></tr></table>');
                    }
                });
                //$("#display").prepend('<tr></tr>');
            },
            error: function(err) {
                alert("Error, User Not Found!!");
            }
        });
    }

});