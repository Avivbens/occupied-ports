import { execPromise } from '@common/utils'
import type { Port } from '@models/port.model'

export async function getPorts(): Promise<Port[]> {
    try {
        const command = 'lsof -i -P -n | grep LISTEN'
        const { stdout } = await execPromise(command)

        const rawProcesses = stdout.split('\n').filter(Boolean)
        const processes = rawProcesses.map((rawProcess) => {
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            const [name, pid, _, __, ___, ____, _____, ______, some] = rawProcess.split(/\s+/)
            const port = some.split(':').at(-1)

            return {
                port: Number(port),
                name,
                pid: Number(pid),
            }
        })

        return processes
    } catch (error) {
        throw new Error(`Error finding ports, ${error.message}`)
    }
}
