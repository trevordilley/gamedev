import * as zod from "zod"
import {HyperLap2DScene, HyperLap2DSceneSchema} from "./parser.scene";
import {HyperLap2DProject, HyperLap2DProjectSchema} from "./parser.project";

interface HyperLap2D {
  project: HyperLap2DProject
  scenes: HyperLap2DScene[]
}
export const parseHyperLap2DExport = (
  project: object,
  scenes: object[],

): HyperLap2D => {
 const hyperLap2DProject = HyperLap2DProjectSchema.parse(project)
  const hyperLap2DScenes = scenes.map (s => HyperLap2DSceneSchema.parse(s))
  return {
    project: hyperLap2DProject,
    scenes: hyperLap2DScenes
  }
}
