import { createSlice } from "@reduxjs/toolkit";
import { fetchContacts, addContact, deleteContact } from "./operations";



export const contactsSlice = createSlice({
    name: "contacts",
    initialState: {
        items: [],
        isLoading: false,
        error: null},
    extraReducers: (builder) => {
        builder.addCase(
            fetchContacts.pending, (state) => {
                state.isLoading = true;
                state.error = null
            }
        ).addCase(
            fetchContacts.fulfilled, (state, { payload }) => {
                state.isLoading = false;
                state.items = payload
            }
        ).addCase(
            fetchContacts.rejected, (state, { payload }) => {
                state.isLoading = false;
                state.error = payload;
            }
        ).addCase(
            addContact.pending, (state) => {
                state.isLoading = true;
                state.error = null
            }
        ).addCase(
            addContact.fulfilled, (state, { payload }) => {
                state.isLoading = false;
                state.items.push(payload);                
            }
        ).addCase(
            addContact.rejected, (state, { payload }) => {
                state.isLoading = false;
                state.error = payload;
            }
        ).addCase(
            deleteContact.pending, (state) => {
                state.isLoading = true;
                state.error = null
            }
        ).addCase(
            deleteContact.fulfilled, (state, { payload }) => {
                state.isLoading = false;
                state.items = state.items.filter(contact => contact.id !== payload.id
      );
            }
        ).addCase(
            deleteContact.rejected, (state, { payload }) => {
                state.isLoading = false;
                state.error = payload;
            }
        )
    }

})


/*{
        addContact: (state, { payload }) => {
            const { name, number } = payload
            const id = nanoid()
            const includesName = state.find(
            contact => contact.name.toLocaleLowerCase() === name.toLocaleLowerCase()
            );

            if (includesName) {
            alert(`${name} is already in contacts`)
            } else {
            let contact = { id, name, number};
            state.push(contact);
            }
        },

        removeContact: (state, { payload }) => {
            const {id } = payload;
            return state.filter(contact => contact.id !== id)
        }
        
    } */