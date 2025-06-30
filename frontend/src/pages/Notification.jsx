import '../css/Notification.css'
import axios from 'axios'
import { useState, useEffect } from 'react'
import NotificationBar from '../components/NotificationBar';

function Notification() {
    const BASE_URL = import.meta.env.VITE_API_BASE_URL;
    const notificationUrl = `${BASE_URL}/api/notification`;
    const generateNotification = `${BASE_URL}/api/notification/generate`;
    const [data, setData] = useState([]);



    useEffect(() => {
        const fetchNotifications = async () => {
            try {
                // First: trigger backend to generate new notifications
                await axios.get(generateNotification); 

                // Then: fetch the updated list of notifications
                const result = await axios.get(notificationUrl);
                setData(result.data);
            } catch (err) {
                console.error("Error Fetching Notification", err);
            }
        };

        fetchNotifications();
    }, []);



    const [selectedFilter, setSelectedFilter] = useState('None');

    const [notifications, setNotifications] = useState([]);

    // Fetches info directly from the database. 
    useEffect(() => {
        axios
            .get('http://localhost:8080/api/notification/type/LOW_STOCK')
            .then(res => setNotifications(res.data))
            .catch(err => console.error(err));
    }, [selectedFilter]);

    // Filter options 
    const filterOption = [
        { id: 0, fil: 'None' },
        { id: 1, fil: 'Low Stock' },
        { id: 2, fil: 'Near Expiry' },
        { id: 3, fil: 'Not Selling' }

    ];


    function handleFilterChange(event) {
        setSelectedFilter(event.target.value);
    }

    useEffect(() => {
        // To-Do write notificaiton filter code here

    },
        [selectedFilter]);


    return (

        <div className='container'>
            <div className='header'>
                <div className='header-top'>
                    <div className='header-left'>
                        <h2>Notifications</h2>
                    </div>
                    <div className='header-right'>
                        <p>Date: {new Date().toLocaleDateString()}</p>
                    </div>
                </div >
                <div className='header-bottom'>

                    <div className='header-bottom-left'>
                        <span>Sort By: </span>
                        <button>All</button>
                        <button>Unread</button>
                        <button>Read</button>
                    </div>

                    <div className='header-bottom-right'>
                        <span>Filter By: </span>
                        <select value={selectedFilter} onChange={handleFilterChange}>
                            {filterOption.map((item) => (
                                <option key={item.id} value={item.fil}>{item.fil}</option>
                            ))}
                        </select>
                    </div>

                </div>

                <div>
                    {data.map((noti) => (
                        <NotificationBar
                            key={noti.id}
                            medicine={noti.medicine}
                            onClick={() => alert(`Clicked on ${med.name}`)}
                        />
                    ))}
                </div>
            </div>
        </div>
    );

}

export default Notification;
