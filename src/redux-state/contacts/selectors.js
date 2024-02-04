export const selectFilter = store => store.contacts.filter;
export const selectContacts = store => store.contacts.items;
export const selectIsLoading = store => store.contacts.isLoading;
export const selectError = store => store.contacts.error;
