import '../css/Notification.css'

import { useState, useEffect } from 'react'
import NotificationBar from '../components/NotificationBar';
function Notification() {

    const sampleData = [
        {
            name: 'Paracetamol',
            batchNumber: 'P123',
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
                        <button>All</button>
                        <button>Unread</button>
                        <button>Read</button>
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