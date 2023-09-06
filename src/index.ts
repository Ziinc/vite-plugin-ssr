
import { buildConfig } from './.old/node/plugin/plugins/buildConfig.js'
// import { devConfig } from './.old/node/plugin/plugins/devConfig/index.js'
// import { importUserCode } from './.old/node/plugin/plugins/importUserCode/index.js'
// import { resolveVpsConfig } from './.old/node/plugin/plugins/config/index.js'
// import { commonConfig } from './.old/node/plugin/plugins/commonConfig.js'
import type { Plugin } from 'vite'
const plugin = (vpsConfig:any)=>{
    return [

    // resolveVpsConfig(vpsConfig), // `resolveVpsConfig()`'s hook `configResolved()` should be the first called
    // ...commonConfig(),
    // importUserCode(),
    // ...devConfig(),
    buildConfig(),
    ]
    return {
        name: 'vite-plugin-ssr',
        apply: 'build',
        enforce: 'post',
        configResolved: {
          order: 'post',
          async handler(config) {
            // assertRollupInput(config)
            // const userInputs = normalizeRollupInput(config.build.rollupOptions.input)
            // const entries = await getEntries(config)
            // assert(Object.keys(entries).length > 0)
            // const input = {
            //   ...entries,
            //   ...userInputs
            // }
            // config.build.rollupOptions.input = input
            // addLogHook()
          }
        },
        // config(config) {
        //   return {
        //     build: {
        //       outDir: resolveOutDir(config),
        //       manifest: !viteIsSSR(config),
        //       copyPublicDir: !viteIsSSR(config)
        //     }
        //   } 
        // }
      } as Plugin
}
export default plugin