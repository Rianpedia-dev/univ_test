"use client";

import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function SignInPage() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-background px-4">
            <Card className="w-full max-w-md text-center">
                <CardHeader>
                    <CardTitle className="text-2xl font-bold">Sign In Disabled</CardTitle>
                    <CardDescription>
                        This feature is currently not available in the frontend-only version.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <p>
                        <Link href="/" className="font-medium text-primary hover:underline">
                            Return to Homepage
                        </Link>
                    </p>
                </CardContent>
            </Card>
        </div>
    );
}