import { User } from '../types';
import { ActionType } from './action-types';

interface SignInAction {
  type: ActionType.SIGN_IN;
  payload: User;
}

interface SignOutAction {
  type: ActionType.SIGN_OUT;
}

interface UpdateKilledCountAction {
  type: ActionType.UPDATE_KILLED_COUNT;
  payload: number;
}

interface FetchRankingAction {
  type: ActionType.FETCH_RANKING;
}

interface FetchRankingSuccessAction {
  type: ActionType.FETCH_RANKING_SUCCESS;
  payload: User[];
}
interface FetchRankingFailureAction {
  type: ActionType.FETCH_RANKING_FAILURE;
  payload: string;
}

export type Actions =
  | SignInAction
  | SignOutAction
  | UpdateKilledCountAction
  | FetchRankingAction
  | FetchRankingSuccessAction
  | FetchRankingFailureAction;
