import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '../../store/authStore';
import { AdminLayout } from '../../components/admin/Layout';
import { DashboardHome } from '../../components/admin/DashboardHome';

export function AdminDashboard() {
  const navigate = useNavigate();
  const { user, loading, checkUser } = useAuthStore();

  useEffect(() => {
    checkUser();
  }, [checkUser]);

  useEffect(() => {
    if (!loading && !user) {
      navigate('/admin');
    }
  }, [user, loading, navigate]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <AdminLayout>
      <DashboardHome />
    </AdminLayout>
  );
}