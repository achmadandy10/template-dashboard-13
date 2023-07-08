'use client';

import { Card } from '@/components';
import { Box } from '@chakra-ui/react';

export default function SectionInfo() {
  return (
    <Box
      display={'grid'}
      gridTemplateColumns={'repeat(4, 1fr)'}
      gap={4}
      marginBottom={4}
    >
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
    </Box>
  );
}
