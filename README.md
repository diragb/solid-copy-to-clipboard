# solid-copy-to-clipboard

[![npm](https://img.shields.io/badge/npm-solid--copy--to--clipboard-brightgreen.svg?style=flat-square)](https://www.npmjs.com/package/solid-copy-to-clipboard)
[![npm version](https://img.shields.io/npm/v/solid-copy-to-clipboard.svg?style=flat-square)](https://www.npmjs.com/package/solid-copy-to-clipboard)
[![npm downloads](https://img.shields.io/npm/dm/solid-copy-to-clipboard.svg?style=flat-square)](https://www.npmjs.com/package/solid-copy-to-clipboard)
[![sponsors](https://img.shields.io/github/sponsors/diragb)](https://github.com/sponsors/diragb)

A lightweight *copy to clipboard* utility for Solid with custom event triggers, written in Typescript and based on the original [copy-to-clipboard](https://www.npmjs.com/package/copy-to-clipboard).

# Usage

## Installation

```bash
npm install solid-copy-to-clipboard --save
yarn add solid-copy-to-clipboard ## or in yarn
```

## Example
```tsx
import { Component } from 'solid-js'
import { CopyToClipboard } from 'solid-copy-to-clipboard'


const Page: Component = () => (
  <CopyToClipboard
    text='Text to be copied'
    onCopy={ () => console.log('Copied!') }
    eventTrigger='onMouseOver'
  >
    <div>Hover over me to copy To clipboard ✨</div>
  </CopyToClipboard>
)
```

# API

## text
`string`

The text to be copied.

## onCopy
`(text: string, result: boolean) => void` - **OPTIONAL**

Callback function once text is copied.

## eventTrigger
`string` - **OPTIONAL**

Optional event trigger, defaults to `onClick`.

## options
`object` - **OPTIONAL**

Optional options for **[copy-to-clipboard](https://npm.im/copy-to-clipboard)**.

# License
MIT
