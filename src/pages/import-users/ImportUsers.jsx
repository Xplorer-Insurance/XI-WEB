import React from 'react'
import { SectionContainer } from '../../components/sectionContainer/SectionContainer'
import { SectionHeader } from '../../components/sectionHeader/SectionHeader'
import { ImportUsersForm } from '../../components/users/import-users/ImportUsersForm'

export const ImportUsers = () => {
  return (
    <SectionContainer>
      <SectionHeader />
      <ImportUsersForm />
    </SectionContainer>
  )
}
