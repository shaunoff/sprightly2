import ChartBar from './ChartBar'
import CheckCircle from './CheckCircle'
import ExclamtionCircle from './ExclamationCircle'
import Folder from './Folder'
import Home from './Home'
import InformationCircle from './InformationCircle'
import Warning from './Warning'
import XCircle from './XCircle'

const icons = {
  chartBar: ChartBar,
  checkCircle: CheckCircle,
  folder: Folder,
  home: Home,
  exclamationCircle: ExclamtionCircle,
  informationCircle: InformationCircle,
  warning: Warning,
  xCircle: XCircle,
}

export type IconTypes = keyof typeof icons

export default icons
