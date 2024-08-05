// Create web server
const express = require('express');
const app = express();
const port = 3000;

// Create an array of comments
const comments = [
  {
    id: 1,
    user: 'user1',
    comment: 'comment1'
  },
  {
    id: 2,
    user: 'user2',
    comment: 'comment2'
  },
  {
    id: 3,
    user: 'user3',
    comment: 'comment3'
  },
  {
    id: 4,
    user: 'user4',
    comment: 'comment4'
  },
  {
    id: 5,
    user: 'user5',
    comment: 'comment5'
  }
];

// Set up a GET route to return all comments
app.get('/comments', (req, res) => {
  res.json(comments);
});

// Set up a GET route to return a specific comment
app.get('/comments/:id', (req, res) => {
  const comment = comments.find(comment => comment.id === parseInt(req.params.id));
  if (!comment) {
    res.status(404).send('The comment with the given ID was not found');
  }
  res.json(comment);
});

// Set up a POST route to add a new comment
app.post('/comments', (req, res) => {
  const comment = {
    id: comments.length + 1,
    user: req.body.user,
    comment: req.body.comment
  };
  comments.push(comment);
  res.json(comment);
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});