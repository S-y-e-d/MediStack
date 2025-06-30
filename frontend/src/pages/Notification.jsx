import '../css/Notification.css'

import { useState, useEffect } from 'react'
import NotificationBar from '../components/NotificationBar';

function Notification() {
    const BASE_URL = import.meta.env.VITE_API_BASE_URL;
    const notificationUrl = `${BASE_URL}/api/notificaion`;

    const [data, setData] = useState([]);

    useEffect(
        () =>{
            axios.get(notificationUrl)
            .then((result) => setData(result.data))
            .catch((err) => console.error("Error Fetching Notification", err))
        },
    []); //fetch only when component loads

    useEffect(
    	() => {
    		axios.get('http://localhost:8080/api/notification/type/LOW_STOCK')
     		.then(res => setNotifications(res.data))
    		.catch((err) => console.error("Cannot filter", err);
    	}, [selectedFilter]
    );
	
    // Filter options 
    const filterOption = [
        { id: 0, fil: 'None'},
        { id: 1, fil: 'Low Stock'},
        { id: 2, fil: 'Near Expiry'},
        { id: 3, fil: 'Not Selling'}

    ];

    const [selectedFilter, setSelectedFilter] = useState('None');

    const sampleData = [
        {
            name: 'Paracetamol',
            batchNumber: 'P122',
            shelfNumber: 'A3',
            expiryDate: '2025-01-15',
            stockDate: '2024-05-01',
            manufactureDate: '2024-03-01',
            requiresAttention: true,
        },
        {
            name: 'Paracetamol2',
            batchNumber: 'P123',
            shelfNumber: 'A3',
            expiryDate: '2025-01-15',
            stockDate: '2024-05-01',
            manufactureDate: '2024-03-01',
            requiresAttention: false,
        },
    ];

    function handleFilterChange(event){
        setSelectedFilter(event.target.value);
    }

    useEffect( () =>{
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
                {sampleData.map((med) => (
                    <NotificationBar
                        key={med.batchNumber}
                        medicine={med}
                        onClick={() => alert(`Clicked on ${med.name}`)}
                    />
                ))}
            </div>
        </div>
    </div>
    );

}

export default Notification;
