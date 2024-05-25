import { Api } from "@/libs/axiosInstance"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { useState } from "react"
import toast from "react-hot-toast"
import { TiDeleteOutline } from "react-icons/ti"

const InterestInput = () => {
  const [tags, setTags] = useState<string[]>([])
  const [inputValue, setInputValue] = useState("")

  const queryClient = useQueryClient()

  const mutation = useMutation({
    mutationFn: async (data: string[]) => {
      try {
        const token = localStorage.getItem("token")
        const response = await Api.post(
          "/updateProfile",
          { interests: data },
          {
            headers: {
              "x-access-token": token,
            },
          },
        )

        console.log(response.data)
        return response.data
      } catch (error) {
        throw error
      }
    },
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["profile"] })
      console.log("Profile updated:", data)
      toast.success("Created interest successfully")
    },
    onError: (error: any) => {
      const errorMessage = error.response?.data?.message || "Profile update failed"
      console.error(errorMessage)
    },
  })

  const handleTagChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value)
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && inputValue.trim() !== "") {
      e.preventDefault()
      const newTags = [...tags, inputValue.trim()]
      const filteredTags = newTags.filter(
        (tag, index, self) => tag !== "" && self.indexOf(tag) === index,
      )
      setTags(filteredTags)
      setInputValue("")
      mutation.mutate(filteredTags)
    }
  }

  const removeTag = (indexToRemove: number) => {
    const updatedTags = tags.filter((_, index) => index !== indexToRemove)
    setTags(updatedTags)
    mutation.mutate(updatedTags)
  }

  return (
    <div className="mt-2">
      <input
        type="text"
        value={inputValue}
        onChange={handleTagChange}
        onKeyDown={handleKeyDown}
        className="w-full pb-1 text-2xl border-b bg-transparent outline-none"
        placeholder="What interests you?"
      />

      <div className="mt-16 flex flex-wrap gap-x-1 gap-y-2 bg-white bg-opacity-10 rounded-lg px-4 py-3">
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
