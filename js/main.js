// if HTML DOM Element that contains the map is found...
// var filter = '';

// $('.filterBtn').click(function(e) {
//     filter = e.target.innerHTML;

//     callUrl(filter);
// });

function initMap() {
    console.log( "ready!" );
    console.log(google.maps)

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
            zoomControl: true,
            mapTypeControl: false,
            zoomControlOptions: {
            position: google.maps.ControlPosition.LEFT_CENTER
          },
            // mapTypeId: google.maps.MapTypeId.ROADMAP
            styles: [
    {
        "featureType": "all",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "all",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "all",
        "elementType": "labels.text",
        "stylers": [
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "all",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "administrative",
        "elementType": "labels.text",
        "stylers": [
            {
                "visibility": "simplified"
            },
            {
                "weight": "3.36"
            },
            {
                "color": "#898989"
            }
        ]
    },
    {
        "featureType": "administrative",
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "administrative.country",
        "elementType": "labels.text",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "administrative.country",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "administrative.province",
        "elementType": "labels.text",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "administrative.province",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "administrative.locality",
        "elementType": "labels.text",
        "stylers": [
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "administrative.neighborhood",
        "elementType": "labels.text",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "administrative.neighborhood",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "administrative.land_parcel",
        "elementType": "labels.text",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#FBFCF4"
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "labels.text",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "landscape.natural",
        "elementType": "labels.text",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "labels.text",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "poi.attraction",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#ffed00"
            }
        ]
    },
    {
        "featureType": "poi.business",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#FFED00"
            }
        ]
    },
    {
        "featureType": "poi.government",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#002fa7"
            }
        ]
    },
    {
        "featureType": "poi.park",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#E9F8DA"
            }
        ]
    },
    {
        "featureType": "poi.school",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#002fa7"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#0F0919"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "labels.text",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "transit",
        "elementType": "labels.text",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "transit.line",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "saturation": -100
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#E4F7F7"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "labels.text",
        "stylers": [
            {
                "visibility": "simplified"
            }
        ]
    }
]
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
                        //console.log("items", items[i].classification);
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
                    //console.log('sculpture', sculpture);
                    //placeMarker();

                }, 
                error: function(res){
                    console.log('error', res);
                }
            });
            // console.log(items.length);
            
            // console.log('sculpture', sculpture);
            
        }

        var markers = [];

        function placeMarker(filter){
            var icon = 'img/map_marker.png';
            for(var i = 0; i < markers.length; i++) {
                markers[i].setMap(null);
            }
            markers = [];


            switch(filter.toLowerCase()){
                    case "sculpture":
                            //markers = sculpture;
                        for(var i = 0; i < sculpture.length; i++){
                            var myLatlng = new google.maps.LatLng(sculpture[i].latitude,sculpture[i].longitude);
                            var marker = new google.maps.Marker({
                               position: myLatlng,
                               icon: icon,
                               map: map
                            });

                            markers.push(marker);                            
                        }
                        break;
                    case "structure":
                            //markers = structure; 
                        for(var i = 0; i < structure.length; i++){
                            var myLatlng = new google.maps.LatLng(structure[i].latitude,structure[i].longitude);
                            var marker = new google.maps.Marker({
                               position: myLatlng,
                               icon: icon,
                               map: map
                            });

                            markers.push(marker);
                        }
                        break;
                    case "photographs":
                            //markers = photographs;
                        for(var i = 0; i < photographs.length; i++){
                            var myLatlng = new google.maps.LatLng(photographs[i].latitude,photographs[i].longitude);
                            var marker = new google.maps.Marker({
                               position: myLatlng,
                               icon: icon,
                               map: map
                            });

                            markers.push(marker);
                        }
                        break;
                    case "paintings":
                            //markers = paintings;
                        for(var i = 0; i < paintings.length; i++){
                            var myLatlng = new google.maps.LatLng(paintings[i].latitude,paintings[i].longitude);
                            var marker = new google.maps.Marker({
                               position: myLatlng,
                               icon: icon,
                               map: map
                            });

                            markers.push(marker);
                        }
                        break;
                    case "mosaic":
                            //markers = mosaic;
                        for(var i = 0; i < mosaic.length; i++){
                            var myLatlng = new google.maps.LatLng(mosaic[i].latitude,mosaic[i].longitude); 
                            var marker = new google.maps.Marker({
                               position: myLatlng,
                               icon: icon,
                               map: map
                            });

                            markers.push(marker);
                        }
                        break;
                    case "mixed media":
                            //markers = mixedMedia;
                        for(var i = 0; i < mixedMedia.length; i++){
                            var myLatlng = new google.maps.LatLng(mixedMedia[i].latitude,mixedMedia[i].longitude);
                            var marker = new google.maps.Marker({
                               position: myLatlng,
                               icon: icon,
                               map: map
                            });

                            markers.push(marker);
                        }
                        break;
                    case "installation":
                            //markers = installation;
                        for(var i = 0; i < installation.length; i++){
                            var myLatlng = new google.maps.LatLng(installation[i].latitude,installation[i].longitude); 
                            var marker = new google.maps.Marker({
                               position: myLatlng,
                               icon: icon,
                               map: map
                            });

                            markers.push(marker);
                        }
                        break;
                    case "infrastructure":
                            //markers = infrastructure;
                        for(var i = 0; i < infrastructure.length; i++){
                            var myLatlng = new google.maps.LatLng(infrastructure[i].latitude,infrastructure[i].longitude); 
                            var marker = new google.maps.Marker({
                               position: myLatlng,
                               icon: icon,
                               map: map
                            });

                            markers.push(marker);
                        }
                        break;
                    case "enviroments":
                            //markers = enviroments;
                        for(var i = 0; i < enviroments.length; i++){
                            var myLatlng = new google.maps.LatLng(enviroments[i].latitude,enviroments[i].longitude);
                            var marker = new google.maps.Marker({
                               position: myLatlng,
                               icon: icon,
                               map: map
                            });

                            markers.push(marker);
                        }
                        break;
                    case "bronze":
                            //markers = bronze;
                        for(var i = 0; i < bronze.length; i++){
                            var myLatlng = new google.maps.LatLng(bronze[i].latitude,bronze[i].longitude);
                            var marker = new google.maps.Marker({
                               position: myLatlng,
                               icon: icon,
                               map: map
                            });

                            markers.push(marker);
                        }
                        break;
                    case "2d":
                            //markers = twoD;
                        for(var i = 0; i < twoD.length; i++){
                            var myLatlng = new google.maps.LatLng(twoD[i].latitude,twoD[i].longitude);

                            var marker = new google.maps.Marker({
                               position: myLatlng,
                               icon: icon,
                               map: map
                            });

                            markers.push(marker);
                        }
                        break;
                }
                // for(var i = 0; i < markers.length; i++){
                //     var myLatlng = new google.maps.LatLng(markers[i].latitude,markers[i].longitude);

                //     var marker = new google.maps.Marker({
                //        position: myLatlng,
                //        map: map
                //     });

                //     markers[i] = marker;
                // }
            
        }

        callUrl();


        //loops through data and finds specific node

        //loops through and finds lat:long data of map

        //puts markers on map

        //
    }


};