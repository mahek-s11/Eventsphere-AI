export default function FloatingAssistant() {
  return (
    <a
      href="/assistant"
      title="EventSphere AI Assistant"
      className="
        fixed
        bottom-6
        right-6
        z-50
        flex
        h-16
        w-16
        items-center
        justify-center
        rounded-full
        bg-gradient-to-r
        from-purple-600
        to-pink-500
        text-3xl
        shadow-lg
        shadow-purple-500/50
        transition-all
        duration-300
        hover:scale-110
        hover:shadow-purple-500/80
        animate-pulse
      "
    >
      ✨
    </a>
  );
}