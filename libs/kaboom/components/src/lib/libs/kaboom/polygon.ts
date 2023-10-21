import {
  AnchorComp,
  Comp,
  DrawPolygonOpt,
  GameObj,
  KaboomCtx,
  Rect,
  Vec2
} from "kaboom";

type PolygonOpts = DrawPolygonOpt

interface PolygonComp extends Comp {
  pts: Vec2[],
  draw: Comp["draw"],
  /**
   * @since v3000.0
   */
  renderArea(): Rect,
}

function getRenderProps(obj: GameObj<any>) {
  return {

    color: obj["color"],
    opacity: obj["opacity"],
    anchor: obj["anchor"],
    outline: obj["outline"],
    shader: obj["shader"],
    uniform: obj["uniform"],
  }
}

export function polygon(k: KaboomCtx, opts: PolygonOpts ): PolygonComp {
  return {
    id: "polygon",
    pts: opts.pts,
    draw(this: GameObj<PolygonComp>) {
      k.drawPolygon(Object.assign(getRenderProps(this), opts ))
    },
    renderArea(this: GameObj<AnchorComp | PolygonComp>) {
      let minX = this.pts[0].x
      let minY = this.pts[0].y
      let maxX = this.pts[0].x
      let maxY =  this.pts[0].y

      for(const pt of this.pts) {
        if(pt.x <= minX) minX = pt.x
        if(pt.y <= minY) minY = pt.y
        if(pt.x >= maxX) maxX = pt.x
        if(pt.y >= maxY) maxY = pt.y
      }

      const width = maxX - minX
      const height = maxY - minY

      return new k.Rect(
        new Vec2(0),
        width,
        height
      )

    },
    inspect() {
      return this.pts.map(p => `[${p.x},${p.y}]`).join(",")
    },
  }
}
