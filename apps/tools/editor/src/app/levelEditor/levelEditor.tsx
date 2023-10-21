import {FC, useLayoutEffect, useMemo, useRef} from "react";
import {game} from "@gamedev/libs/kaboom/game"
import {KaboomCtx, Polygon, Vec2} from "kaboom";
import {polygon} from "@gamedev/libs/kaboom/components";
interface Poly {
  id: number,
  tags?: string[],
  projectId: number,
  points: [x: number, y: number][]
  fill: {r: number, g: number, b:number},
  layer: number,
  attributes?: object
}

interface LevelEditorProps {
  levelImageUrl: string
  editorConfig?: {width: number, height: number}
  polygons?: Poly[]
}
export const LevelEditor: FC<LevelEditorProps> = (props) => {
  const polygons = props.polygons ?? []
  const scene = useRef<KaboomCtx | undefined>(undefined)
  const node = useRef<HTMLDivElement>(null)


  const config = props.editorConfig ?? {width: 2048, height: 2048}
  useLayoutEffect(() => {
    if(scene.current) return

    const run = (k: KaboomCtx) => {
      // Load the level to be edited
      k.loadSprite("level", props.levelImageUrl)
      k.add([
        k.sprite("level")
      ])



      const mousePos = k.mousePos()
      const mousePosLabel = (pos: Vec2) => `x:${pos.x}, y: ${pos.y}`
      const cursor = k.add([
        k.pos(mousePos),
        k.text(mousePosLabel(mousePos))
      ])

      k.onMouseMove(pos => {
        cursor.pos = pos
        cursor.text = mousePosLabel(pos)
      })

      for(const p of polygons) {
        // const points = [...p.points, p.points[0]]
        const pts = p.points.map(([x, y]) => k.vec2(x, y))
        // const color = k.rgb(p.fill.r, p.fill.g, p.fill.b)
        // k.drawLines({pts, color, width: 4,  })
        k.add([
          polygon(k, {
            pts,
          }),
          k.color(255,0,0),
          k.opacity(0.2)
        ])
      }

      // k.onDraw(() => {
      //   // Load the polygons for the level
      // })

    }

    scene.current = game({
      root: node.current as HTMLElement,
      width: config.width,
      height: config.height,
      run})
  },[])
  return node && (<div ref={node} style={{width: config.width, height: config.height}}/>)
}
