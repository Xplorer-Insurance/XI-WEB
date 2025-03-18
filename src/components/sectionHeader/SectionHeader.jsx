import React from 'react'
import { Header, StyledBackButton, StyledSectionTitle } from './styles'
import { IconCalendar, IconChevronLeft } from '@tabler/icons-react'

export const SectionHeader = () => {
  return (
    <Header>
      <StyledBackButton color="dark">
          <IconChevronLeft color='#49726C' />
      </StyledBackButton>
      <StyledSectionTitle>
        Importar usuarios
      </StyledSectionTitle>
    </Header>
  )
}
