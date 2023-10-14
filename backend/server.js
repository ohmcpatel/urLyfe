const { Storage } = require('@google-cloud/storage');
const express = require('express');
const bodyParser = require('body-parser');
const admin = require('firebase-admin');

const app = express();
const port = process.env.PORT || 19006;
app.use(bodyParser.json());

 const serviceAccount = require('../key.json')
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
})
const dataBase = admin.firestore();

const cloudStorage = new Storage({
    //keyFilename: the path to my service account key
})

const bucketNamePrefix = 'your-event-bucket-';

const generateRandomId = () => {
  return Math.random().toString(36).substring(2, 10) + Date.now().toString(36);
};

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
    