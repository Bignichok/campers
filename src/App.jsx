import { lazy, Suspense } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';

const HomePage = lazy(() => import('@/pages/HomePage'));
const SvgSprite = lazy(() => import('@/components/SvgSprite'));

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
				<SvgSprite />
			</Suspense>
		</>
	);
};

export default App;
