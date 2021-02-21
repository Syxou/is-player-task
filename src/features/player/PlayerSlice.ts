import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { sortAndDeduplicateDiagnostics } from 'typescript';
import { AppThunk, RootState } from '../../app/store';
import fakePlayList from '../../utils/fakePlayList';

export interface IPlayer {
    songs: ISong[];
    currentSong: ISong;
    play: boolean,
    repeat: boolean,
    shuffle: boolean,
    timePoint: number,
};

export interface ISong {
    id: number,
    trackName: string,
    artistName: string,
    time: number,
    label: string,
};

export interface ISongControl {
    timePoint: number;
}

const initialState: IPlayer = {
    songs: [],
    currentSong: {
        id: 0,
        trackName: '',
        artistName: '',
        time: 0,
        label: '',
    },
    timePoint: 0,
    play: false,
    repeat: false,
    shuffle: false,
}

export const playerSlice = createSlice({
    name: 'song',
    initialState,
    reducers: {
        playPause: (state) => {
            state.play = !state.play;
        },
        nextSong: (state) => {
            let currentIndex;
            if (state.currentSong) {
                currentIndex = state.songs.findIndex((s) => s.id === state.currentSong.id);
            }
            if (currentIndex !== undefined && currentIndex >= 0) {
                if (state.songs[currentIndex + 1]) {
                    state.currentSong = { ...state.songs[currentIndex + 1] };
                } else {
                    state.currentSong = { ...state.songs[0] };
                }
                state.timePoint = 0;
            }
        },
        prevSong: (state) => {
            let currentIndex;
            if (state.currentSong) {
                currentIndex = state.songs.findIndex((s) => s.id === state.currentSong.id);
            }
            if (currentIndex !== undefined && currentIndex >= 0) {
                if (state.songs[currentIndex - 1]) {
                    state.currentSong = { ...state.songs[currentIndex - 1] };
                } else {
                    state.currentSong = { ...state.songs[state.songs.length - 1] };
                }
                state.timePoint = 0;
            }
        },

        setTimePoint: (state, action: PayloadAction<number>) => {

            const currentTimePoint = state.timePoint;
            const maxTimePoint = state.currentSong.time;

            console.log(currentTimePoint, maxTimePoint, action.payload)
            if (maxTimePoint >= action.payload) {
                if (action.payload) {
                    state.timePoint = +action.payload.toFixed(2);
                } else {
                    state.timePoint = +state.timePoint.toFixed(2) + 1;
                }
            }
            console.log(state.timePoint)
        },

        setPlayList: (state, action: PayloadAction<ISong[]>) => {
            state.songs = action.payload;
            state.currentSong = state.songs[0];
        }
    }
})

export const {
    playPause,
    nextSong,
    prevSong,
    setPlayList,
    setTimePoint,
} = playerSlice.actions;

export const loadPlayList = (): AppThunk => (dispatch) => {
    setTimeout(() => {
        dispatch(setPlayList(fakePlayList))
    }, 535);
};

export const updatingTimePoint = (amount?: number): AppThunk => (dispatch) => {
    console.log(amount)
    if (amount) {
        dispatch(setTimePoint(amount));
    } else {
        dispatch(setTimePoint(0));
    }
};

export const selectPlayStatus = (state: RootState) => state.player.play;
export const selectPlayList = (state: RootState) => state.player.songs;
export const selectCurrentSong = (state: RootState) => state.player.currentSong;
export const selectTimePoint = (state: RootState) => state.player.timePoint;

export default playerSlice.reducer;
