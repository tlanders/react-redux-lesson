// import dayjs from 'dayjs';
import uuid from 'react-uuid';

const initialState = {
    tabs: [
        {
            id:uuid(),
            title:'Personal',
            isActive:true
        },
        {
            id:uuid(),
            title:'Work',
            isActive:false
        },
        {
            id:uuid(),
            title:'Other',
            isActive:false
        }
    ],
    notes: []
};

export default initialState;