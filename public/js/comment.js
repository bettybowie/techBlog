const { response } = require("express");

const newCommentHandler = async (event) => {
    event.preventDefault();

    const id = document.getElementById('new-comment').getAttribute('data-id');
    const commentContent = document.getElementById('new-comment').value.trim();

    if (id && commentContent) {
        const response = await fetch(`/api/comments/${id}`, {
            method: 'POST',
            body: JSON.stringify({ commentContent }),
            header: { "Content-Type": "application/json"},
        });
    };

    if(response.ok) {
        document.location.replace('/');
    } else {
        console.log(err);
        alert('Failed to add comment.');
    }
};

const editCommentHandler = async (event) => {
    event.preventDefault();

    const id = document.getElementById('edit-comment').getAttribute('data-id');
    const commentContent = document.getElementById('edit-comment').value.trim();

    if (id && commentContent) {
        const response = await fetch(`/api/comments/${id}`, {
            method: 'POST',
            body: JSON.stringify({ commentContent }),
            header: { "Content-Type": "application/json"},
        });
    };

    if(response.ok) {
        document.location.replace('/');
    } else {
        console.log(err);
        alert('Failed to add comment.');
    }
};