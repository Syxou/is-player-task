import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { idText, sortAndDeduplicateDiagnostics } from 'typescript';
import { AppThunk, RootState } from '../../app/store';
import fakePlayList from '../../utils/fakePlayList';

export interface IPlayer {
    songs: ISong[],
    currentSong: ISong,
    play: boolean,
    repeat: boolean,
    shuffle: boolean,
    timePoint: number,
    nextHandler: INextHandler;
    nextSong: ISong,
};

interface INextHandler {
    action: 'prev' | 'next' | '',
    id: number,
}

export interface ISong {
    id: number,
    trackName: string,
    artistName: string,
    time: number,
    label: string,
    waveform: number[],
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
        waveform: []
    },
    timePoint: 0,
    play: false,
    repeat: false,
    shuffle: false,
    nextHandler: {
        action: '',
        id: 0,
    },
    nextSong: {
        id: 0,
        trackName: '',
        artistName: '',
        time: 0,
        label: '',
        waveform: []
    },
}

export const playerSlice = createSlice({
    name: 'song',
    initialState,
    reducers: {
        playPause: (state) => {
            state.play = !state.play;
        },
        setNextSong: (state) => {
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
        setPrevSong: (state) => {
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
            const maxTimePoint = state.currentSong.time;
            if (maxTimePoint >= action.payload) {
                if (action.payload) {
                    state.timePoint = +action.payload.toFixed(2);
                } else {
                    state.timePoint = +state.timePoint.toFixed(2) + 1;
                }
            }
        },
        setPlayList: (state, action: PayloadAction<ISong[]>) => {
            state.songs = action.payload;
            state.currentSong = state.songs[0];
        },
        nextHandler: (state, action: PayloadAction<'prev' | 'next'>) => {
            state.nextHandler = {
                action: action.payload,
                id: state.currentSong.id,
            };
        },
        getNextSong: (state) => {
            let currentIndex;
            if (state.currentSong) {
                currentIndex = state.songs.findIndex((s) => s.id === state.currentSong.id);
            }
            console.log(currentIndex)
            if (currentIndex !== undefined && currentIndex >= 0) {
                if (state.songs[currentIndex + 1]) {
                    console.log('if')
                    state.nextSong = { ...state.songs[currentIndex + 1] };
                } else {
                    console.log('else')
                    state.nextSong = { ...state.songs[0] };
                }
            };
        },
    },
})

export const {
    playPause,
    nextHandler,
    setNextSong,
    setPrevSong,
    setPlayList,
    setTimePoint,
    getNextSong,
} = playerSlice.actions;

export const loadPlayList = (): AppThunk => (dispatch) => {
    setTimeout(() => {
        dispatch(setPlayList(fakePlayList))
        dispatch(getNextSong());
    }, 535);
};

export const swipeSongSwitchHandler = (swipe: string): AppThunk => (dispatch) => {
    console.log(swipe)
    if (swipe === 'left') {
        dispatch(setNextSong());
    }
    if (swipe === 'right') {
        dispatch(setPrevSong());
    }
    dispatch(getNextSong());
}

export const updatingTimePoint = (amount?: number): AppThunk => (dispatch) => {
    if (amount) {
        dispatch(setTimePoint(amount));
    } else {
        dispatch(setTimePoint(0));
    }
};

export const nextSong = (): AppThunk => (dispatch) => {
    dispatch(setNextSong());
    dispatch(getNextSong());
    dispatch(nextHandler('next'));
}

export const prevSong = (): AppThunk => (dispatch) => {
    dispatch(setPrevSong());
    dispatch(getNextSong());
    dispatch(nextHandler('prev'));
}

export const updatingNextSong = (): AppThunk => (dispatch) => {
    console.log('updatingNextSong')
    dispatch(setNextSong());
}

export const selectPlayStatus = (state: RootState) => state.player.play;
export const selectPlayList = (state: RootState) => state.player.songs;
export const selectCurrentSong = (state: RootState) => state.player.currentSong;
export const selectTimePoint = (state: RootState) => state.player.timePoint;
export const selectCurrentWaveform = (state: RootState) => state.player.currentSong.waveform;
export const selectNextSong = (state: RootState) => state.player.nextSong;
export const selectNextHandler = (state: RootState) => state.player.nextHandler;

export default playerSlice.reducer;
