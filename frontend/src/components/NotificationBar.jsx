import '../css/NotificationBar.css'
import PropTypes from 'prop-types';

function NotificationBar({ medicine, onClick }) {

    if (!medicine) {
        return null;
    }

    return (
        <div
            className={`notification-row ${medicine.requiresAttention ? 'unread' : 'read'}`}
            onClick={onClick}
            style={{ cursor: onClick ? 'pointer' : 'default' }}
        >
            <span className="item">{medicine.name}</span>
            <span className="item">Batch: {medicine.batchNumber}</span>
            <span className="item">Quantity: {medicine.quantityInStock}</span>
            <span className="item">Expiry: {medicine.expirationDate}</span>
            <span className="item">Stocked: {medicine.purchaseDate}</span>
            <span className="item">Status: {medicine.status}</span>
        </div>
    );
}

NotificationBar.propTypes = {
    medicine: PropTypes.shape({
        name: PropTypes.string,
        batchNumber: PropTypes.string,
        shelfNumber: PropTypes.string,
        expiryDate: PropTypes.string,
        stockDate: PropTypes.string,
        manufactureDate: PropTypes.string,
        requiresAttention: PropTypes.bool,
    }),
    onClick: PropTypes.func,
};

export default NotificationBar;

