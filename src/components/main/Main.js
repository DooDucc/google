import { Routes, Route, Navigate } from 'react-router-dom';
import Results from '../results/Results';

const Main = () => (
    <div>
        <Routes>
            <Route path="/" element={<Navigate from="/" to="/search" />} />
            <Route path="/search" element={<Results />} />
            <Route path="/image" element={<Results />} />
            <Route path="/news" element={<Results />} />
            <Route path="/video" element={<Results />} />
        </Routes>
    </div>
);

export default Main;
