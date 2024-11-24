import { GeistMono } from "geist/font/mono";
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <section className={GeistMono.className}>
      <h1>NAVBAR</h1>
      {children}
      <h1>FOOTER</h1>
    </section>
  );
}
