// comment form shit
const newCommentHandler = async (event) => {
    event.preventDefault();

    console.log(' IN THE COMMENT ROUTE, YO UCLICKED IT AND IT DID A THING')

    const content = document.querySelector('#commentHole').value;
    const bpId = document.querySelector('#bpId').value;


    const response = await fetch('/api/comment', {
        method: 'POST',
        body: JSON.stringify({
          content,
          bpId,
        }),
        headers: { 'Content-Type': 'application/json' },
      });

      if (response.ok) {
        document.location.replace('/');
      } else {
        alert('Failed to maker a da commenting');
      }

    // console.log(comment);
};

document
  .querySelector('.new-comment-form')
  .addEventListener('submit', newCommentHandler);