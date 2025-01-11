import { lazy, Suspense } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';

import Header from '@/components/Header';
import Spinner from '@/components/Spinner';

const HomePage = lazy(() => import('@/pages/HomePage'));
const CatalogPage = lazy(() => import('@/pages/CatalogPage'));
const CamperPage = lazy(() => import('@/pages/CamperPage'));
const SvgSprite = lazy(() => import('@/components/SvgSprite'));

const App = () => {
	return (
		<>
			<Header />
			<Suspense fallback={<Spinner />}>
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="/catalog" element={<CatalogPage />} />
					<Route path="/catalog/:id" element={<CamperPage />} />
					<Route path="*" element={<Navigate to="/" replace />} />
				</Routes>
				<SvgSprite />
			</Suspense>
		</>
	);
};

export default App;
