import { useNavigate } from 'react-router-dom';
import { IUserIdentity } from './user'

export interface IAuthResponse {
  status: number;
  data?: any;
  errorText?: string;
};


export const checkCredentials = (data: IUserIdentity): boolean => {
  if (data.username === 'root' && data.password === 'admin') {
    return true
  } else {
    return false
  }
}

export const authenticate = (data: IUserIdentity): Promise<IAuthResponse> => {
  const promise = new Promise<IAuthResponse>((resolve, reject) => {
    if (!checkCredentials(data)) {
      reject({
        status: 500,
        errorText: 'Incorrect username or password',
      })
    }
    window.localStorage.setItem('tstz.authenticated', 'true')
    resolve({
      status: 200,
      data: 'ok',
    })
  })

  return promise
}

export const checkAuthStatus = (): boolean => {
  if (localStorage.getItem('tstz.authenticated')) {
    return true
  } else {
    return false
  }
}

export const Logout = (): void => {
  const navigate = useNavigate();
  window.localStorage.removeItem('tstz.authenticated');
  console.log("Exit  done");
  navigate(-1)
}
