// temp TEST to retrieve for editing
const editHandler = async (event) => {
	event.preventDefault();

	const bpUpIdent = document.querySelector('#bpUpId').textContent;
	const post_title = document.querySelector('#post_title').value;
	const content = document.querySelector('#content').value;
	
	const response = await fetch(`/api/blogpost/${bpUpIdent}`, {
		method: 'PUT',
		body: JSON.stringify({
		post_title,
		content,
		// user_id,
		}),
		headers: {
		'Content-Type': 'application/json',
		},
	});

	if (response.ok) {
		document.location.replace('/');
	} else {
		alert('Failed to update post');
	}
  
};

document
	.querySelector('.update-form')
	.addEventListener('submit', editHandler);