const express = require('express');
const app = express();
const port = 3000;
const { Storage } = require('@google-cloud/storage')

const admin = require('firebase-admin');
app.use(express.json());

const serviceAccount = require('./key.json')
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
})
const db = admin.firestore();

const cloudStorage = new Storage({
  keyFilename: './western-evening-402015-4c176713eadb.json'
})

app.post('/addUser', (req, res) => {
  try {
    
    const { userId, username, email} = req.body;

    // Create a new user document in the 'Users' collection
    db.collection('Users').doc(userId).set({
      username,
      email,
      // Add any other user-related data here
    });


    res.status(200).json({ success: true, result: {userId} });
  } catch (error) {
    console.error('Error performing addition:', error);
    res.status(500).json({ success: false, error: 'Internal Server Error' });
  }
});


const bucketNamePrefix = 'your-event-bucket-';


app.post('/createEvent', async (req, res) => {
    try {
      const { userId, eventName, location, date } = req.body;
  
      const eventId = generateRandomId();
      const bucketName = `${bucketNamePrefix}${eventId}`;
      await cloudStorage.createBucket(bucketName);
  
      await db.collection('Events').doc(eventId).set({
        eventName,
        location,
        date: admin.firestore.Timestamp.fromDate(new Date(date)),
        bucketName,
      });
  
      await db.collection('Profile').doc(userId).update({
        myEvents: admin.firestore.FieldValue.arrayUnion(eventId),
        upcomingEvents: admin.firestore.FieldValue.arrayUnion(eventId),
      });
  
      res.status(200).json({ success: true, eventId });
    } catch (error) {
      console.error('Error creating event:', error);
      res.status(500).json({ success: false, error: 'Internal Server Error' });
    }
});

app.get('/getEvent/:eventId', async (req, res) => {
      try {
        const { eventId } = req.params;
    
        const eventDoc = await db.collection('Events').doc(eventId).get();
    
        if (!eventDoc.exists) {
          return res.status(404).json({ success: false, error: 'Event not found' });
        }
    
        const eventData = eventDoc.data();
        res.status(200).json({ success: true, event: eventData });
      } catch (error) {
        console.error('Error getting event details:', error);
        res.status(500).json({ success: false, error: 'Internal Server Error' });
      }
    });

  
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

    