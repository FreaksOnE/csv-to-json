import {Presets, SingleBar} from 'cli-progress'

interface IProps {
  name: string;
}

const createCliProgress = (props: IProps): SingleBar => {
  return new SingleBar({
    barsize: 20,
    format: `# ${props.name} [{bar}] {percentage}% | ETA: {eta}s | {value}/{total}`,
  }, Presets.rect)
}

export default createCliProgress
