import kaboom, {KaboomCtx, KaboomOpt} from "kaboom";

export const game = (opts: KaboomOpt & {resourceUrl?: string, run: (ctx: KaboomCtx) => void}) => {
  const ctx = kaboom({global: false, ...opts})
  if(opts.resourceUrl) {
    ctx.loadRoot(opts.resourceUrl)
  }
  opts.run(ctx)
  return ctx
}
