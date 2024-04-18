import React, { FC, useState } from 'react'
import { TeliAutocomplete, TeliButton, TeliTextField } from "@telicent-oss/ds"
import { DialogBox } from '../../lib/DialogBox/DialogBox'

interface NodeDialogProps {
  onClose: () => void
  onSubmit: (name: string) => void
  options: Array<string>
  title: string
}
export const NodeDialog: FC<NodeDialogProps> = ({ options, onClose, title, onSubmit }) => {
  const [selectedPrefix, setSelectedPrefix] = useState<string>(options[0])
  const [name, setName] = useState<string>(crypto.randomUUID())

  const onChangeName: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    event.preventDefault()
    if (!event.target.value) {
      setName(crypto.randomUUID())
      return
    }

    setName(event.target.value)
  }

  const onChangePrefix = (event: React.SyntheticEvent<Element, Event>, value: string | null) => {
    event.preventDefault()
    if (!value) {
      console.warn("Invalid value", value)
      return
    }
    setSelectedPrefix(value)
  }

  const onHandleSubmit = () => {
    if (!selectedPrefix || !name) {
      console.warn("Node must have valid inputs")
      return
    }
    onSubmit(`${selectedPrefix}${name}`)
  }

  return (
    <DialogBox onClose={onClose} title={title}>
      <div className="dark:text-whiteSmoke flex flex-col gap-y-8 rounded">
        <div className='flex gap-x-2'>
          <TeliAutocomplete options={options} width={150} label="Prefix" onChange={onChangePrefix} />
          <TeliTextField id="node-name" label="Node name" onChange={onChangeName} value={name} required />
        </div>
        <div className='flex justify-end w-full'>
          <TeliButton onClick={onHandleSubmit} variant="secondary" disabled={!name || !selectedPrefix}>Submit</TeliButton>
        </div>
      </div>
    </DialogBox>
  )
}
