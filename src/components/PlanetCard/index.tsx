import React from 'react'
import {
  PlanetCardWrap,
  DetailButton,
  PlanetCardContentWrap,
  PlanetCardFooter,
  PlanetCardHeader,
} from './styled'
import SearchIcon from '@mui/icons-material/Search'
import ILoadedPlanets from 'src/models/planet'
import DeviceThermostatIcon from '@mui/icons-material/DeviceThermostat'
import DateRangeIcon from '@mui/icons-material/DateRange'
import StraightenIcon from '@mui/icons-material/Straighten'
import EditIcon from '@mui/icons-material/Edit'
import MonitorWeightIcon from '@mui/icons-material/MonitorWeight'
import AutoModeIcon from '@mui/icons-material/AutoMode'
import PeopleAltIcon from '@mui/icons-material/PeopleAlt'
import ThreeSixtyIcon from '@mui/icons-material/ThreeSixty'
import WavesIcon from '@mui/icons-material/Waves'
import TerrainIcon from '@mui/icons-material/Terrain'
import { formatDateTime } from 'src/helpers/dateHelper'
import PlanetCardRow from '../PlanetCardRow'

const CARD_CONTENT_LABELS = {
  climate: {
    description: 'Climate',
    valueType: 'string',
    icon: DeviceThermostatIcon,
  },
  created: {
    description: 'Creation date',
    valueType: 'date',
    icon: DateRangeIcon,
  },
  edited: {
    description: 'Edited',
    valueType: 'date',
    icon: EditIcon,
  },
  diameter: {
    description: 'Diameter',
    valueType: 'string',
    icon: StraightenIcon,
  },
  gravity: {
    description: 'Gravity',
    valueType: 'string',
    icon: MonitorWeightIcon,
  },
  orbital_period: {
    description: 'Orbital period',
    valueType: 'string',
    icon: AutoModeIcon,
  },
  population: {
    description: 'Population',
    valueType: 'string',
    icon: PeopleAltIcon,
  },
  rotation_period: {
    description: 'Rotation period',
    valueType: 'string',
    icon: ThreeSixtyIcon,
  },
  surface_water: {
    description: 'Surface water',
    valueType: 'string',
    icon: WavesIcon,
  },
  terrain: {
    description: 'Terrain',
    valueType: 'string',
    icon: TerrainIcon,
  },
}

interface PlanetCardProps {
  planetData: ILoadedPlanets
}

const PlanetCard: React.FC<PlanetCardProps> = ({ planetData }) => {
  const _redirectToDetail = (): void => {
    window.open(`planet?name=${planetData.name}`, '_self')
  }

  const _getPlanetCardRows = () => {
    return Object.entries(CARD_CONTENT_LABELS).map(
      (
        currentCardItem: [
          string,
          {
            description: string
            valueType: string
            icon: React.FC
          }
        ]
      ) => {
        const Icon = currentCardItem[1].icon
        const description = currentCardItem[0]
        let value = planetData[description as keyof ILoadedPlanets]

        if (!Array.isArray(value) && currentCardItem[1].valueType === 'date') {
          value = formatDateTime(value)
        } else if (!value || value === 'N/A' || value === 'unknown') {
          value = 'Not specified'
        }

        return (
          <PlanetCardRow
            key={`PlanetCardRow-${planetData.name}-${description}`}
            Icon={Icon}
            description={description}
            value={value}
          />
        )
      }
    )
  }

  return (
    <PlanetCardWrap>
      <PlanetCardHeader>{planetData.name}</PlanetCardHeader>
      <div style={{ display: 'flex' }}>
        <PlanetCardContentWrap>{_getPlanetCardRows()}</PlanetCardContentWrap>
      </div>
      <PlanetCardFooter>
        <DetailButton onClick={_redirectToDetail}>
          <SearchIcon />
        </DetailButton>
      </PlanetCardFooter>
    </PlanetCardWrap>
  )
}

export default PlanetCard
