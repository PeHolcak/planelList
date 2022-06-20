import React, { useState, useEffect } from 'react'
import type { NextPage } from 'next'
import Layout from 'src/components/Layout'
import { Urls } from 'src/static'
import PlanetCard from 'src/components/PlanetCard/index'
import ILoadedPlanets from 'src/models/planet'
import { PlanetListWrapper, PagginationRow, PagginationButton } from './styled'

// V dtoOut endpointu api/planets se vrací pouze počet všech záznámů, z tohoto údaje nelze bezpečně vypočítat počet všech stránek
const PAGES_COUNT = 6

const PlanetList: NextPage = () => {
  const [pagginationIndex, setPagginationIndex] = useState(1)
  const [loadedPlanets, setLoadedPlanets] = useState<Array<ILoadedPlanets>>([])
  const [loadingState, setLoadingState] = useState<
    'loading' | 'success' | 'error'
  >('loading')

  useEffect(() => {
    const url: string = (Urls.planetListUrl || '').replace(
      '{0}',
      pagginationIndex.toString()
    )
    setLoadingState('loading')
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        const resultDtoOut = (data || {}).results
        setLoadedPlanets(Array.isArray(resultDtoOut) ? resultDtoOut : [])
        setLoadingState('success')
      })
      .catch((errdata) => {
        setLoadedPlanets(errdata)
        setLoadingState('error')
      })
  }, [pagginationIndex])

  const _getContent = () => {
    switch (loadingState) {
      case 'loading':
        return <p>loading...</p>
      case 'success':
        return loadedPlanets.map((planet, index) => (
          <PlanetCard planetData={planet} key={index} />
        ))
      default:
        return <p>error</p>
    }
  }

  const _setPagginationIndex = (newIndex: number) => {
    setPagginationIndex(newIndex)
  }

  const decreesePagginationIndex = () => {
    let curruntIndex = pagginationIndex
    if (curruntIndex > 1) _setPagginationIndex(--curruntIndex)
  }

  const incresePagginationIndex = () => {
    let curruntIndex = pagginationIndex
    if (curruntIndex <= PAGES_COUNT) _setPagginationIndex(++curruntIndex)
  }

  return (
    <Layout>
      <PlanetListWrapper>
        <PagginationRow>
          <PagginationButton onClick={decreesePagginationIndex}>
            Previous page
          </PagginationButton>
          <div>1, 2, 3</div>
          <PagginationButton onClick={incresePagginationIndex}>
            Next page
          </PagginationButton>
        </PagginationRow>
        {_getContent()}
      </PlanetListWrapper>
    </Layout>
  )
}

export default PlanetList
