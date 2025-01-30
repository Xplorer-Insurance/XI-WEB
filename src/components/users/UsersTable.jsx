import React, { useState } from 'react';
import { Table, Pagination, Button, TextInput, Flex, Badge, Box, Checkbox } from '@mantine/core';
import { IconSearch, IconBell, IconUser, IconCalendar } from '@tabler/icons-react';
import styled from 'styled-components';

const Container = styled.div`
  padding: 20px;
`;

const Header = styled(Flex)`
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

const SearchContainer = styled(Flex)`
  gap: 10px;
  align-items: center;
`;

const TableContainer = styled.div`
  /* border: 1px solid #d1d5db; */
  border-radius: 8px;
  overflow: hidden;
`;

const StyledTable = styled(Box)`
  display: flex;
  flex-direction: column;
  width: 100%;
  overflow: hidden;
`;

const TableHeader = styled(Box)`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0px;
`

const FileHeader = styled(Box)`
  width: 100%;
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 0.5 solid rgba(154, 183, 177, 0.80);
  background-color: rgba(154, 183, 177, 0.80);
  border-radius: 9px;
  height: 40px;
`

const Cell = styled(Box)`
  color: ${({ header }) => header ? 'black' : '#49726C'};
  padding: 10px 20px;
  width: ${({ width }) => width ? width : 'calc(100% / 6)'};
`

const TableBody = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 20px;
`

const FileBody = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0px;
  height: 50px;
  border: 0.5px solid #58717F;
  border-radius: 9px;
  cursor: pointer;

  &:hover {
    border: 3px solid #49726C;
  }
`

const StyledButton = styled(Button)`
  /* width: 250px; */
  height: 40;
  color: #49726C;
  background-color: #F0F3F4;
  padding: 0;
  padding-left: 20px;
  border: 1px solid #49726C;
  transition: all 0.3s;
  border-radius: 10px;

  &:hover {
    color: #49726C;
    background-color: #D1D5DB;
    border: 1px solid #49726C;
    transition: background-color 0.3s;
  }
`

const StyledRightSectionContainer = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  background-color: #49726C;
  padding: 5px 10px;
  margin-left: 10px;
  width: 100%;
  border-radius: 0px 8px 8px 0px;
`

const StatusBadge = ({ status }) => {
  const colors = {
    REGISTRADA: 'violet',
    PAGADA: 'blue',
    ACTIVA: 'green',
  };
  return <Badge color={colors[status] || 'gray'}>{status}</Badge>;
};

const policies = [
  { id: '500189', client: 'Alejandro González', product: 'Salud', agent: 'Rodrigo Briones', created: '18-10-2023', status: 'REGISTRADA' },
  { id: '500185', client: 'Martín Rodríguez', product: 'Salud', agent: 'Carla Zuñiga', created: '15-09-2023', status: 'REGISTRADA' },
  { id: '500183', client: 'Claudia Herrera', product: 'Salud', agent: 'Marcos Olmos', created: '10-09-2023', status: 'PAGADA' },
  { id: '500180', client: 'Víctor Sepúlveda', product: 'Accidentes personales', agent: 'Marcos Olmos', created: '18-10-2023', status: 'ACTIVA' },
  { id: '500179', client: 'Andrea Suárez', product: 'Vida', agent: 'Valentina Quiroz', created: '25-08-2023', status: 'ACTIVA' },
  { id: '500289', client: 'Alejandro González', product: 'Salud', agent: 'Rodrigo Briones', created: '18-10-2023', status: 'REGISTRADA' },
  { id: '500285', client: 'Martín Rodríguez', product: 'Salud', agent: 'Carla Zuñiga', created: '15-09-2023', status: 'REGISTRADA' },
  { id: '500283', client: 'Claudia Herrera', product: 'Salud', agent: 'Marcos Olmos', created: '10-09-2023', status: 'PAGADA' },
  { id: '500280', client: 'Víctor Sepúlveda', product: 'Accidentes personales', agent: 'Marcos Olmos', created: '18-10-2023', status: 'ACTIVA' },
  { id: '500279', client: 'Andrea Suárez', product: 'Vida', agent: 'Valentina Quiroz', created: '25-08-2023', status: 'ACTIVA' },
];

export const UsersTable = () => {
  const [selected, setSelected] = useState([]);

  const handleSelect = (id) => {
    setSelected((current) => {
      if (current.includes(id)) {
        return current.filter((currentId) => currentId !== id);
      }

      return [...current, id];
    });
  };

  return (
    <div style={{ padding: '20px 40px', borderRadius: '10px', height: '100%' }}>
      <Container>
        <Header>
          <StyledButton rightSection={
            <StyledRightSectionContainer>
              <IconCalendar color='#D1D5DB' />
            </StyledRightSectionContainer>} color="dark">Genera una póliza</StyledButton>
          <SearchContainer>
            <TextInput placeholder="Search" icon={<IconSearch size={16} />} />
            <Button variant="subtle"><IconBell size={18} /></Button>
            <Button variant="subtle"><IconUser size={18} /></Button>
          </SearchContainer>
        </Header>
        
        <TableContainer>
          <StyledTable>
            <TableHeader>
              <FileHeader>
                <Cell header width={'50px'} />
                <Cell header>N° de Póliza</Cell>
                <Cell header>Cliente</Cell>
                <Cell header>Producto</Cell>
                <Cell header>Agente</Cell>
                <Cell header>Creado el</Cell>
                <Cell header width={'150px'}>Estado</Cell>
              </FileHeader>
            </TableHeader>
            <TableBody>
              {policies.map((policy) => (
                <FileBody key={policy.id}>
                  <Cell width={'50px'}>
                    <Flex gap={10} align="center">
                      <Checkbox checked={selected.includes(policy.id)} onChange={() => handleSelect(policy.id)} />
                    </Flex>
                  </Cell>
                  <Cell>{policy.id}</Cell>
                  <Cell>{policy.client}</Cell>
                  <Cell>{policy.product}</Cell>
                  <Cell>{policy.agent}</Cell>
                  <Cell>{policy.created}</Cell>
                  <Cell width={'150px'}><StatusBadge status={policy.status} /></Cell>
                </FileBody>
              ))}
            </TableBody>
          </StyledTable>
        </TableContainer>

        <Pagination style={{ width: '100%', display: 'flex', justifyContent: 'center' }} total={1} page={1} position="center" mt={20} />
      </Container>
    </div>
  )
} 
