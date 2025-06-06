import { redirect } from 'next/navigation';

export default function Home() {
  redirect('/question'); // Redirect to the question page
}
