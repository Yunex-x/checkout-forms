export default function ProcessingOverlay() {
  return (
    <div className="fixed inset-0 z-50 bg-white flex items-center justify-center">
      <video
        src="/l.mp4"
        autoPlay
        loop
        muted
        className="w-[160px] h-[160px]"
      />
    </div>
  );
}