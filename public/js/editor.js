

$(document).ready(function () {
	// When a file is selected
	$('input[name="pdf"]').change(function () {
		// Get the selected files
		var files = $(this)[0].files;

		// Loop through each file
		for (var i = 0; i < files.length; i++) {
			// Create a URL for the selected file
			var url = URL.createObjectURL(files[i]);

			// Add the PDF file to the list
			addPdfToList(files[i].name, url);

		}
	});
});


function addPdfToList(name, url) {

	// Create a list item element

	// Append the h1 tag to the pdfhead div only if it doesn't exist
	var pdfHead = $('.pdfhead');
	if (pdfHead.children('h1').length === 0) {
		var h1 = $('<h1/>', {
			text: 'Selected PDFs'
		});
		pdfHead.append(h1);
	}

	var li = document.createElement("li");
	li.className = "list-group-item d-flex justify-content-between align-items-center";
	// Check if this is the first item in the list

	// Create a link element with the name of the file and the URL as the href attribute
	var a = document.createElement("a");
	a.innerText = name;
	a.href = url;

	// Create a delete button element
	var button = document.createElement("button");
	button.innerText = "Delete";
	button.className = "btn btn-danger"
	button.onclick = function () {
		// Remove the list item from the list
		li.remove();
		// Remove the corresponding file from the input field
		var input = $('input[name="pdf"]');
		var files = input[0].files;
		var newFiles = [];
		for (var i = 0; i < files.length; i++) {
			if (files[i].name !== name) {
				newFiles.push(files[i]);
			}
		}
		input[0].files = newFiles;
	};

	// Add the link and delete button to the list item
	li.appendChild(a);
	li.appendChild(button);
	// Add margin to the link and delete button
	a.style.marginRight = "10px";
	a.style.textDecoration = "none";
	button.style.marginLeft = "10px";
	// Add the list item to the list
	document.getElementById("pdf-list").appendChild(li);
}



// █▀█ █▀▄ █▀▀   █▀▄▀█ █▀▀ █▀█ █▀▀ █▀▀ █▀█   ░░█ ▄▀█ █░█ ▄▀█ █▀▀ █▀█ █ █▀█ ▀█▀   █▀▀ █▀█ █▀▄ █▀▀   █▀▀ █▄░█ █▀▄