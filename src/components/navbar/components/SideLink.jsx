import React from 'react'
import { SideLinkContainer, StyledLink } from './styles'
import { Link } from 'react-router-dom';

export const SideLink = ({ onClick, active, icon, children }) => {
  return (
    <SideLinkContainer active={active}>
      <StyledLink onClick={onClick} active={active}>
        {icon}
        <p>
          {children}
        </p>
      </StyledLink>
    </SideLinkContainer>
  )
}
