import { useAppSelector } from "../../../core/hooks"
import { selectCurrentModule } from "../store/slice"

export function Header() {
  const currentModule = useAppSelector(selectCurrentModule)

  return (
    <div className="flex flex-col gap-1">
      <h1 className="text-2xl font-bold">Fundamentos do Redux</h1>
      <span className="text-sm text-zinc-400">
        {`Módulo ${currentModule.title}`}
      </span>
    </div>
  )
}
