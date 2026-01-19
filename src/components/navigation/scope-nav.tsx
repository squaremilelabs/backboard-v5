"use client"

import { Button } from "react-aria-components"
import { LayersIcon } from "lucide-react"
import { useState } from "react"
import { cn } from "@/ui/utils/tailwind"
import { chip } from "@/ui/primitives/chip"
import { scopes, type Scope } from "@/lib/db.mock"
import { button } from "@/ui/primitives/button"

export function ScopeNav() {
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
      className={button({
        hoverEffect: "fill",
        withScaleEffect: true,
        className: cn(
          `flex h-box-md items-center gap-8 overflow-auto rounded-[8px] border-2 border-base-border
          bg-base-surface px-8`,
          !hasSelectedScopes && "border-0 bg-transparent text-neutral-text"
        ),
      })}
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
