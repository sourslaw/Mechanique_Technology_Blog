// comment form shit
const commentHandler = async (event) => {
    event.preventDefault();

    const content = document.querySelector('#commentHole').value;
    const user_id = document.querySelector('#user_id').value;

    const response = await fetch('/api/comment', {
        method: 'POST',
        body: JSON.stringify({
          content,
          user_id
        }),
        headers: { 'Content-Type': 'application/json' },
      });

      if (response.ok) {
        document.location.replace('/');
      } else {
        alert('Failed to maker a da commenting');
      }

    // console.log('in the comment hole.JS');
    // console.log(comment);
};

// document
//     .querySelector('.comment-form')
//     .addEventListener('submit', commentHandler);