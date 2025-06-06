import React from 'react';
import AddNewInterview from './_components/AddNewInterview';
import Interviewlist from './_components/Interviewlist';

function Dashboard() {
  return (
    <div className="min-h-screen w-full px-8 py-10 bg-white">
      <header className="max-w-[1200px] mx-auto mb-10">
        <h1 className="text-2xl font-extrabold text-gray-800">Dashboard</h1>
        <p className="mt-3 text-gray-600 text-lg">
          Create and start your AI Mockup Interview
        </p>
      </header>

      <main className="max-w-[1200px] mx-auto flex flex-col gap-10">
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <AddNewInterview />
        </section>

        <section>
          <Interviewlist />
        </section>
      </main>
    </div>
  );
}

export default Dashboard;
