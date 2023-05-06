import { createSlice } from '@reduxjs/toolkit';

const initialState = [
    {
      id: 1,
      color: "#FF0000",
      arrivalTime:0,
      cpuBurst: 0,
      ioBurst:0,
      totalTime: 0,
      cpuVariance: 0,
      currentTime: 0,
      priorityLevel: 0,
    }
];

const processSlice = createSlice({
    name: 'processes',
    initialState,
    reducers: {
      addProcess: (state, action) => {
        state.push(action.payload);
      },
      setArrivalTime: (state, action) => {
        const process = state.find(p => p.id === action.payload.id);
        if (process) {
          process.arrivalTime = action.payload.arrivalTime;
        }
      },
      setcpuBurst: (state, action) => {
          const process = state.find(p => p.id === action.payload.id);
          if (process) {
              process.cpuBurst = action.payload.cpuBurst;
          }
      },
      setioBurst: (state, action) => {
          const process = state.find(p => p.id === action.payload.id);
          if (process) {
              process.ioBurst = action.payload.ioBurst;
          }
      },
      setStartTime: (state, action) => {
          const process = state.find(p => p.id === action.payload.id);
          if (process) {
              process.startTime = action.payload.startTime;
          }
      },
      setTotalTime: (state, action) => {
          const process = state.find(p => p.id === action.payload.id);
          if (process) {
              process.totalTime = action.payload.totalTime;
          }
      },
      setcpuVariance: (state, action) => {
          const process = state.find(p => p.id === action.payload.id);
          if (process) {
              process.cpuVariance = action.payload.cpuVariance;
          }
      },
      setCurrentTime:(state,action) => {
            const process = state.find(p => p.id === action.payload.id);
            if (process) {
                process.currentTime = action.payload.currentTime;
            }
        },
      getProcess: (state, action) => {
          const process = state.find(p => p.id === action.payload.id);
          if (process) {
              return process;
          }
      },
        getColor : (state, processId) => {
        const process = state.find(p => p.id === action.payload.id);
        return process.color;
      }
    },
  });

export const getProcessState = (state) => state.processes;

export const {
  addProcess,
  setArrivalTime,
  setcpuBurst,
  setioBurst,
  setStartTime,
  setTotalTime,
  setcpuVariance,
  setCurrentTime,
  getProcess,
  getColor
} = processSlice.actions;

export default processSlice.reducer;