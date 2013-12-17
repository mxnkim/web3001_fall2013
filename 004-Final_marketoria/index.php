<!doctype html>
<html>
<head>
	<title>Marketoria</title>
	<link rel="stylesheet" href="http://code.jquery.com/ui/1.10.3/themes/smoothness/jquery-ui.css" />
	<script src="http://code.jquery.com/jquery-1.9.1.js"></script>
	<script src="http://code.jquery.com/ui/1.10.3/jquery-ui.js"></script>
	<link rel="stylesheet" href="/resources/demos/style.css" />
	<link rel="stylesheet" href="style.css" media="all" />
	<script>
		$(function() {
		var availableTags = [
		"New York, NY",
		"Brooklyn, NY",
		"Queens, NY",
		"Manhattan, NY",
		
		];
		$( "#tags" ).autocomplete({
		source: availableTags
		});
		});
	</script>
</head>

<body>
<div id="container">

	<div class="temp">
		<img class="temp_img" src="Logo_big.png" />
		<br />
			<div class="ui-widget">
				<input id="tags" placeholder="Where do you live?" />
			</div>
			
		<br />
		<a href="result/index.php"><img src="button.png"></a>
	</div>
		
</div>
</body>
</html>
