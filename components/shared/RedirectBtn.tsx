"use client";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button"; // Adjust path as necessary

export default function RedirectButton() {
  const router = useRouter();

  return (
    <Button onClick={() => router.push("/sign-in")}>
      Please head to the Sign in Page
    </Button>
  );
}
