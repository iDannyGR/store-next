import GoBack from "@/components/buttons/GoBack";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
      <article className="w-[75%] max-h-screen flex flex-col items-center justify-center">
            {children}
            <GoBack />
        </article>
  );
}
