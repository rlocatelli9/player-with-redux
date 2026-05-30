import { z } from 'zod'

export const currentVideoSchema = z.object({
  moduleIndex: z.number().nonnegative().default(0),
  lessonIndex: z.number().nonnegative().default(0)
})

export const lessonSchema = z.object({
  id: z.string(),
  title: z.string(),
  duration: z.number()
})

export const moduleSchema = z.object({
  id: z.number().nonnegative(),
  title: z.string(),
  lessons: z.array(lessonSchema)
})

export const courseSchema = z.object({
  modules: z.array(moduleSchema)
})

export const playerStateSchema = z.object({
  current: currentVideoSchema,
  course: courseSchema.nullable().default(null),
  autoPlay: z.boolean().default(false)
})

export const responseModulesListSchema = z.object({
  courseId: z.string(),
  modules: z.array(moduleSchema)
})

export type PlayerStateProps = z.infer<typeof playerStateSchema>
export type CurrentVideoProps = z.infer<typeof currentVideoSchema>
export type CourseProps = z.infer<typeof courseSchema>
export type ModuleProps = z.infer<typeof moduleSchema>
export type ResponseModulesListProps = z.infer<typeof responseModulesListSchema>

// Schema de formulário (UI)
//export const createPlayerSchema = playerSchema.omit({ id: true }).extend({
//terms: z.boolean().refine(val => val === true, "Must accept terms"),
//})

