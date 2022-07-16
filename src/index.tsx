// Packages:
import {
  JSXElement,
  Component,
  children
} from 'solid-js'
import copy from 'copy-to-clipboard'


// Typescript:
export interface CopyToClipboardProps {
  text: string
  children: JSXElement
  onCopy?: (text: string, result: boolean) => void
  eventTrigger?: string
  options?: {
    debug?: boolean
    message?: string
    format?: string
  }
}


// Functions:
export const CopyToClipboard: Component<CopyToClipboardProps> = (props) => {
  // Constants:
  const c = children(() => props.children)

  // Functions:
  const eventTrigger = {
    [ props.eventTrigger ?? 'onClick' ]: () => {
      const result = copy(props.text, props.options)
      if (props.onCopy) props.onCopy(props.text, result)
    }
  }

  // Return:
  return (
    <div { ...eventTrigger } >{ c() }</div>
  )
}
