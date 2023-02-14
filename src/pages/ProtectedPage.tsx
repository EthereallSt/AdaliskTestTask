import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import { checkAuthStatus, Logout } from '../models/Auth';
import { data } from '../data/data';
import { Button } from '../style/buttons';
import { Table, Td, Td1, Сaption } from '../style/text'


export const ProtectedPage= () => {
  const location = useLocation();
  const navigate = useNavigate();

  if (!checkAuthStatus()) {
    return <Navigate to='/LoginPage' state={{from: location}}/>; 
  } else 
    return(
      <div>

      
      { <Button onClick={() => navigate(-1)} >Logout</Button> }
      <Table>
        <Сaption>Table with content</Сaption>
          <tr>
            <Td1>Reference</Td1>
            <Td1>Status</Td1>
            <Td1>AccountId</Td1>
            <Td1>creationDate</Td1>
            <Td1>publicId</Td1>
          </tr>
          {data.map((x) => (
          <tr>
            <Td> {x.reference}</Td>
            <Td> {x.status}</Td>
            <Td>{x.accountId}</Td>
            <Td>{x.creationDate}</Td>
            <Td>{x.publicId}</Td>
          </tr>
        ))}
        </Table>
        </div>
    )};