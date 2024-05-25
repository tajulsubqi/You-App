import React, { useEffect, useRef, useState } from "react"

const App: React.FC = () => {
  const [tags, setTags] = useState<string[]>([])
  const [inputVisible, setInputVisible] = useState(false)
  const [inputValue, setInputValue] = useState("")
  const [editInputIndex, setEditInputIndex] = useState<number | null>(null)
  const [editInputValue, setEditInputValue] = useState("")

  const inputRef = useRef<HTMLInputElement>(null)
  const editInputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (inputVisible) {
      inputRef.current?.focus()
    }
  }, [inputVisible])

  useEffect(() => {
    if (editInputIndex !== null) {
      editInputRef.current?.focus()
    }
  }, [editInputIndex])

  const handleClose = (removedTag: string) => {
    setTags(tags.filter((tag) => tag !== removedTag))
  }

  const showInput = () => {
    setInputVisible(true)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value)
  }

  const handleInputConfirm = () => {
    if (inputValue && !tags.includes(inputValue)) {
      setTags([...tags, inputValue])
    }
    setInputVisible(false)
    setInputValue("")
  }

  const handleEditInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditInputValue(e.target.value)
  }

  const handleEditInputConfirm = () => {
    if (editInputIndex !== null) {
      const newTags = [...tags]
      newTags[editInputIndex] = editInputValue
      setTags(newTags)
      setEditInputIndex(null)
      setEditInputValue("")
    }
  }

  return (
    <div className="flex flex-wrap gap-2">
      {tags.map((tag, index) => (
        <TagItem
          key={tag}
          tag={tag}
          index={index}
          isEditing={editInputIndex === index}
          onEdit={() => {
            setEditInputIndex(index)
            setEditInputValue(tag)
          }}
          onClose={handleClose}
          editInputValue={editInputValue}
          onEditInputChange={handleEditInputChange}
          onEditInputConfirm={handleEditInputConfirm}
          editInputRef={editInputRef}
        />
      ))}
      {inputVisible ? (
        <input
          ref={inputRef}
          type="text"
          className="w-16 h-6 mb-1 mr-2 border border-gray-300 rounded px-1"
          value={inputValue}
          onChange={handleInputChange}
          onBlur={handleInputConfirm}
          onKeyDown={(e) => e.key === 'Enter' && handleInputConfirm()}
        />
      ) : (
        <div
          className="h-6 mb-1 mr-2 flex items-center justify-center border-2 border-dashed border-gray-300 rounded px-1 cursor-pointer"
          onClick={showInput}
        >
          New interest
        </div>
      )}
    </div>
  )
}

interface TagItemProps {
  tag: string
  index: number
  isEditing: boolean
  onEdit: () => void
  onClose: (tag: string) => void
  editInputValue: string
  onEditInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  onEditInputConfirm: () => void
  editInputRef: React.RefObject<HTMLInputElement>
}

const TagItem: React.FC<TagItemProps> = ({
  tag,
  index,
  isEditing,
  onEdit,
  onClose,
  editInputValue,
  onEditInputChange,
  onEditInputConfirm,
  editInputRef,
}) => {
  return isEditing ? (
    <input
      ref={editInputRef}
      type="text"
      className="w-16 h-6 mb-1 mr-2 border border-gray-300 rounded px-1"
      value={editInputValue}
      onChange={onEditInputChange}
      onBlur={onEditInputConfirm}
      onKeyDown={(e) => e.key === 'Enter' && onEditInputConfirm()}
    />
  ) : (
    <div
      className="flex items-center bg-gray-200 px-2 py-1 rounded-full text-sm cursor-pointer"
      onDoubleClick={onEdit}
    >
      <span>{tag.length > 20 ? `${tag.slice(0, 20)}...` : tag}</span>
      {index !== 0 && (
        <button
          type="button"
          className="ml-2 text-gray-500 hover:text-gray-700"
          onClick={() => onClose(tag)}
        >
          &times;
        </button>
      )}
    </div>
  )
}

export default App
