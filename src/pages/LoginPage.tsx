import * as React from 'react';
import { RouteProps, useNavigate, useLocation } from 'react-router-dom'; 
import { authenticate } from '../models/Auth';
import { IUserIdentity } from '../models/user'
import { Button } from '../style/buttons';
import { Input, Text, Form} from '../style/text'






export const LoginPage: React.FC<RouteProps> = () => {
    const navigate = useNavigate();
    const [user, setField] = React.useState<IUserIdentity>({
      username: '',
      password: '',
    })

    const [notification, setNotification] = React.useState<string>('')
  
    const onInputChange = (fieldName: string) => (
      e: React.SyntheticEvent<HTMLInputElement>
    ): void => {
      setField({
        ...user,
        [fieldName]: e.currentTarget.value,
      })
      setNotification('')
    }
  
    const onSubmit = (e: React.SyntheticEvent<HTMLFormElement>): any => {
      e.preventDefault()
      authenticate(user)
        .then(() => {
          navigate("/protected")
        })
         .catch(err => {
           if (err.errorText) {
             setNotification(err.errorText)
           }
           })
    }
  
    return (
      <><div>
        <Text>Log in to use the app</Text>   
        <Form onSubmit={onSubmit}>
          {notification ? <p>{notification}</p> : null}
          <Input
            type="text"
            value={user.username}
            onChange={onInputChange('username')}
          />
          <Input
            type="text"
            value={user.password}
            onChange={onInputChange('password')}
          />
          <Button>Login</Button>
        </Form>
        </div>
      </>
    )
  }
