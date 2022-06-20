import React from 'react'
import PlanetCard from 'src/components/PlanetCard/index'
import ILoadedPlanet from 'src/models/planet'
import { PlanetListWrapper } from './styled'

interface PlanetListProps {
  loadedPlanets: Array<ILoadedPlanet>
}

const PlanetList: React.FC<PlanetListProps> = ({ loadedPlanets }) => {
  return (
    <PlanetListWrapper>
      {loadedPlanets.map((planet, index) => (
        <PlanetCard planetData={planet} key={index} />
      ))}
    </PlanetListWrapper>
  )
}

export default PlanetList
