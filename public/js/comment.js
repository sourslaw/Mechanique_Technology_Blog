// comment form shit
const commentHandler = async (event) => {
    event.preventDefault();

    const comment = document.querySelector('#commentHole');

    console.log('in the comment hole')
    console.log(comment)

}


document
    .querySelector('.comment-form')
    .addEventListener('submit', commentHandler);