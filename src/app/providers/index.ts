import compose from 'compose-function';
import { withRouter } from './with-router.tsx';
import { withRedux } from '@/app/providers/with-redux.tsx';

export const withProviders = compose(withRedux, withRouter);
