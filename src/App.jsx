import { lazy, Suspense } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';

const HomePage = lazy(() => import('@/pages/HomePage'));

const App = () => {
	return (
		<>
			<div>Header</div>
			<Suspense fallback={<div>Loading...</div>}>
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="/catalog" element={<div>catalog</div>} />
					<Route path="/catalog/:id" element={<div>/catalog/:id</div>} />
					<Route path="*" element={<Navigate to="/" replace />} />
				</Routes>
			</Suspense>
		</>
	);
};

export default App;
