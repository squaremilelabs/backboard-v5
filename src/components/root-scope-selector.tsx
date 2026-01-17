import { Button } from "react-aria-components"
import { LayersIcon } from "lucide-react"
import { useState } from "react"
import { cn } from "@/ui/utils/tailwind"
import { chip } from "@/ui/primitives/chip"
import { scopes, type Scope } from "@/lib/db.mock"

export function RootScopeSelector() {
  const [selectedScopes, setSelectedScopes] = useState<Scope[]>([])

  const mock_onPress = () => {
    if (selectedScopes.length) {
      setSelectedScopes([])
    } else {
      setSelectedScopes(scopes)
    }
  }

  const hasSelectedScopes = selectedScopes.length > 0

  return (
    <Button
      onPress={mock_onPress}
      className={cn(
        `flex h-box-md items-center gap-8 overflow-auto rounded-[8px] border-2 border-base-border
        bg-base-surface px-8 transition-all data-focus-visible:scale-105 data-hovered:opacity-80
        data-pressed:scale-95`,
        !hasSelectedScopes &&
          `border-transparent bg-transparent text-neutral-text data-hovered:bg-base-surface
          data-hovered:opacity-100`
      )}
    >
      <LayersIcon className="shrink-0" />
      {hasSelectedScopes && (
        <>
          <div className="hidden gap-2 overflow-auto sm:flex">
            {selectedScopes.map((scope) => {
              return (
                <span className={chip()} key={scope.id}>
                  {scope.name}
                </span>
              )
            })}
          </div>
          <span className={chip({ className: "sm:hidden" })}>{selectedScopes.length}</span>
        </>
      )}
    </Button>
  )
}
