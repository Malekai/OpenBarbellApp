const stateRoot = (state) => state.history;

export const getExpandedSetID = (state) => stateRoot(state).expandedSetID;

export const getShowRemoved = (state) => stateRoot(state).showRemoved;

// video recorder / camera

export const getIsRecording = (state) => stateRoot(state).isRecording;

export const getRecordingVideoType = (state) => stateRoot(state).recordingVideoType;

export const getIsCameraVisible = (state) => stateRoot(state).recordingSetID !== null;

export const getRecordingSetID = (state) => stateRoot(state).recordingSetID;

// video player

export const getWatchSetID = (state) => stateRoot(state).watchSetID;

export const getIsVideoPlayerVisible = (state) => stateRoot(state).watchSetID !== null;

export const getWatchFileURL = (state) => stateRoot(state).watchFileURL;
