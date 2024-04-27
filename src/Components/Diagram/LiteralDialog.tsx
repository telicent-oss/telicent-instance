import React, { FC, useEffect, useState } from 'react'
import { TeliAutocomplete, TeliButton, TeliTextField } from "@telicent-oss/ds"
import { DialogBox } from '../../lib/DialogBox/DialogBox'

interface LiteralDialogProps {
  onClose: () => void
  onSubmit: (prefix: string, name: string) => void
  options: Array<string>
  title: string
  lastSelected: string
}

export const LiteralDialog: FC<LiteralDialogProps> = ({ options, onClose, title, onSubmit, lastSelected }) => {
  const [selectedEdgeType, setSelectedEdgeType] = useState<string>(lastSelected)
  const [attributeValue, setAttributeValue] = useState<string>("")

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.key === 'Enter') {
        onHandleSubmit()
      }
    }
    document.addEventListener('keypress', handleKeyPress)
    return () => {
      document.removeEventListener('keypress', handleKeyPress)
    }
  }, [])

  const onChangeName: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    event.preventDefault()

    setAttributeValue(event.target.value)
  }

  const onChangeEdgeType = (event: React.SyntheticEvent<Element, Event>, value: string | null) => {
    event.preventDefault()
    if (!value) {
      console.warn("Invalid value", value)
      return
    }
    setSelectedEdgeType(value)
  }

  const onHandleSubmit = () => {
    if (!selectedEdgeType || !attributeValue) {
      console.warn("Literal must have valid inputs")
      return
    }
    onSubmit(selectedEdgeType, attributeValue)
  }

  return (
    <DialogBox onClose={onClose} title={title}>
      <div className="dark:text-whiteSmoke flex flex-col gap-y-8 rounded">
        <div className='flex gap-x-2'>
          <TeliAutocomplete options={options} width={150} label="DataTypeProperty" onChange={onChangeEdgeType} value={selectedEdgeType} />
          <TeliTextField id="attribute-value" label="Value" onChange={onChangeName} value={attributeValue} required />
        </div>
        <div className='flex justify-end w-full'>
          <TeliButton onClick={onHandleSubmit} variant="secondary" disabled={!attributeValue || !selectedEdgeType}>Submit</TeliButton>
        </div>
      </div>
    </DialogBox>
  )
}
