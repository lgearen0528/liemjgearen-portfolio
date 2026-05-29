import { useFormStatus } from "react-dom"
import { FaPaperPlane } from "react-icons/fa"

export default function SubmitBtn() {
  const { pending } = useFormStatus()

  return (
    <button
      type="submit"
      className="group flex items-center justify-center gap-2 h-[3rem] w-[8rem] bg-black text-white rounded-full outline-none transition-all focus:scale-110 hover:scale-110 hover:bg-zinc-900 active:scale-105 cursor-pointer shadow-lg dark:bg-white/10 disabled:scale-100 disabled:opacity-65"
      disabled={pending}
    >
      {pending ? (
        <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-white"></div>
      ) : (
        <>
          Submit{" "}
          <FaPaperPlane className="text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />{" "}
        </>
      )}
    </button>
  )
}
