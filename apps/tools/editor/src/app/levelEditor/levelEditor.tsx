import {FC, useLayoutEffect, useMemo, useRef} from "react";
import {game} from "@gamedev/libs/kaboom/game"
import {Color, ColorComp, GameObj, KaboomCtx, OpacityComp, Polygon, PolygonComp, Vec2} from "kaboom";
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

function isPoly(obj: GameObj<any>): obj is GameObj<PolygonComp> {
  return  (obj as GameObj<PolygonComp>).pts !== undefined
}

function isColor(obj: GameObj): obj is GameObj<ColorComp> {
  return (obj as GameObj<ColorComp>).color !== undefined
}

enum Tags {
  CURSOR = "cursor"
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

      const polys: GameObj[] = []

      const mousePos = k.mousePos()
      const mousePosLabel = (pos: Vec2) => `x:${pos.x}, y: ${pos.y}`
      const cursor = k.add([
        k.pos(mousePos),
        k.text(mousePosLabel(mousePos)),
      ])
      cursor.add([
        k.circle(1),
        k.area(),
        Tags.CURSOR,
      ])

      k.onMouseMove(pos => {
        cursor.pos = pos
        cursor.text = mousePosLabel(pos)
      })

      for(const p of polygons) {
        const pts = p.points.map(([x, y]) => k.vec2(x, y))
        const poly = k.add([
          k.polygon(pts),
          k.color(p.fill.r,p.fill.g,p.fill.b),
          k.opacity(0.2),
          k.area({shape: new k.Polygon(pts)})
        ])
        poly.onCollide(Tags.CURSOR, (obj: GameObj, col) => {
          console.log("colliding?")
          poly.color = poly.color.lighten(100)
        })

        poly.onCollideEnd(Tags.CURSOR, (obj) => {
            poly.color = poly.color.darken(100)
        })
      }



    }

    scene.current = game({
      root: node.current as HTMLElement,
      width: config.width,
      height: config.height,
      run})
  },[])
  return node && (<div ref={node} style={{width: config.width, height: config.height}}/>)
}
