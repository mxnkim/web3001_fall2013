/**
 * advanced:
 * make this work offline
 * https://developer.mozilla.org/en-US/docs/HTML/Using_the_application_cache
 * note: you must edit the manifest to update files
 *
 */



var posts = [];

/**
 * form action
 *
 */

$('#draft button').click( function(event){

    // stop form from trying to send & refresh page
    event.preventDefault();

    // create post from form
    var post = {};
    post.title = $('#title').val();
    post.content = $('#content').val();

    // add post to posts
    posts.push(post);

    // console.log('post: ',post);
    // console.log('posts: ',posts);

    displayPost(post);
    storePosts(posts);

});


/**
 * display posts
 *
 */

function displayPost(post){
    
    var html = '<article class="active"><span class="card-comment-title">'+ post.title +'</span><p>'+ post.content +'</p></article>';
    $('#feed').prepend(html);
    
}



function storePosts(posts){

    console.log('array: ' + posts);

    // make the array a string
    posts = JSON.stringify(posts);
    console.log('json: ' + posts);

    // store the string
    localStorage.posts = posts;

}



function loadPosts(){

    // check for posts in storage
    if (localStorage.posts) { 

        posts = localStorage.posts;

        // turn string into an array
        posts = JSON.parse(posts);

        // loop thru items in the array
        for( i=0, count=posts.length; i<count; i++ ){

            var post = posts[i]
            console.log( post );
            displayPost(post);
        }
    } else { // nothing in storage?
    
        posts = []; 
    
    }

}

// load posts on page load
loadPosts();



var count = 0;

$('h2').click( function(){
	if(count == 0){
		$(this).css("color","#ff0000");
		count = 1;
	}
	else {
		$(this).css("color","blue");
		count = 0;
	}
} );


$('article').on('click','p', function(){
	if(count == 0){
		$(this).text("This is a content.");
		count = 1;
	}
	else {
		$(this).text("Yes, it is.");
		count = 0;
	}
} );

/* =========================================== */



/* Mark post as active */
/*
$('#feed').on('click', 'article', function(){
	// $('article').removeClass('active');
	$(this).toggleClass('active');
});
*/



/**
 * advanced
 * alternative way to organize your code
 * not currently in use
 */

var app = {
    load : function(){
        if (localStorage.posts) { 
            posts = localStorage.posts;
            posts = JSON.parse(posts);
            for( i=0, count=posts.length; i<count; i++ ){
                var post = posts[i]
                displayPost(post);
            }
        }        
    },
    store : function(posts){
        posts = JSON.stringify(posts);
        localStorage.posts = posts;
    }
}

// app.load();
// app.store(posts);
