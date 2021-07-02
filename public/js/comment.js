// comment form shit
const newCommentHandler = async (event) => {
    event.preventDefault();

    console.log(' IN THE COMMENT ROUTE, YO UCLICKED IT AND IT DID A THING')

    const content = document.querySelector('#commentHole').value;
	const bpIdent = document.querySelector('#bpId').textContent;


    const response = await fetch('/api/comment', {
        method: 'POST',
        body: JSON.stringify({
		  content,
          bpIdent,
        }),
        headers: { 'Content-Type': 'application/json' },
      });

      if (response.ok) {
		document.location.replace('/');
		console.log('posted . . . ?')
      } else {
        alert('Failed to maker a da commenting');
      }

};

document
  .querySelector('.new-comment-form')
  .addEventListener('submit', newCommentHandler);