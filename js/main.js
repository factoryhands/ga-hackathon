// if HTML DOM Element that contains the map is found...
// var filter = '';

// $('.filterBtn').click(function(e) {
//     filter = e.target.innerHTML;

//     callUrl(filter);
// });

function initMap() {
    console.log( "ready!" );

    var filter = '';

    $('.filterBtn').click(function(e) {
        filter = e.target.innerHTML;

        placeMarker(filter);
    });

    if (document.getElementById('map-canvas')){
 
        // Coordinates to center the map
        var myLatlng = new google.maps.LatLng(47.6106694,-122.3338381);
     
        // Other options for the map, pretty much selfexplanatory
        var mapOptions = {
            zoom: 14,
            center: myLatlng,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
     
        // Attach a map to the DOM Element, with the defined settings
        var map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);

        var items = [];
        var sculpture = [];
        var structure = [];
        var photographs = [];
        var paintings = [];
        var mosaic = [];
        var mixedMedia = [];
        var installation = [];
        var infrastructure = [];
        var enviroments = [];
        var bronze = [];
        var twoD = [];

        function callUrl(){

            $.ajax({
                dataType: 'json',
                url: 'https://data.seattle.gov/resource/249z-59hj.json',
                success: function(res){
                    // console.log('success', res);
                    items = res;
                    for(var i = 0; i < items.length; i++){
                        console.log("items", items[i].classification);
                        switch(items[i].classification){
                            case "Sculpture":
                                sculpture.push(items[i]);
                                break;
                            case "Structure":
                                structure.push(items[i]);
                                break;
                            case "Photographs":
                                photographs.push(items[i]);
                                break;
                            case "Paintings":
                                paintings.push(items[i]);
                                break;
                            case "Mosaic": 
                                mosaic.push(items[i]);
                                break;
                            case "Mixed Media":
                                mixedMedia.push(items[i]);
                                break;
                            case "Installation": 
                                installation.push(items[i]);
                                break;
                            case "Infrastructure": 
                                infrastructure.push(items[i]);
                                break;
                            case "Enviroments":
                                enviroments.push(items[i]);
                                break;
                            case "Bronze":
                                bronze.push(items[i]);
                                break;
                            case "2d":
                                twoD.push(items[i]);
                                break;
                        }
                    }
                    console.log('sculpture', sculpture);
                    //placeMarker();

                }, 
                error: function(res){
                    console.log('error', res);
                }
            });
            // console.log(items.length);
            
            // console.log('sculpture', sculpture);
            
        }

        function placeMarker(filter){
            switch(filter.toLowerCase()){
                    case "sculpture":
                        for(var i = 0; i < sculpture.length; i++){
                            var myLatlng = new google.maps.LatLng(sculpture[i].latitude,sculpture[i].longitude);
                            var marker = new google.maps.Marker({
                               position: myLatlng,
                               map: map
                            });                            
                        }
                        break;
                    case "structure":
                        for(var i = 0; i < structure.length; i++){
                            var myLatlng = new google.maps.LatLng(structure[i].latitude,structure[i].longitude);
                            var marker = new google.maps.Marker({
                               position: myLatlng,
                               map: map
                            });
                        }
                        break;
                    case "photographs":
                        for(var i = 0; i < photographs.length; i++){
                            var myLatlng = new google.maps.LatLng(photographs[i].latitude,photographs[i].longitude);
                            var marker = new google.maps.Marker({
                               position: myLatlng,
                               map: map
                            });
                        }
                        break;
                    case "paintings":
                        for(var i = 0; i < paintings.length; i++){
                            var myLatlng = new google.maps.LatLng(paintings[i].latitude,paintings[i].longitude);
                            var marker = new google.maps.Marker({
                               position: myLatlng,
                               map: map
                            });
                        }
                        break;
                    case "mosaic":
                        for(var i = 0; i < mosaic.length; i++){
                            var myLatlng = new google.maps.LatLng(mosaic[i].latitude,mosaic[i].longitude); 
                            var marker = new google.maps.Marker({
                               position: myLatlng,
                               map: map
                            });
                        }
                        break;
                    case "mixed media":
                        for(var i = 0; i < mixedMedia.length; i++){
                            var myLatlng = new google.maps.LatLng(mixedMedia[i].latitude,mixedMedia[i].longitude);
                            var marker = new google.maps.Marker({
                               position: myLatlng,
                               map: map
                            });
                        }
                        break;
                    case "installation":
                        for(var i = 0; i < installation.length; i++){
                            var myLatlng = new google.maps.LatLng(installation[i].latitude,installation[i].longitude); 
                            var marker = new google.maps.Marker({
                               position: myLatlng,
                               map: map
                            });
                        }
                        break;
                    case "infrastructure":
                        for(var i = 0; i < infrastructure.length; i++){
                            var myLatlng = new google.maps.LatLng(infrastructure[i].latitude,infrastructure[i].longitude); 
                            var marker = new google.maps.Marker({
                               position: myLatlng,
                               map: map
                            });
                        }
                        break;
                    case "enviroments":
                        for(var i = 0; i < enviroments.length; i++){
                            var myLatlng = new google.maps.LatLng(enviroments[i].latitude,enviroments[i].longitude);
                            var marker = new google.maps.Marker({
                               position: myLatlng,
                               map: map
                            });
                        }
                        break;
                    case "bronze":
                        for(var i = 0; i < bronze.length; i++){
                            var myLatlng = new google.maps.LatLng(bronze[i].latitude,bronze[i].longitude);
                            var marker = new google.maps.Marker({
                               position: myLatlng,
                               map: map
                            });
                        }
                        break;
                    case "twoD":
                        for(var i = 0; i < twoD.length; i++){
                            var myLatlng = new google.maps.LatLng(twoD[i].latitude,twoD[i].longitude);

                            var marker = new google.maps.Marker({
                               position: myLatlng,
                               map: map
                            });
                        }
                        break;
                }
            
        }

        callUrl();


        //loops through data and finds specific node

        //loops through and finds lat:long data of map

        //puts markers on map

        //
    }


};