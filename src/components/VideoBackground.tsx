export default function VideoBackground() {
  return (
    <video
      autoPlay
      muted
      loop
      playsInline
      className="fixed inset-0 w-screen h-screen object-cover -z-50"
    >
      <source src="/videos/background.mp4" type="video/mp4" />
    </video>
  );
}