<?php include('header.php'); ?>


    <section id="home" class="page">

        <iframe name="iframe_a" width='100%' height='100%' frameborder='0' src='http://mxnkim.cartodb.com/viz/eb7ef988-6618-11e3-8df8-9f465f6900bb/embed_map?title=false&description=false&search=false&shareable=false&cartodb_logo=true&layer_selector=false&legends=true&scrollwheel=false&sublayer_options=1%7C0%7C0%7C0&sql=SELECT%20*%20FROM%20nycmarket&sw_lat=40.66706942635524&sw_lon=-74.15080279111862&ne_lat=40.81430048790557&ne_lon=-73.65710467100143'></iframe>
    
        <div id='menu2'>
      <!-- <a href="#satsun" id="satsun" class="button satsun">satsun</a> 
      <a href="#thufri" id="thufri" class="button thufri">thufri</a> 
      <a href="#tuewed" id="tuewed" class="button tuewed">tuewed</a> 
      <a href="#all" id="all" class="button all">ALL</a> -->
      <a href="http://cdb.io/18uL7x2" id="satsun" target="iframe_a" class="button satsun">satsun</a> 
      <a href="http://cdb.io/IR3xwg" id="thufri" target="iframe_a" class="button thufri">thufri</a> 
      <a href="http://cdb.io/IR3LU7" id="tuewed" target="iframe_a" class="button tuewed">tuewed</a> 
      <a href="http://cdb.io/18uLdoh" id="all" target="iframe_a" class="button all">ALL</a>
    </div>

<script>

  var map;
  function init(){
    
    map = new L.Map('map', { 
      center: [20,-20],
      zoom: 3
    })


    var layerUrl = 'http://mxnkim.cartodb.com/api/v2/viz/eb7ef988-6618-11e3-8df8-9f465f6900bb/viz.json';

    var layerOptions = {
              query: "SELECT * FROM nycmarket",
              tile_style: "#FROM nycmarket {marker-fill: #F84F40; marker-width: 8; marker-line-color: white; marker-line-width: 2; marker-clip: false; marker-allow-overlap: true;} "
    }

    var layers = [];

    cartodb.createLayer(map, layerUrl, layerOptions)
     .on('done', function(layer) {
      map.addLayer(layer);
      layers.push(layer);
    }).on('error', function() {
     
    });

    var LayerActions = {
      all: function(){
          layers[0].setQuery("SELECT * FROM {{table_name}}");
          return true;
        },
      tuewed: function(){
          layers[0].setQuery("SELECT * FROM {{table_name}} WHERE day = ('Tuesday','Wednesday') ");
          return true;
        },
      thufri: function(){
          layers[0].setQuery("SELECT * FROM {{table_name}} WHERE day IN ('Thursday','Friday') ");
          return true;
        }
      satsun: function(){
          layers[0].setQuery("SELECT * FROM {{table_name}} WHERE day IN ('Saturday','Sunday");
          return true;
        }
    }

$('.button').click(function() {
    $('.button').removeClass('selected');
    $(this).addClass('selected');
    LayerActions[$(this).attr('id')]();
  });

  </script>

<div class="container_12">
    
</div>


<?php include('footer.php'); ?>