import NewMeetupForm from "../../components/meetups/NewMeetupForm";
import { useRouter } from "next/router";
function NewMeetupPage(){
    const router = useRouter();
    async function meetupAddHandler (data) {
        const response = await fetch('/api/new-meetup', {
            method: 'POST',
            body : JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const result = await response.json();
        console.log('result', result);
        router.push('/');
    }
    return <NewMeetupForm onAddMeetup={meetupAddHandler}/>
}

export default NewMeetupPage;