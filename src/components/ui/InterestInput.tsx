import { useState } from "react"
import { TiDeleteOutline } from "react-icons/ti"

interface InterestInputProps {
  tags: string[]
  setTags: React.Dispatch<React.SetStateAction<string[]>>
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void
  value?: string
}

const InterestInput = ({
  tags,
  setTags,
  onChange,
  onKeyDown,
  value,
}: InterestInputProps) => {


  const removeTag = (indexToRemove: number) => {
    const updatedTags = tags.filter((_, index) => index !== indexToRemove)
    setTags(updatedTags)
  }

  return (
    <div className="mt-4">
      <input
        type="text"
        value={value}
        onChange={onChange}
        onKeyDown={onKeyDown}
        className="w-full pb-1 text-2xl border-b bg-transparent outline-none"
        placeholder="What interests you?"
      />
      <div className="mt-10 flex flex-wrap gap-x-1 gap-y-2 bg-white bg-opacity-10 rounded-lg px-4 py-3">
        {tags.map((tag, index) => (
          <div
            key={index}
            className="flex items-center py-1 px-2 text-sm bg-white bg-opacity-15 rounded"
          >
            <p className="inline-flex text-md items-center">{tag}</p>
            <button
              type="button"
              className="text-lg ml-2 text-md rounded-full"
              onClick={() => removeTag(index)}
            >
              <TiDeleteOutline size={22} />
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default InterestInput
