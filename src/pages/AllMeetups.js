import { useEffect, useState } from 'react';
import MeetupList from '../components/meetups/MeetupList'

function AllMeetupsPage() {
    const [isLoading, setIsLoading] = useState(true);
    const [loadedData, setLoadedData] = useState([]);

    useEffect(()=>{
        setIsLoading(true);
        fetch(
            "https://react-ba6a7-default-rtdb.firebaseio.com/meetups.json", 
        ).then(res =>{
            return res.json();
        }).then(data =>{
            const meetups = [];
            for(const key in data){
                const meetup = {
                    id: key,
                    ...data[key]
                };
                meetups.push(meetup)
            }

            setIsLoading(false);
            setLoadedData(meetups);
        });
    }, []);
    

    if(isLoading){
        return <section>
            <p>Loading...</p>
        </section>
    }

    return <section>
        <h1>All Meetups</h1>
        <MeetupList meetup={loadedData}/>
    </section>
}

export default AllMeetupsPage;