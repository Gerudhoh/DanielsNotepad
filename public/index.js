// Put all onload AJAX calls here, and event listeners
$(document).ready(function() {
    // On page-load AJAX Example
      $.ajax({
        type: 'get',            //Request type
        dataType: 'json',       //Data type - we will use JSON for almost everything 
        url: '/getNotes',   //The server endpoint we are connecting to
        success: function (data) {
			var notes = data.fileContents;
			//dropdown menu
			var menuItems = [];
			for(n of notes){
				let len = n.length;
				
				if(len > 1){
					menuItems.push( '<tr><th bgcolor="#ffe8a0">', n ,'</th></tr>');
				}
				
			}
			document.getElementById('notepad').innerHTML += menuItems.join('');
			
        },
        fail: function(error) {
            // Non-200 return, do something with error
            console.log(error); 
        }
    });
});

