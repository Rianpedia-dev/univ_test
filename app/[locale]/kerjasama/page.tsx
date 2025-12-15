import { redirect } from 'next/navigation';

export default async function KerjasamaPage({ params }: { params: Promise<{ locale: string }> }) {
  const resolvedParams = await params;
  // Redirect to the first submenu item: kerjasama/partnership
  redirect(`/${resolvedParams.locale}/kerjasama/partnership`);
}