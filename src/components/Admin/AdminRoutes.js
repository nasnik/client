import React, { useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';

import AddRestaurant from './Control/AddRestaurant';
import AdminAppStats from './Control/AdminAppStats';
import AdminDashboard from './AdminDashboard';
import AllRestaurants from './Control/AllRestaurants';

const AdminRoutes = ({ isAdmin }) => {
	const navigate = useNavigate();

	useEffect(() => {
		if (!isAdmin) {
			navigate('/login');
		}
	}, [isAdmin, navigate]);

	return (
		<Routes>
			<Route path="/*" element={<AdminDashboard />}>
				<Route index element={<AdminAppStats />} />
				<Route path="restaurants" element={<AllRestaurants />} />
				<Route path="add-restaurant" element={<AddRestaurant />} />
				{/* Add other routes here */}
			</Route>
		</Routes>
	);
};

export default AdminRoutes;
