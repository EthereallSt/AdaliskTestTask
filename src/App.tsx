import { Routes, Route, Outlet } from 'react-router-dom';
import { LoginPage } from './pages/LoginPage';
import { ProtectedPage } from './pages/ProtectedPage'
import { Title, CContainer } from './style/text';




export default function App() {

  return (
    
    <CContainer>
      <Title>Test App</Title>
      <Routes>          
          <Route path="/login" element={<LoginPage />} />
          <Route path="*" element={<LoginPage />} />
          <Route path="/protected" element={<ProtectedPage />} />
      </Routes>

    </CContainer>

  );
}


// export function Layout() {
//   if (!checkAuthStatus()) {
//     return (
//     <div>
//       <form action="/login">
//       <Button1 type="submit" value="Authorization" >Авторизация </Button1>
//       </form> <Outlet />

//       <form action="/protected">
//          <Button1 type="submit" value="Protected">Работа с файлами</Button1>
//       </form>
//       <Outlet />
//     </div>
//   )
// }
// };