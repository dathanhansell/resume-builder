const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/helloWorldDB')
  .then(() => console.log('Successfully connected to MongoDB'))
  .catch(e => console.error(e));

// Define a schema
const MessageSchema = new mongoose.Schema({
  text: String
});

// Create a model from the schema
const Message = mongoose.model('Message', MessageSchema);

// Create a new message
const helloWorldMessage = new Message({
  text: 'Hello, ba!'
});

// Save the message to the database
helloWorldMessage.save()
  .then(() => console.log('Message saved successfully'))
  .catch(e => console.error(e));

const app = express();
app.use(cors());

// Endpoint to get message
app.get('/message', (req, res) => {
  Message.findOne() // get the first (and only) message
    .then(message => res.json(message))
    .catch(e => {
      console.error(e);
      res.status(500).send('Error occurred while fetching message');
    });
});

app.listen(5000, () => console.log('Server is running on http://localhost:5000'));
