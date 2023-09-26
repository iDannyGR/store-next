import GoBack from "@/components/buttons/GoBack";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
      <article>
            {children}
            <GoBack />
        </article>
  );
}
