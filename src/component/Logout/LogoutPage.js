import { useDispatch } from 'react-redux';
import { logout } from '../../redux/user/operations';
import Button from '@material-ui/core/Button';


const LogoutPage = () => {
  const dispatch = useDispatch();

 
  return (
    <>
      <Button
        onClick={() => dispatch(logout())}
        variant="outlined"
        color="secondary"
      >
        
        Log out
      </Button>
    </>
  );
};

export default LogoutPage;
