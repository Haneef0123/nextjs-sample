import MeetupDetail from "../../components/meetups/MeetupDetail";

function MeetupDetails(props) {
    return <MeetupDetail
        {...props.meetupData}
    />
}
export function getStaticPaths(){
    return {
        fallback: false,
        paths: [
            {
                params:{
                    meetupId: 'm1'
                }
            },
            {
                params:{
                    meetupId: 'm2'
                }
            }
        ]
    }
}
export function getStaticProps(context) {
    const meetupId = context.params.meetupId; 
    console.log(meetupId);
    return {
        props: {
            meetupData: {
                image: "https://www.kasandbox.org/programming-images/avatars/primosaur-tree.png",
                id: meetupId,
                title: "First Meetup",
                address: "Some Address",
                description: "This is a first meetup"
            }
        }
    }
}
export default MeetupDetails;