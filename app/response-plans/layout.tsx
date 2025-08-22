import Navbar from "@/components/navbar";

export default function ResponsePlansLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
}
