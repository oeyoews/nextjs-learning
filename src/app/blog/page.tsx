type Repository = {
  id: number;
  name: string;
  full_name: string;
}


export default async function Page() {
  const res = await fetch('https://api.github.com/repos/vercel/next.js');
  const data: Repository = await res.json();
  return <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-slate-50">{data.full_name}</main>
}
