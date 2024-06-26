import SectionHeader from '@app/components/common/SectionHeader';
import * as S from '@app/pages/exchange/ExchangePage.styles';
import { Stack } from '@mui/material';
import { useParams } from 'react-router-dom';
import TopStats from './TopStats';

function TopStatsContainer() {
  const params = useParams();
  return (
    <S.TopStatsWrapper>
      <SectionHeader title={`${params.id} Overall Statistics`} />
      <Stack
        direction={{ sm: 'column', md: 'row' }}
        width="100%"
        height="100%"
        alignItems="center"
        justifyContent="space-evenly"
        padding="1em"
        gap={{ sm: 2, md: 1 }}
      >
        <TopStats />
      </Stack>
    </S.TopStatsWrapper>
  );
}

export default TopStatsContainer;
