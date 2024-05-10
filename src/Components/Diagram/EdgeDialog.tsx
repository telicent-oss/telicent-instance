import React, { FC, useState } from 'react'
import { TeliAutocomplete, TeliButton } from "@telicent-oss/ds"
import { DialogBox } from '../../lib/DialogBox/DialogBox'

interface EdgeDialogProps {
  onClose: () => void
  onSubmit: (name: string) => void
  options: Array<string>
  title: string
}
export const EdgeDialog: FC<EdgeDialogProps> = ({ options, onClose, title, onSubmit }) => {
  const [selectedEdgeType, setSelectedEdgeType] = useState<string | null>(null)

  const handleChangePrefix = (event: React.SyntheticEvent<Element, Event>, value: string | null) => {
    event.preventDefault()
    if (!value) {
      console.warn("Invalid value", value)
    }
    setSelectedEdgeType(value)
  }

  const handleSubmit = () => {
    if (!selectedEdgeType) {
      console.warn("Edge must have valid inputs")
      return
    }
    onSubmit(selectedEdgeType)
  }

  return (
    <DialogBox onClose={onClose} title={title}>
      <div className="dark:text-whiteSmoke flex flex-col gap-y-8 rounded">
        <div className='flex gap-x-2'>
          <TeliAutocomplete options={options} width={150} label="Object Property:" onChange={handleChangePrefix} />
        </div>
        <div className='flex justify-end w-full'>
          <TeliButton onClick={handleSubmit} variant="secondary" disabled={!selectedEdgeType}>Submit</TeliButton>
        </div>
      </div>
    </DialogBox>
  )
}
