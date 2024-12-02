import { TeamList } from '../../components/admin/team/TeamList';
import { AdminLayout } from '../../components/admin/Layout';

export function TeamManagement() {
  return (
    <AdminLayout>
      <TeamList />
    </AdminLayout>
  );
}