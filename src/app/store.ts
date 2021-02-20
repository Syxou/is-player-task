import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import PlayerReducer from '../features/player/PlayerSlice';


export const store = configureStore({
    reducer: {
        player: PlayerReducer
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>;
