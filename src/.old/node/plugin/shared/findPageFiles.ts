export { findPageFiles }

import glob from 'fast-glob'
import type { ResolvedConfig } from 'vite'
import { toPosixPath } from '../utils.js'
import type { FileType } from '../../../shared/getPageFiles/fileTypes.js'

/**
 * Returns a list of files within a given content directory
 */
async function findPageFiles(config: ResolvedConfig,  path: string): Promise<string[]> {
  console.log(config.root)
  const cwd = config.root
  let pageFiles = await glob(
    `${path}/**/*.(js|jsx|ts|tsx|md|mdx)`,
    { ignore: ['**/node_modules/**'], cwd, dot: false }
  )
  console.log('pageFiles', pageFiles)
  pageFiles = pageFiles.map((p) => '/' + toPosixPath(p))
  console.log('pageFiles converted', pageFiles)
  return pageFiles
}
