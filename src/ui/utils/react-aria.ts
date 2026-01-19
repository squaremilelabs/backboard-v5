import { ReactNode } from "react"
import { ClassValue } from "./tailwind"

export type ChildrenOrFunction<R> = ReactNode | ((renderProps: R) => ReactNode)
export type ClassNameOrFunction<R> = ClassValue | ((renderProps: R) => ClassValue)

/**
 * @example
 * <Button>
 *   {props => renderChildren(children, props)}
 * </Button>
 */
export function renderChildren<R>(children: ChildrenOrFunction<R>, renderProps: R) {
  if (typeof children === "function") return children(renderProps)
  return children
}

/**
 * @example
 * <Button className={props => renderClassName(className, props)} />
 */
export function renderClassName<R>(className: ClassNameOrFunction<R>, renderProps: R) {
  if (typeof className === "function") return className(renderProps)
  return className
}
