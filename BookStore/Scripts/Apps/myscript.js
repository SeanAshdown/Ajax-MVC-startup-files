$(function () {
    /*
    ../Books - shows list of Books
    ../ Authors - shows list of Authors
    
    ../Books/Search - returns a JSON array of all books written by the given Author
        -This is a GET method
        -Input parameter is a string (Author name)
        -This method returns a JSON */
	$("#search").on("click", function () {

		var url = "/Books/Search";
		var searchstring = $("AuthorSearch").val();

		$.get(url, { "s": searchstring }, function (data) {

			console.log(data);
			$("ul").remove();
			var ul = $("<ul></ul>").text("List of Books by Author " + searchstring);
			$("#results").append(ul);

			$.each(data, function (i, item) {
				var li = $("<li></li>").text(item.Id + " " + item.Title);
				ul.append(li);
			});
		});
	});


    /*../Books/DeleteByAuthor - returns a JSOn object showing count and status of books deleted 
    - This is a POST method
    - Input parameter is a string (Author name)
    -This method returns a JSON

    */
	$("#delete").on("click", function () {
		var url = "/Books/DeleteByAuthor";
		searchstring = $("#AuthorSearch").val();
		$.post(url, {"s": searchstring }, function (data) {

			console.log(data);
			alert("Action complete; " + data.count + " records deleted");

		});
	});

    $("#search2").on("click", function () {

        var url = "/Books/SearchByYear";
        var searchInt = $("YearSearch").val();

        $.get(url, { "year": searchInt }, function (data) {

            console.log(data);
            $("ul").remove();
            var ul = $("<ul></ul>").text("List of Books Released After Year " + searchInt);
            $("#results2").append(ul);

            $.each(data, function (i, item) {
                var li = $("<li></li>").text(item.Id + " " + item.Title);
                ul.append(li);
            });
        });
    });

});