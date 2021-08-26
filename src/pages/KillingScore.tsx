/* eslint-disable react-hooks/exhaustive-deps */
import styled from 'styled-components';
import { useLocation } from 'react-router';
import { Victim } from '../types';
import KillingScoreText from '../components/KillingScoreText';
import KillingScoreVictims from '../components/KillingScoreVictims';
import KillingScoreButtons from '../components/KillingScoreButtons';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { useEffect, useState } from 'react';
import { useActions } from '../hooks/useActions';

const StyledKillingScore = styled.div`
  text-align: center;
  margin: 30px;
  color: #fff;
  h1 {
    font-size: 40px;
    margin-bottom: 50px;
  }
  strong {
    font-size: 30px;
    color: yellow;
    display: block;
    margin-bottom: 10px;
  }
`;

interface StateType {
  deads: Victim[];
}

const KillingScore = () => {
  const authUser = useTypedSelector((state) => state.auth);
  const { updateKilledCount } = useActions();
  const [isNewRecord, setIsNewRecord] = useState(false);
  const location = useLocation<StateType>();
  const { deads } = location.state;

  useEffect(() => {
    if (authUser && deads.length > authUser.killedCount) {
      updateKilledCount(authUser.id, deads.length);
      setIsNewRecord(true);
    }
  }, [authUser]);

  return (
    <StyledKillingScore>
      <h1>Score</h1>
      {isNewRecord && <strong>New Record!</strong>}
      <KillingScoreText deads={deads} />
      <KillingScoreVictims deads={deads} />
      <KillingScoreButtons />
    </StyledKillingScore>
  );
};

export default KillingScore;
