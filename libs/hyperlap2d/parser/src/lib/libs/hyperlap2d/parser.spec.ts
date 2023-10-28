import {parseHyperLap2DExport} from "./parser";
import * as fs from "fs"

const HYPER_LAP_2D_PROJECT_PATH = `${__dirname}/../../../../resources/parser-test/export/`

const proj = () => {
  const projectDataRaw = fs.readFileSync(`${HYPER_LAP_2D_PROJECT_PATH}project.dt`)
  return JSON.parse(projectDataRaw.toString())

}
describe('libsHyperlap2dParser', () => {
  it('should work', () => {
    const hyperLap = parseHyperLap2DExport(proj(), [])
  });
});
