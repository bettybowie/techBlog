const { response } = require("express");

const newPostFormHandler = async (event) => {
    event.preventDefault();

    const title = document.querySelector('#new-post-title').value.trim();
    const content = document.querySelector('#new-post-content').value.trim();

    if(title && content) {
        const response = await fetch('/api/posts', {
            method: 'POST',
            body: JSON.stringify({title, content}),
            headers: {"Content-Type": "application/json"},
        });

        if(response.ok) {
            document.location.replace('/dashboard');
        } else {
            alert('Failed to add post.');
        }
    }
};

const cancelAddPostButtonHandler = async () => document.location.replace('/dashboard');

const updatePostFormHandler = async (event) => {
    event.preventDefault();

    const id = document.getElementById('add-post-btn').getAttribute('data-id');
    const title = document.querySelector('#edit-post-title').value.trim();
    const content = document.querySelector('#edit-post-content').value.trim();

    if (id && title && content) {
        const response = await fetch(`/api/posts/${id}`, {
            method: 'PUT',
            body: JSON.stringify({ title, content}),
            headers: { 'Content-Type': 'application/json'},
        });
    };

    if (response.ok) {
        document.location.replace('/dashboard');
    } else {
        alert('Failed to update post');
    };
};

const deletePostFormHandler = async (event) => {
    event.preventDefault();

    const id = document.getElementById('delete-post-btn').getAttribute('data-id');

    if (id) {
        const response = await fetch(`/api/posts/${id}`, {
            method: 'DELETE',
        });
    };

    if (response.ok) {
        document.location.replace('/dashboard');
    } else {
        alert('Failed to delete post.');
    };
};

const cancelUpdateHandler = async () => document.location.replace('/dashboard');

