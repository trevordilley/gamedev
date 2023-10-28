import * as zod from "zod";

const OriginalResolutionSchema = zod.object({
  name: zod.string(),
  width: zod.number(),
  height: zod.number()
})

const SceneSchema = zod.object(
  {
    sceneName: zod.string(),
    physicsPropertiesVO: zod.object({}),
    lightsPropertiesVO: zod.object({}),
    shaderVO: zod.object({})
  })


const LibraryActionSchema =
  zod.object({
      version: zod.number(),
      nodes: zod.object({
        id: zod.string(),
        type: zod.string(),
        x: zod.number(),
        y: zod.number(),
        data: zod.record(zod.string(), zod.string()).optional()

      }).array(),
      connections: zod.object({
        fromNode: zod.string(),
        fromField: zod.string(),
        toNode: zod.string(),
        toField: zod.string()
      }).array()
    }
  )

const ImagePackSchema = zod.object({
  name: zod.string(),
  regions: zod.string().array().optional()
})

export const HyperLap2DProjectSchema = zod.object({
  originalResolution: OriginalResolutionSchema,
  scenes: SceneSchema.array(),
  libraryActions: zod.record( zod.string(),LibraryActionSchema).optional(),
  imagesPacks: zod.record(zod.string(), ImagePackSchema),
  animationsPacks: zod.record(zod.string(), zod.object({
    name: zod.string(),
    regions: zod.string().array().optional()
  }))})

export type HyperLap2DProject = zod.infer<typeof HyperLap2DProjectSchema>
