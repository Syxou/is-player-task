import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk, RootState } from '../../app/store';
import fakePlayList from '../../utils/fakePlayList';

export interface IPlayer {
    songs: ISong[];
    currentSong: ISong;
    play: boolean,
    repeat: boolean,
    shuffle: boolean,
};

export interface ISong {
    id: number,
    trackName: string,
    artistName: string,
    time: number,
    label: string,
};

const initialState: IPlayer = {
    songs: [],
    currentSong: {
        id: 0,
        trackName: '',
        artistName: '',
        time: 0,
        label: '',
    },
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
        nextSong: (state, action: PayloadAction) => {
            let currentIndex;
            if (state.currentSong) {
                currentIndex = state.songs.findIndex((s) => s.id === state.currentSong.id);
            }
            console.log('currentIndex', currentIndex)
            if (currentIndex !== undefined && currentIndex >= 0) {
                if (state.songs[currentIndex + 1]) {
                    state.currentSong = { ...state.songs[currentIndex + 1] };
                } else {
                    state.currentSong = { ...state.songs[0] };
                }
            }
        },
        prevSong: (state, action: PayloadAction) => {
            let currentIndex;
            if (state.currentSong) {
                currentIndex = state.songs.findIndex((s) => s.id === state.currentSong.id);
            }
            console.log('currentIndex', currentIndex)
            if (currentIndex !== undefined && currentIndex >= 0) {
                if (state.songs[currentIndex - 1]) {
                    state.currentSong = { ...state.songs[currentIndex - 1] };
                } else {
                    state.currentSong = { ...state.songs[state.songs.length - 1] };
                }
            }
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
} = playerSlice.actions;

export const loadPlayList = (): AppThunk => (dispatch) => {
    setTimeout(() => {
        dispatch(setPlayList(fakePlayList))
    }, 535);
}

export const selectPlayStatus = (state: RootState) => state.player.play;
export const selectPlayList = (state: RootState) => state.player.songs;
export const selectCurrentSong = (state: RootState) => state.player.currentSong;

export default playerSlice.reducer;
