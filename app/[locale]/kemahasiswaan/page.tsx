import { redirect } from 'next/navigation';

export default async function KemahasiswaanPage({ params }: { params: Promise<{ locale: string }> }) {
  const resolvedParams = await params;
  // Redirect to the first submenu item: kemahasiswaan/layanan-mahasiswa
  redirect(`/${resolvedParams.locale}/kemahasiswaan/layanan-mahasiswa`);
}