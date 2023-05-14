// /api/new-meetup
import { MongoClient } from 'mongodb';

async function handler(req, res) {
    console.log('REQUEST COMING ', req.body);
    if (req.method === "POST") {
        const data = req.body


        const client = await MongoClient.connect('mongodb+srv://new-user_31:Thunderbird089@cluster0.yxn3uj8.mongodb.net/?retryWrites=true&w=majority')
        const db = client.db();

        const meetupsCollection = db.collection('meetups');
        const result = await meetupsCollection.insertOne(data);
        console.log('result', result);

        client.close();

        res.status(201).json({ message: 'Meetup Inserted' });
    }
}

export default handler