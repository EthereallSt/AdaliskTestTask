import { Routes, Route } from 'react-router-dom';
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