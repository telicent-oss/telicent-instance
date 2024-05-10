import React, { FC, useEffect, useState } from 'react'
import { TeliAutocomplete, TeliButton, TeliTextField } from "@telicent-oss/ds"
import { DialogBox } from '../../lib/DialogBox/DialogBox'

interface NodeDialogProps {
  onClose: () => void
  onSubmit: (prefix: string, name: string) => void
  options: Array<string>
  title: string
  lastSelectedPrefix: string
}

export const NodeDialog: FC<NodeDialogProps> = ({ options, onClose, title, onSubmit, lastSelectedPrefix }) => {
  const [selectedPrefix, setSelectedPrefix] = useState<string>(lastSelectedPrefix)
  const [name, setName] = useState<string>(crypto.randomUUID())

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.key === 'Enter') {
        handleSubmit()
      }
    }
    document.addEventListener('keypress', handleKeyPress)
    return () => {
      document.removeEventListener('keypress', handleKeyPress)
    }
  }, [])

  const handleChangeName: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    event.preventDefault()
    if (!event.target.value) return

    setName(event.target.value)
  }

  const handleChangePrefix = (event: React.SyntheticEvent<Element, Event>, value: string | null) => {
    event.preventDefault()
    if (!value) {
      console.warn("Invalid value", value)
      return
    }
    setSelectedPrefix(value)
  }

  const handleSubmit = () => {
    if (!selectedPrefix || !name) {
      console.warn("Node must have valid inputs")
      return
    }
    onSubmit(selectedPrefix, name)
  }

  return (
    <DialogBox onClose={onClose} title={title}>
      <div className="dark:text-whiteSmoke flex flex-col gap-y-8 rounded">
        <div className='flex gap-x-2'>
          <TeliAutocomplete options={options} width={150} label="Prefix" onChange={handleChangePrefix} value={selectedPrefix} />
          <TeliTextField id="node-name" label="URI" onChange={handleChangeName} value={name} required />
        </div>
        <div className='flex justify-end w-full'>
          <TeliButton onClick={handleSubmit} variant="secondary" disabled={!name || !selectedPrefix}>Submit</TeliButton>
        </div>
      </div>
    </DialogBox>
  )
}
