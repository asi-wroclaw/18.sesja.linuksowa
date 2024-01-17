import { useTheme, Center, Link } from '@chakra-ui/react';
import { useTranslation } from 'next-export-i18n';

const CoC = () => {
  const theme = useTheme();
  const { t } = useTranslation('common');

  const content = {
    cocText: t('cocText'),
    cocButtonText: t('cocButtonText'),
    cocLink: t('cocLink'),
  };

  return (
    <Center
      id="coc"
      as="section"
      display="flex"
      justifyContent="center"
      width="100%"
      bg={theme.colors.primary}
      minHeight="10vh"
      opacity="90%"
      position="relative"
      zIndex="2"
      color="whiteAlpha.900"
      fontSize={['xl', '2xl']}
      textAlign="center"
      paddingLeft={4}
    >
      {content.cocText}
      <Link
        _hover={{ color: 'whiteAlpha.900' }}
        href={content.cocLink}
        target="_blank"
        padding={2}
        color="black"
      >
        {content.cocButtonText}
      </Link>
    </Center>
  );
};

export default CoC;
