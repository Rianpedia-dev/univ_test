"use client";

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

// Redirect dari root ke locale default menggunakan client-side redirect
export default function RootPage() {
  const router = useRouter();

  useEffect(() => {
    router.push('/id'); // Ganti dengan locale default yang diinginkan
  }, [router]);

  return null; // Render nothing while redirecting
}