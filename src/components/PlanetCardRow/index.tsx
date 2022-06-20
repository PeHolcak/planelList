import React from 'react'
import { PlanetCardRowWrapper, PlanetCardRowContent } from './styled'

interface PlanetCardRowProps {
  Icon: React.FC
  description: string
  value: string | string[]
}

const PlanetCardRow: React.FC<PlanetCardRowProps> = ({
  Icon,
  description,
  value,
}) => {
  return (
    <PlanetCardRowWrapper>
      <Icon />
      <PlanetCardRowContent>{`${description}: ${value}`}</PlanetCardRowContent>
    </PlanetCardRowWrapper>
  )
}

export default PlanetCardRow
