import MeetupList from "../components/meetups/MeetupList"; 
import { MongoClient } from "mongodb";
 
 function HomePage(props){
    return <MeetupList meetups={props.meetups}/>
 }

 export async function getStaticProps(){
    console.log('entered here');
    const client = await MongoClient.connect('mongodb+srv://new-user_31:Thunderbird089@cluster0.yxn3uj8.mongodb.net/?retryWrites=true&w=majority')
        const db = client.db();

        const meetupsCollection = db.collection('meetups');
        const meetups = await meetupsCollection.find().toArray();
        console.log('meetups', meetups);
        client.close();
     return {
        props: {
            meetups: meetups.map(meetup =>({
                title: meetup.title,
                address: meetup.address,
                image: meetup.image,
                id: meetup._id.toString()
            }))
        },
        revalidate: 5
     }
 }

 export default HomePage;