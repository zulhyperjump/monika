import { ux } from '@oclif/core'
import { getContext } from '../../context'
import { log } from '../../utils/pino'
import { flushAllLogs, openLogfile } from './history'

export async function flush(): Promise<void> {
  if (!getContext().flags.force) {
    const answer = await ux.ux.prompt(
      'Are you sure you want to flush all logs in monika-logs.db (Y/n)?'
    )

    if (answer !== 'Y') {
      log.info('Cancelled. Thank you.')

      return
    }
  }

  await openLogfile()
  await flushAllLogs()
  log.info('Records flushed, thank you.')
}
