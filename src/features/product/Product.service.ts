import { toast } from 'react-toastify';
import { Auth_Type } from '../Auth/v1/type/Login.type';

export const Add_To_Cart = (user: Auth_Type) => {
  if (!user) {
    toast.error('Please login to add products to the cart', {
      position: 'top-right',
      style: {
        marginTop: '10vh',
      },
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'dark',
    });
  }

  toast.warn('We are Working on Add to Card Functionality Dev Abhishek', {
    position: 'top-right',
    style: {
      marginTop: '10vh',
    },
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: false,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: 'dark',
  });
};
