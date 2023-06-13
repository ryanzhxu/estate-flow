import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "@reduxjs/toolkit";
import workerTypes from "./workerTypes";

const initialState = [
    {
        id: '0', name: "Worker1", email: "1231@123.com", phone: "(778) 123-4561", address: "123 1st St., Vancouver",
        hRate: 40, trades: workerTypes.Electrician, pCode: "V6T 1Z4",
        imageURL: "https://pic4.zhimg.com/80/v2-32636e587d66426cc682e74eaafd2163_1440w.webp",
    },
    {
        id: '1', name: "Worker2", email: "1232@123.com", phone: "(778) 123-4561", address: "123 2nd St., Vancouver",
        hRate: 40, trades: workerTypes.Electrician, pCode: "V6T 1Z4",
        imageURL: "https://pic4.zhimg.com/80/v2-32636e587d66426cc682e74eaafd2163_1440w.webp",
    },
    {
        id: '2', name: "Worker3", email: "1233@123.com", phone: "(778) 123-4561", address: "123 3rd St., Vancouver",
        hRate: 40, trades: workerTypes.Electrician, pCode: "V6T 1Z4",
        imageURL: "https://pic4.zhimg.com/80/v2-32636e587d66426cc682e74eaafd2163_1440w.webp",
    },
    {
        id: '3', name: "Worker4", email: "1234@123.com", phone: "(778) 123-4561", address: "123 4th St., Vancouver",
        hRate: 40, trades: workerTypes.Electrician, pCode: "V6T 1Z4",
        imageURL: "https://pic4.zhimg.com/80/v2-32636e587d66426cc682e74eaafd2163_1440w.webp",
    },
    {
        id: '4', name: "Worker5", email: "1235@123.com", phone: "(778) 123-4561", address: "123 5th St., Vancouver",
        hRate: 40, trades: workerTypes.Electrician, pCode: "V6T 1Z4",
        imageURL: "https://pic4.zhimg.com/80/v2-32636e587d66426cc682e74eaafd2163_1440w.webp",
    },
    {
        id: '5', name: "Worker6", email: "1235@123.com", phone: "(778) 123-4561", address: "123 6th St., Vancouver",
        hRate: 40, trades: workerTypes.Electrician, pCode: "V6T 1Z4",
        imageURL: "https://pic4.zhimg.com/80/v2-32636e587d66426cc682e74eaafd2163_1440w.webp",
    }
]

const workersSlice = createSlice({
    name: 'workers',
    initialState,
    reducers: {
        addWorker: {
            reducer(state, action) {
                state.push(action.payload)
            },
            prepare(name, email, phone, address, hRate, trades, pCode, imageURL) {
                return {
                    payload: {
                        id: nanoid(),
                        name,
                        email,
                        phone,
                        address,
                        hRate,
                        trades,
                        pCode,
                        imageURL
                    }
                }
            }
        },
        deleteAll(state, action) {
            // Clear the entire state by replacing it with an empty array
            return [];
        },
        deleteWorker(state, action) {
            const itemId = action.payload;
            // Array.prototype.filter() 滤掉对应的
            return state.filter(item => item.id !== itemId);
        }


    }
})

export const selectAllWorkers = state => state.workers;

export const { addWorker, deleteAll, deleteWorker } = workersSlice.actions;

export default workersSlice.reducer;