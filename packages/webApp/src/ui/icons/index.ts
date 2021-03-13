import ChartBar from './ChartBar'
import CheckCircle from './CheckCircle'
import ExclamtionCircle from './ExclamationCircle'
import Folder from './Folder'
import Happy from './Happy'
import Home from './Home'
import InformationCircle from './InformationCircle'
import Neutral from './Neutral'
import Sad from './Sad'
import VHappy from './VHappy'
import VSad from './VSad'
import Warning from './Warning'
import XCircle from './XCircle'

const icons = {
  chartBar: ChartBar,
  checkCircle: CheckCircle,
  folder: Folder,
  happy: Happy,
  home: Home,
  exclamationCircle: ExclamtionCircle,
  informationCircle: InformationCircle,
  neutral: Neutral,
  sad: Sad,
  vHappy: VHappy,
  vSad: VSad,
  warning: Warning,
  xCircle: XCircle,
}

export type IconTypes = keyof typeof icons

export default icons
