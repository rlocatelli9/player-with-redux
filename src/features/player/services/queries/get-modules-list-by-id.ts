import { queryOptions } from "@tanstack/react-query"
import { responseModulesListSchema } from "../../schemas"

export const getModulesListByCourseIdQueryOptions = ({ courseId }: { courseId: number }) => {
  return queryOptions({
    queryKey: ['course-list'],
    queryFn: async ({ signal }) => {
      const response = await fetch(`http://localhost:3333/courses/${courseId}/modules`, {
        method: 'GET',
        headers: new Headers({
          'Content-Type': 'application/json',
        }),
        signal
      })
      if (!response.ok) throw new Error('Response not ok')
      const data = await response.json()
      return responseModulesListSchema.safeParse(data)
    }
  })
}