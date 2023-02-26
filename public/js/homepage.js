const { response } = require("express");

const commentFormHandler = async (event) => {
    event.preventDefault();

    const postId = document.getElementById('new-commentBtn').getAttribute('data-id');
    const content = document.getElementById('new-comment').value.trim();

    if(postId && content) {
        const response = await fetch('/api/comments', {
            method: 'POST',
            body: JSON.stringify({ content, postId }),
            headers: { "Content-Type": "application/json" },
          });
        
        if(response.ok) {
            document.location.reload();
        } else {
            alert('Failed to add comment.');
        }
    }
};

const cancelAddCommentButtonHandler = async () => document.location.reload();

