import React, { useState, useEffect } from 'react'
import type { NextPage } from 'next'
import Layout from 'src/components/Layout'
import { Urls } from 'src/static'
import ILoadedPlanet from 'src/models/planet'
import {
  PlanetPageWrapper,
  PagginationRow,
  PagginationButton,
  PagginationWrapper,
  ThreeDots,
} from './styled'
import PlanetList from 'src/components/PlanetList'

// V dtoOut endpointu api/planets se vrací pouze počet všech záznámů, z tohoto údaje nelze bezpečně vypočítat počet všech stránek
const PAGES_COUNT = 6

const PlanetPage: NextPage = () => {
  const [pagginationIndex, setPagginationIndex] = useState(1)
  const [loadedPlanets, setLoadedPlanets] = useState<Array<ILoadedPlanet>>([])
  const [loadingState, setLoadingState] = useState<
    'loading' | 'success' | 'error'
  >('loading')

  useEffect(() => {
    const url: string = (Urls.planetListUrl || '').replace(
      '{0}',
      pagginationIndex.toString()
    )
    setLoadingState('loading')
    const fetchPlanetData = async () => {
      try {
        let resultDtoOut = await fetch(url)
        if (resultDtoOut.status === 200) {
          const jsonResultDtoOut = await resultDtoOut.json()
          const results = (jsonResultDtoOut || {}).results
          setLoadedPlanets(Array.isArray(results) ? results : [])
          setLoadingState('success')
        } else {
          setLoadedPlanets([])
          setLoadingState('error')
        }
      } catch (errdata) {
        console.error(errdata)
        setLoadedPlanets([])
        setLoadingState('error')
      }
    }

    fetchPlanetData()
  }, [pagginationIndex])

  const _getContent = () => {
    switch (loadingState) {
      case 'loading':
        return <p>loading...</p>
      case 'success':
        return <PlanetList loadedPlanets={loadedPlanets} />
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

  const getPagginationButton = (index: number) => {
    const _setPagginationIndex = () => setPagginationIndex(index)
    return (
      <PagginationButton
        key={`paggination-item-${index}`}
        onClick={_setPagginationIndex}
      >
        {index}
      </PagginationButton>
    )
  }

  const getPaginationIndexesLink = () => {
    const rightPagginationCount = PAGES_COUNT - pagginationIndex
    const space = <ThreeDots key='space'>...</ThreeDots>
    let rightPaggination = []
    let leftPaggination = []

    if (rightPagginationCount === 1) {
      rightPaggination.push(getPagginationButton(PAGES_COUNT))
    } else if (rightPagginationCount === 2) {
      rightPaggination.push(getPagginationButton(pagginationIndex + 1))
      rightPaggination.push(getPagginationButton(PAGES_COUNT))
    } else if (rightPagginationCount > 2) {
      rightPaggination.push(getPagginationButton(pagginationIndex + 1))
      rightPaggination.push(space)
      rightPaggination.push(getPagginationButton(PAGES_COUNT))
    }

    if (pagginationIndex === 2) {
      leftPaggination.push(getPagginationButton(1))
    } else if (pagginationIndex === 3) {
      leftPaggination.push(getPagginationButton(1))
      leftPaggination.push(getPagginationButton(2))
    } else if (pagginationIndex > 2) {
      leftPaggination.push(getPagginationButton(1))
      leftPaggination.push(space)
      leftPaggination.push(getPagginationButton(pagginationIndex - 1))
    }

    return (
      <PagginationWrapper>
        {leftPaggination}
        <PagginationButton disabled>{pagginationIndex}</PagginationButton>
        {rightPaggination}
      </PagginationWrapper>
    )
  }

  return (
    <Layout>
      <PlanetPageWrapper>
        <PagginationRow>
          <PagginationButton
            disabled={pagginationIndex <= 1}
            onClick={decreesePagginationIndex}
          >
            Previous page
          </PagginationButton>
          <div>{getPaginationIndexesLink()}</div>
          <PagginationButton
            disabled={pagginationIndex >= PAGES_COUNT}
            onClick={incresePagginationIndex}
          >
            Next page
          </PagginationButton>
        </PagginationRow>
        {_getContent()}
      </PlanetPageWrapper>
    </Layout>
  )
}

export default PlanetPage
