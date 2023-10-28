import * as zod from "zod"

const TagSchema = zod.string().array()

const ShaderSchema = zod.object({
  shaderName: zod.string().optional()
})

const PhysicsSchema = zod.object({
  rotationalInertia: zod.number(),
  gravityScale: zod.number(),
  allowSleep: zod.boolean(),
  awake: zod.boolean(),
  density: zod.number(),
  friction: zod.number(),
  height: zod.number()
})

const SensorSchema = zod.object({
            bottomSpanPercent: zod.number(),
            leftSpanPercent: zod.number(),
            rightSpanPercent: zod.number(),
            topSpanPercent: zod.number(),
            bottomHeightPercent: zod.number(),
            leftWidthPercent: zod.number(),
            rightWidthPercent: zod.number(),
            topHeightPercent:zod.number()
          })


const CircleSchema = zod.object({
            x: zod.number(),
            y: zod.number(),
            radius: zod.number()
          })

const VertexSchema = zod.object({
  x: zod.number(),
  y: zod.number()
})

const CustomVariableSchema = zod.record(zod.string(),zod.string())

const LayerSchema = zod.object({
  layerName: zod.string(),
  isVisible: zod.boolean().optional()
})

export const HyperLap2DSceneSchema = zod.object({
  sceneName: zod.string(),
  composite: zod.object({
    uniqueId: zod.string(),
    tags: TagSchema,
    originX: zod.number(),
    originY: zod.number(),
    layerName: zod.string(),
    shader: ShaderSchema.optional(),
    automaticResize: zod.boolean(),
    content: zod.object({
      "games.rednblack.editor.renderer.data.SpriteAnimationVO":
        zod.object({
          class: zod.string(),
          uniqueId: zod.string(),
          tags: TagSchema,
          x: zod.number(),
          y: zod.number(),
          originX: zod.number(),
          originY: zod.number(),
          zIndex: zod.number(),
          layerName: zod.string(),
          shader: ShaderSchema,
          physics: PhysicsSchema.optional(),
          sensor: SensorSchema.optional(),
          circle: CircleSchema.optional(),
          animationName: zod.string(),
          currentAnimation: zod.string(),
          frameRangeMap: zod.object({
            name: zod.string(),
            endFrame: zod.number()
          }).array(),
          playMode: zod.number()
        }).array(),
      "games.rednblack.editor.renderer.data.ColorPrimitiveVO":
        zod.object({
          class: zod.string(),
          uniqueId: zod.string(),
          itemIdentifier: zod.string(),
          tags: TagSchema,
          x: zod.number(),
          y: zod.number(),
          originX: zod.number(),
          originY: zod.number(),
          zIndex: zod.number(),
          layerName: zod.string(),
          tint: zod.number().array(),
          shader: ShaderSchema,
          shape: zod.object({
            vertices: VertexSchema.array()  ,
            polygonizedVertices: VertexSchema.array().array()
          })
        }).array()
        ,
      "games.rednblack.editor.renderer.data.LightVO":
        zod.object({
          class: zod.string(),
          uniqueId: zod.string(),
          itemIdentifier: zod.string(),
          tags: TagSchema,
          x: zod.number(),
          y: zod.number(),
          originX: zod.number(),
          originY: zod.number(),
          zIndex: zod.number(),
          layerName: zod.string(),
          shader: ShaderSchema,
          type: zod.string(),
          coneDegree: zod.number().optional(),
          softnessLength: zod.number().optional(),
          distance: zod.number().optional(),
          directionDegree: zod.number().optional(),
          height: zod.number().optional(),
          intensity: zod.number().optional()
        }).array()
        ,
      "games.rednblack.editor.renderer.data.SimpleImageVO":
        zod.object({
          class: zod.string(),
          uniqueId: zod.string(),
          itemIdentifier: zod.string(),
          tags: TagSchema,
          customVariables: CustomVariableSchema,
          x: zod.number(),
          y: zod.number(),
          originX: zod.number(),
          originY:zod.number(),
          layerName: zod.string(),
          shader: ShaderSchema,
          imageName: zod.string()
        }).array()
        ,
      "games.rednblack.editor.renderer.data.LabelVO":
        zod.object(
          {
            class: zod.string(),
            uniqueId: zod.string(),
            itemIdentifier: zod.string(),
            tags: TagSchema,
            x: zod.number(),
            y: zod.number(),
            originX: zod.number(),
            originY: zod.number(),
            zIndex: zod.number(),
            layerName: zod.string(),
            shader: ShaderSchema,
            text: zod.string(),
            style: zod.string(),
            size: zod.number(),
            align: zod.number(),
            width: zod.number(),
            height: zod.number()
          }
        ).array()
    }),
    layers: LayerSchema.array()
  }),

  /// TODO figure these out
  physicsPropertiesVO: zod.any(),
  lightsPropertiesVO: zod.any(),
  shaderVO: zod.any()
})
export type HyperLap2DScene = zod.infer<typeof HyperLap2DSceneSchema>
