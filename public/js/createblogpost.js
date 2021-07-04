// const router = require('express').Router();

const newFormHandler = async (event) => {
    event.preventDefault();
  
    const post_title = document.querySelector('#post_title').value;
    const content = document.querySelector('#content').value;
    // const user_id = document.querySelector('#user_id').value;
    // req.session.user_id = userData.id;
    // const user_id = req.session.user_id;
  
    const response = await fetch(`/api/blogpost`, {
      method: 'POST',
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
      document.location.replace('/'); // the next page that displays after the form is submitted. in this case, the home page
    } else {
      alert('Failed to crate post');
    }
};

const delButtonHandler = async (event) => {
  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');

    const response = await fetch(`/api/blogpost/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      document.location.replace('/createblogpost');
    } else {
      alert('Failed to delete post');
    }
  }
};
  
document
  .querySelector('.new-post-form')
  .addEventListener('submit', newFormHandler);

document
  .querySelector('.blogpost-list')
  .addEventListener('click', delButtonHandler);
  


// // temp TEST to retrieve for editing
// const editHandler = async (event) => {
// 	event.preventDefault();
// 	console.log('+ + + + + + + + + +');
// 	console.log('TRYING TO RETRIEVE');
// 	console.log('+ + + + + + + + + +');

// 	// if (event.target.hasAttribute('data-id')) {
// 	// 	const id = event.target.getAttribute('data-id');
// 	// 	const post_title = document.querySelector('#post_title').value;
// 	// 	const content = document.querySelector('#content').value;
	  
// 	// 	const response = await fetch(`/api/blogpost/${id}`, {
// 	// 	  method: 'PUT',
// 	// 	  body: JSON.stringify({
// 	// 		post_title,
// 	// 		content,
// 	// 		// user_id,
// 	// 	  }),
// 	// 	  headers: {
// 	// 		'Content-Type': 'application/json',
// 	// 	  },
// 	// 	});
	
// 	// 	if (response.ok) {
// 	// 	  document.location.replace('/createblogpost');
// 	// 	} else {
// 	// 	  alert('Failed to delete post');
// 	// 	}
// 	//   }
  
// };

// document
// 	.querySelector('update-form')
// 	.addEventListener('submit', editHandler);