import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";

export default async function DashboardPage() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/login");
  }

  return (
    <main className="flex min-h-screen items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <h1 className="text-3xl font-bold">Welcome to Cadence</h1>
        <p className="text-gray-500">Signed in as {user.email}</p>
        <form action="/auth/signout" method="post">
          <button
            type="submit"
            className="rounded-lg bg-red-600 px-6 py-3 text-white font-medium hover:bg-red-700"
          >
            Sign out
          </button>
        </form>
      </div>
    </main>
  );
}
