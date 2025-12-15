import { redirect } from 'next/navigation';

export default async function ProfilPage({ params }: { params: Promise<{ locale: string }> }) {
  const resolvedParams = await params;
  // Redirect to the first submenu item: profil/struktur-organisasi
  redirect(`/${resolvedParams.locale}/profil/struktur-organisasi`);
}