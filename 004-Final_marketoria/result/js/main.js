/**
 * defaults for testing
 */ 

var name = 'hector',
    description = 'going with it',
    notice = 'note posted to carto';
    
var cat = $('form#serious').find('input.cat').val();

/**
 * page nav
 */ 

$('header nav').on('click', 'a', function(){
    event.preventDefault();

    $('header nav a').removeClass('active');    
    $(this).toggleClass('active');
    
    var page = $(this).text();
    $('.page').fadeOut();
    $('#' + page).fadeIn();
    
})


/**
 * feedback to user
 */ 
function feedback(msg){
    console.log('msg: ',msg);
    $('.notice').text(msg).fadeIn().delay(2000).fadeOut('slow');
}

$('.notice').delay(2000).fadeOut(); // initial loading message


/**
 * user actions
 */ 




$('.addLocation').click( function(){
    console.log('addLocation');
    event.preventDefault();
    getLocation();
});


/**
 * mobile position
 */ 

function getLocation (){
    console.log('getLocation()');

    // on success
    var newPosition = function(p){ 
        console.log('newPosition()');
        
        position = p; 
        console.log(position);
        var lat = position.coords.latitude;
        var lng = position.coords.longitude;
        var newlocation = lng + ' ' + lat; // the var name location screwed everything up
        addnote(newlocation,name,description,notice); 
    }

    // on error
    var positionError = function(error){ 
        feedback(error); 
    }

    // get location from the browser
    navigator.geolocation.getCurrentPosition(newPosition,positionError);    
    
}




/**
 * vars for cartoDB
 *
 */
var cartodb_accountname = 'mxnkim';
var cartodb_key = "&api_key=6603af4a4ef64f524195d786c12598e922726f18"; 
var table_name = 'nycmarket';


function addnote(location,name,description,msg){
    console.log('addnote()',location);

    var description =  (description);
    
    var sqlInsert ="q=INSERT INTO "+ table_name +" (name,description,the_geom) VALUES('"+ description +"', '"+ name +"', ST_GeomFromText('POINT(" + location + ")', 4326) )";

    update_carto(sqlInsert,msg);
}




function update_carto(sql,msg){
    
    console.log('update carto();');
    var theUrl = url_cartoData + sql + cartodb_key;
    console.log(theUrl);

    $.getJSON(theUrl, function(data){
        console.log(data);
    })
    .success(function(response) { 
        console.log('update_carto success');
        console.log(response);
        
        if (msg){
            feedback(msg);
            }
        // }
    })
    .error(function() { 
        msg = 'Sorry. There was an error.';
        feedback(msg);
        console.log(msg);
    })
    .complete(function() {  });  
    
}




/******************************* 
 * =query CartoDB
 *
 * used by various calls to get notes
 *
**/

var notes_limit = 100;
var notes_format = 'format=GeoJSON&';

var url_cartoData = 'http://'+cartodb_accountname+'.cartodb.com/api/v2/sql?';
var url_cartoMap = 'https://'+cartodb_accountname+'.cartodb.com/tables/' // + ?_table+'/embed_map?';
    // note!!
    // sql= for embed_map
    // q= for json & geojson



function allNotes(){ 
    var sql_statement = "q=SELECT * FROM "+ table_name +" ORDER BY created_at DESC LIMIT " + notes_limit;
    queryCarto(sql_statement);
}


function queryCarto(sql_statement){ 

    var url_query = url_cartoData + notes_format + sql_statement;

    console.log('url_query');
    console.log(url_query);

    var output = []; // to gather html here
    var templateA = $('.feed li.template'); // template in html
    var query_count; // total returned

    // console.log(url_query);
    $.getJSON(url_query, function(data){
        console.log(data);
        /*
console.log(data.features);
        console.log(data.features[0]);
        console.log(data.features[0].properties.cartodb_id);
*/
        console.log(data.features[0].properties.description);

        query_count = data.features.length;

        // write notes
        $.each(data.features, function(key, val) { // geojson

            // console.log(data.features[0].properties.description);
            // console.log(OBJECTS.properties.description);
            var note = val.properties;
            console.log(note); // peek inside!!!!!!
            console.log('Hello: '+note); // peek inside!!!!!!
            console.log('Hi: ',note); // peek inside!!!!!!

            var template = templateA.clone();
            template.removeClass('template');

            template.find('strong')
                .html('<i>'+note.description+'</i>')
                
            template.find('em').text(note.name);
            template.find('span').text(note.cartodb_id);
            template.find('img').attr('src',note.img);

            output.push(template); // gather for append below
            
        }); // END .each()


    }).success(function() { 
        console.log('getJSON success'); 

        // write to page        
        var delay = 0;
        
        if ( query_count > 0 ){
            $('.feed ul').append(output);
        } 
        else {
            console.log('no notes in carto'); 
        }
    }) // END sucess
    .error(function() { 
        console.log('getJSON error'); 
        })
    .complete(function() {  }); // complete, but not necessarily successful
    

}; // END queryCarto()


/**
 * go get 'em!!
 *
 */
 
allNotes()

/* Load my map */
/*<iframe width='100%' height='520' frameborder='0' src='http://mxnkim.cartodb.com/viz/eb7ef988-6618-11e3-8df8-9f465f6900bb/embed_map?title=false&description=false&search=false&shareable=false&cartodb_logo=true&layer_selector=false&legends=true&scrollwheel=false&sublayer_options=1%7C0%7C0%7C0&sql=SELECT%20*%20FROM%20nycmarket&sw_lat=40.66706942635524&sw_lon=-74.15080279111862&ne_lat=40.81430048790557&ne_lon=-73.65710467100143'></iframe>*/

var myurl = 'http://mxnkim.cartodb.com/viz/eb7ef988-6618-11e3-8df8-9f465f6900bb/embed_map?title=false&description=false&search=false&shareable=false&cartodb_logo=true&layer_selector=false&legends=true&scrollwheel=false&sublayer_options=1%7C0%7C0%7C0&sql=SELECT%20*%20FROM%20nycmarket&sw_lat=40.66706942635524&sw_lon=-74.15080279111862&ne_lat=40.81430048790557&ne_lon=-73.65710467100143'
$('#home iframe').attr('src',myurl);


