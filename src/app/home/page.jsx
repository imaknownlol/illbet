import MainBody from '../../components/Casino/MainBody'
import MainAdsAndWins from '../../components/Casino/MainAdsAndWins'
import MainHeader from '../../components/Casino/MainHeader'
import React from 'react'

export default function page() {
  return (
    <div>
      <MainHeader />
      <MainAdsAndWins />
      <MainBody />
    </div>
  )
}
