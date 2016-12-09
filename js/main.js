// if HTML DOM Element that contains the map is found...
$( document ).ready(function() {
    console.log( "ready!" );
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
        // var marker = new google.maps.Marker({
        //    position: myLatlng,
        //    map: map
        // });
        var items = [];
        function callUrl(){
            $.ajax({
                dataType: 'json',
                url: 'https://data.seattle.gov/resource/249z-59hj.json',
                success: function(res){
                    console.log('success', res);
                    items = res;
                }, 
                error: function(res){
                    console.log('error', res);
                }
            });
        }
        callUrl();
        //loops through data and finds specific node
        //loops through and finds lat:long data of map
        //puts markers on map
        //
    }
});