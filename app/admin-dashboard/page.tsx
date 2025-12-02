import Link from 'next/link';
import React from 'react';

const AdminDashboard = () => {
    return (
        <section>
            Admin Dashboard
            {/*Admin Manage  */}
            <section className='grid grid-cols-2 lg:grid-cols-4'>
                <div className='p-3 rounded-md text-lg border border-foreground text-center font-bold shadow-2xl'>
                    <Link href='/admin-dashboard/add-course'>Add new Course</Link>
                </div>
            </section>
        </section>
    );
};

export default AdminDashboard;