import { Flex } from '@mantine/core'
import { useNavigate } from 'react-router-dom'
import { LogoImage, Navbar } from './styles'
import { SideLink } from './components/SideLink'
import { IconHome, IconUser } from '@tabler/icons-react'
import { useDispatch, useSelector } from 'react-redux'
import { handleActiveOption } from '../../store/slices/menuSlice'

export const Sidebar = () => {
  const navigate = useNavigate();
  const { activeOption } = useSelector(state => state.menu);
  const dispatch = useDispatch();

  const handleClick = (to, option) => {
    console.log(option, to);
    dispatch(handleActiveOption(option));
    navigate(to);
  }

  return (
    <Navbar shadow="sm">
      <Flex direction="column">
        <LogoImage onClick={() => handleClick('/', 'home')} src={`images/logo.png`} />
        <SideLink 
          onClick={() => handleClick('/', 'home')} 
          active={activeOption === 'home'} 
          icon={<IconHome stroke={2} size={20} />}>
            Home
        </SideLink>
        <SideLink 
          onClick={() => handleClick('usuarios', 'usuarios')} 
          active={activeOption === 'usuarios'} 
          icon={<IconUser stroke={2} size={20} />}>
            Usuarios
        </SideLink>
      </Flex>
    </Navbar>
  )
}
