import React, { useState } from 'react'
import { Container, StyledButton } from './styles'
import { Grid, Group, rem, Text } from '@mantine/core';
import { Dropzone, MIME_TYPES } from '@mantine/dropzone';
import { IconPhoto, IconUpload, IconX } from '@tabler/icons-react';
import { useForm } from '@mantine/form';
import { useDispatch, useSelector } from 'react-redux';
import { addUsersByFile } from '../../../store/thunks/files-thunks';
import { notifications } from '@mantine/notifications';
import { useNavigate } from 'react-router-dom';


export const ImportUsersForm = () => {
  const [file, setFile] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { status } = useSelector(state => state.files);

  const form = useForm({
    initialValues: {
        FileName: '',
        FileType: '',
        FileSize: 0,
    },
    // validate: yupResolver(BasicInfoSchema),
  });

  const handleFileDrop = (files) => {
    const selectedFile = files[0];
    console.log(files)
    setFile(selectedFile);
    form.setFieldValue('FileName', selectedFile.name);
    form.setFieldValue('FileType', selectedFile.type);
    form.setFieldValue('FileSize', selectedFile.size);
  };

  const onFormSubmit = (e) => {
    console.log(e);
    console.log('FILE ==> ', file);

    if (!file.path) {
      notifError('No se ha seleccionado un archivo');
      return;
    }
  
    const formData = new FormData();
    formData.append('file', file);  // 📌 Agrega el archivo correcto
  
    console.log('Archivo enviado:', file, formData);
  
    dispatch(addUsersByFile(formData)).then(data => {
      if (data.error) {
        notifError(data.error);
        return;
      }
      navigate('/usuarios');
      notif(data.payload);
    });
  };

  const notif = (values) => {
    return notifications.show({
      title: `Usuarios importados`,
      color: 'teal',
      message: `Se han importado ${values?.data?.length} usuarios! 🎉`,
    })
  }
  const notifError = (info) => {
    return notifications.show({
      title: `Error al importar usuarios`,
      color: 'red',
      message: `${info}! 🤥`,
    })
  }

  return (
    <Container>
      <Grid>
        <Grid.Col span={12}>
          <form onSubmit={form.onSubmit(onFormSubmit)}>
            <Dropzone
              onDrop={handleFileDrop}
              onReject={(files) => {
                      console.log('rejected files', files);
                      notifError(files[0]?.errors[0]?.message);
                  }
              }
              styles={{
                root: {
                  border: '1px dotted #49726C',
                  borderRadius: rem(10),
                  padding: rem(20),
                  width: '100%',
                  cursor: 'pointer',
                }
              }}
              maxFiles={1}
              maxSize={15 * 1024 * 1024}
              accept={[MIME_TYPES.csv, MIME_TYPES.xls, MIME_TYPES.xlsx]}
              required
              >
              <Group position="center" spacing="xl" style={{ minHeight: rem(220), pointerEvents: 'none' }}>
                  <Dropzone.Accept>
                  <IconUpload
                      size="3.2rem"
                      stroke={1.5}
                      color={'black'}
                  />
                  </Dropzone.Accept>
                  <Dropzone.Reject>
                  <IconX
                      size="3.2rem"
                      stroke={1.5}
                      color={'black'}
                  />
                  </Dropzone.Reject>
                  <Dropzone.Idle>
                  <IconPhoto size="3.2rem" stroke={1.5} color='#49726C' />
                  </Dropzone.Idle>
                  <div>
                  <Text size="xl" inline color={'#49726C'}>
                      {file.name || 'Arrastra y suelta el archivo aquí'}
                  </Text>
                  <Text size="sm" color="#49726C" inline mt={7}>
                      {file.size ? `${file.size / 1024 / 1024} MB` : 'o selecciona un archivo'}
                  </Text>
                  </div>
              </Group>
            </Dropzone>
            <StyledButton 
              loading={status.addUsersByFile === 'loading'}
              disabled={status.addUsersByFile === 'loading'}
              type="submit">Upload</StyledButton>
          </form>
        </Grid.Col>
      </Grid>
    </Container>
  )
}
