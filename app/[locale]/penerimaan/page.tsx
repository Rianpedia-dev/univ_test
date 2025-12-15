import { redirect } from 'next/navigation';

export default async function PenerimaanPage({ params }: { params: Promise<{ locale: string }> }) {
  const resolvedParams = await params;
  // Redirect to the first submenu item: penerimaan/pendaftaran-pmb
  redirect(`/${resolvedParams.locale}/penerimaan/pendaftaran-pmb`);
}