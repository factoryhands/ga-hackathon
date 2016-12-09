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
            mapTypeControl: false,
            // mapTypeId: google.maps.MapTypeId.ROADMAP
            styles: [{"featureType":"landscape.natural","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"color":"#e0efef"}]},{"featureType":"poi","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"hue":"#1900ff"},{"color":"#C5E6E2"}]},{"featureType":"road","elementType":"geometry","stylers":[{"lightness":100},{"visibility":"simplified"}]},{"featureType":"road","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"transit.line","elementType":"geometry","stylers":[{"visibility":"on"},{"lightness":700}]},{"featureType":"water","elementType":"all","stylers":[{"color":"#8ED0BC"}]}]
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