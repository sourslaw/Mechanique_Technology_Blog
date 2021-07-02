// comment form shit
const newCommentHandler = async (event) => {
    event.preventDefault();

    console.log(' IN THE COMMENT ROUTE, YO UCLICKED IT AND IT DID A THING')

    const content = document.querySelector('#commentHole').value;
    // const uId = document.querySelector('#uId').value;
	const bpId = document.querySelector('#bpId').value;
	// console.log(bpId)


    const response = await fetch('/api/comment', {
        method: 'POST',
        body: JSON.stringify({
		  content,
		//   uId,
          bpId,
        }),
        headers: { 'Content-Type': 'application/json' },
      });

      if (response.ok) {
		document.location.replace('/');
		console.log('posted . . . ?')
      } else {
        alert('Failed to maker a da commenting');
      }

    // console.log(comment);
};

document
  .querySelector('.new-comment-form')
  .addEventListener('submit', newCommentHandler);