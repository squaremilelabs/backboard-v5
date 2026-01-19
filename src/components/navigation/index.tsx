"use client"

import { Toolbar } from "react-aria-components"
import { StatusNav } from "./status-nav"
import { ScopeNav } from "./scope-nav"

export function Navigation() {
  return (
    <Toolbar className="flex justify-between gap-8">
      <StatusNav />
      <ScopeNav />
    </Toolbar>
  )
}
