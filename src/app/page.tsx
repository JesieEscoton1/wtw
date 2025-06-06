'use client';

import { Button, Container, Typography } from '@mui/material';

export default function Home() {
  return (
    <Container>
      <Typography variant="h3" gutterBottom>
        MUI + Tailwind + Next.js App Router
      </Typography>
      <Button variant="contained" color="primary">
        Hello World
      </Button>
    </Container>
  );
}
