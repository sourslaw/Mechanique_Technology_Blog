async function newFormHandler(event) {
    event.preventDefault();
  
    const post_title = document.querySelector('#post_title').value;
    const content = document.querySelector('#content').value;
    const user_id = document.querySelector('#user_id').value;
  
    const response = await fetch(`/api/blogpost`, {
      method: 'POST',
      body: JSON.stringify({
        post_title,
        content,
        user_id,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
  
    if (response.ok) {
      document.location.replace('/');
    } else {
      alert('Failed to crate post');
    }
  }
  
  document
    .querySelector('.new-post-form')
    .addEventListener('submit', newFormHandler);
  