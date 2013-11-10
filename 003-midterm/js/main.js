//2013.Oct
//Web3002 Midterm 
//Min-Sung Kwak
//Joori Lee
//Maxine Kim


$('#stress').hide();
$('#aging').hide();
$('#immune').hide();
$('#tired').hide();
$('#skin').hide();

$('#stress_select').hide();
$('#aging_select').hide();
$('#immune_select').hide();
$('#tired_select').hide();
$('#skin_select').hide();

$('#home').hide();
$('#_home').hide();


$('#jars #stress').mouseover(function() {   
    $('#stress').fadeIn(2000);
    $('#stress_select').show(0);
    $('#home').hide();
    $('#_home').hide();
});

$('#jars #stress').mouseout(function() {    
    $('#stress').fadeOut(2000);
    $('#stress_select').hide();
});

$('#jars #aging').mouseover(function() {    
    $('#aging').fadeIn(2000);
    $('#aging_select').show(0);
    $('#home').hide();
    $('#_home').hide();
});

$('#jars #aging').mouseout(function() { 
    $('#aging').fadeOut(2000);
    $('#aging_select').hide();
});

$('#jars #immune').mouseover(function() {   
    $('#immune').fadeIn(2000);
    $('#immune_select').show(0);
    $('#home').hide();
    $('#_home').hide();
});

$('#jars #immune').mouseout(function() {    
    $('#immune').fadeOut(2000);
    $('#immune_select').hide();
});

$('#jars #tired').mouseover(function() {    
    $('#tired').fadeIn(2000);
    $('#tired_select').show(0);
    $('#home').hide();
    $('#_home').hide();
});

$('#jars #tired').mouseout(function() { 
    $('#tired').fadeOut(2000);
    $('#tired_select').hide();
});

$('#jars #skin').mouseover(function() { 
    $('#skin').fadeIn(2000);
    $('#skin_select').show(0);
    $('#home').hide();
    $('#_home').hide();
});

$('#jars #skin').mouseout(function() {  
    $('#skin').fadeOut(2000);
    $('#skin_select').hide();
});



$('.to_homepage').click(function () {
    $('html, body').animate({scrollTop: '0px'}, 500);
    $('#home').show(0);
    $('#home_').show(0);
});

 $('.to_stresspage').click(function () {
    $('html, body').animate({scrollTop:$('#stress_page').position().top}, 'slow');
    $('#home').show(0);
    $('#home_').show(0);
});

$('.to_agingpage').click(function () {
    $('html, body').animate({scrollTop:$('#aging_page').position().top}, 'slow');
    $('#home').show(0);
    $('#home_').show(0);
});
    
$('.to_immunepage').click(function () {
    $('html, body').animate({scrollTop:$('#immune_page').position().top}, 'slow');
    $('#home').show(0);
    $('#home_').show(0);
});

$('.to_tiredpage').click(function () {
    $('html, body').animate({scrollTop:$('#tired_page').position().top}, 'slow');
    $('#home').show(0);
    $('#home_').show(0);
});

$('.to_skinpage').click(function () {
    $('html, body').animate({scrollTop:$('#skin_page').position().top}, 'slow');
    $('#home').show(0);
    $('#home_').show(0);
});



$('#home_').hover(function(){
    $(this).parent().animate({'bottom':90},100); 
});
$('#home').mouseleave(function(){
    $(this).animate({'bottom':-50},100); 
});


////////////////////////Mobile View Cllick /////////////////////////////////////

$('#m_stress').click(function () {
    $('html, body').animate({scrollTop:$('#m_page_stress').position().top}, 'slow');
});

$('#m_aging').click(function () {
    $('html, body').animate({scrollTop:$('#m_page_aging').position().top}, 'slow');
});

$('#m_immune').click(function () {
    $('html, body').animate({scrollTop:$('#m_page_immune').position().top}, 'slow');
});

$('#m_tired').click(function () {
    $('html, body').animate({scrollTop:$('#m_page_tired').position().top}, 'slow');
});

$('#m_skin').click(function () {
    $('html, body').animate({scrollTop:$('#m_page_skin').position().top}, 'slow');
});


///////////////////// fruits mouseover + content ////////////////////////////////


$('#stress_vegefruits').hide();
$('#aging_vegefruits').hide();
$('#immune_vegefruits').hide();
$('#tried_vegefruits').hide();
$('#skin_vegefruits').hide();

$('#button1').mouseover(function() { $('#stress_vegefruits').fadeIn(500); });
$('#button1').mouseout(function() { $('#stress_vegefruits').hide(); });

$('#button2').mouseover(function() { $('#aging_vegefruits').fadeIn(500);});
$('#button2').mouseout(function() {$('#aging_vegefruits').hide();});

$('#button3').mouseover(function() { $('#immune_vegefruits').fadeIn(500);});
$('#button3').mouseout(function() { $('#immune_vegefruits').hide();});

$('#button4').mouseover(function() { $('#tired_vegefruits').fadeIn(500);});
$('#button4').mouseout(function() { $('#tired_vegefruits').hide();});

$('#button5').mouseover(function() { $('#skin_vegefruits').fadeIn(500);});
$('#button5').mouseout(function() { $('#skin_vegefruits').hide();});


////////////////////////Mobile View Cllick

$('#m_stress').click(function () {
    $('html, body').animate({scrollTop:100}, 'slow');
});

$('#m_aging').click(function () {
    $('html, body').animate({scrollTop:730}, 'slow');
});

$('#m_immune').click(function () {
    $('html, body').animate({scrollTop:1350}, 'slow');
});

$('#m_tired').click(function () {
    $('html, body').animate({scrollTop:1990}, 'slow');
});

$('#m_skin').click(function () {
    $('html, body').animate({scrollTop:2610}, 'slow');
});

















