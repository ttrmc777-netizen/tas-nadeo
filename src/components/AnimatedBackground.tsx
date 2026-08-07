export default function AnimatedBackground() {
  return (
    <>
      <div className="fixed inset-0 -z-50 bg-[#06080d]" />

      <div className="background-grid fixed inset-0 -z-40" />

      <div className="background-glow background-glow-1 fixed -z-30" />
      <div className="background-glow background-glow-2 fixed -z-30" />

      <div className="background-stars fixed inset-0 -z-20" />
    </>
  );
}