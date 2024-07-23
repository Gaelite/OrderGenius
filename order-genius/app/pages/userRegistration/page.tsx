"use client";

import { useState } from 'react';
import { Input, FormControl, FormLabel, Button, Box, Heading, SimpleGrid, GridItem } from '@chakra-ui/react';

export default function Registro() {
  const [formValues, setFormValues] = useState({
    tipo: '0',
    verificado: '0',
    contrasena: '',
    nombre_usuario: '',
    nombre: '',
    apellido: '',
    telefono: '',
    correo: ''
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormValues({
      ...formValues,
      [name]: value
    });
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log('Form values:', formValues);
    // Aquí puedes manejar el envío del formulario, por ejemplo, haciendo una petición a tu backend
  };

  return (
    <Box maxW="xl" mx="auto" mt={10} p={8} borderWidth={1} borderRadius="xl" boxShadow="xl">
      <Heading mb={6} textAlign="center">Registro de Usuario</Heading>
      <form onSubmit={handleSubmit}>
        <SimpleGrid columns={2} spacing={4}>
          <GridItem colSpan={2}>
            <FormControl>
              <FormLabel htmlFor="correo">Correo Electrónico:</FormLabel>
              <Input
                id="correo"
                name="correo"
                type="email"
                value={formValues.correo}
                onChange={handleChange}
                required
              />
            </FormControl>
          </GridItem>

          <FormControl>
            <FormLabel htmlFor="nombre_usuario">Nombre de Usuario:</FormLabel>
            <Input
              id="nombre_usuario"
              name="nombre_usuario"
              value={formValues.nombre_usuario}
              onChange={handleChange}
              required
            />
          </FormControl>

          <FormControl>
            <FormLabel htmlFor="telefono">Teléfono:</FormLabel>
            <Input
              id="telefono"
              name="telefono"
              value={formValues.telefono}
              onChange={handleChange}
              required
            />
          </FormControl>

          

          <GridItem colSpan={2} display="flex" justifyContent="center">
            <FormControl>
              <FormLabel htmlFor="contrasena">Contraseña:</FormLabel>
              <Input
                id="contrasena"
                name="contrasena"
                type="password"
                value={formValues.contrasena}
                onChange={handleChange}
                required
              />
            </FormControl>
          </GridItem>

          <GridItem colSpan={2}>
            <hr />
          </GridItem>

          <GridItem colSpan={2}>
            <FormControl>
              <FormLabel htmlFor="nombre">Nombre(s):</FormLabel>
              <Input
                id="nombre"
                name="nombre"
                value={formValues.nombre}
                onChange={handleChange}
                required
              />
            </FormControl>

            <FormControl>
              <FormLabel htmlFor="apellido">Apellido (s)</FormLabel>
              <Input
                id="apellido"
                name="apellido"
                value={formValues.apellido}
                onChange={handleChange}
                required
              />
            </FormControl>
          </GridItem>
          
        </SimpleGrid>

        <Button type="submit" colorScheme="blue" mt={4} width="full">
          Registrarse
        </Button>
      </form>
    </Box>
  );
}
