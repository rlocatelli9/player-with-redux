import { MessageCircle } from 'lucide-react'

export function FeedbackButton() {
  return (
    <button
      type="button"
      className={`
            flex items-center gap-2 rounded bg-violet-500 px-3 py-2 
            text-sm font-medium text-white
          `}
    >
      <MessageCircle className="w-4 h-4" />
      Deixar feedback
    </button>
  )
}
