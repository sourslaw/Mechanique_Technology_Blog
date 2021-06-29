// comment form shit
const commentHandler = async (event) => {
    event.preventDefault();

    const comment = document.querySelector('#commentHole');

    const response = await fetch('/api/comment', {
        method: 'POST',
        body: JSON.stringify({ content }),
        headers: { 'Content-Type': 'application/json' },
      });


    console.log('in the comment hole')
    console.log(comment)

}


document
    .querySelector('.comment-form')
    .addEventListener('submit', commentHandler);