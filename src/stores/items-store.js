import { initialItems } from '@/lib/constants';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const useItemsStore = create(
  persist(
    (set) => ({
      items: initialItems,
      addItem: (newItemText) => {
        set((state) => {
          return {
            items: [
              ...state.items,
              { id: Date.now(), title: newItemText, completed: false },
            ],
          };
        });
      },
      deleteItem: (id) => {
        set((state) => {
          return {
            items: state.items.filter((item) => item.id !== id),
          };
        });
      },
      toggleItem: (id) => {
        set((state) => {
          return {
            items: state.items.map((item) =>
              item.id === id ? { ...item, completed: !item.completed } : item
            ),
          };
        });
      },
      clearCompletedItems: () => {
        set((state) => {
          return {
            items: state.items.filter((item) => item.completed !== true),
          };
        });
      },
      resetToInitialItems: () => {
        set(() => {
          return { items: initialItems };
        });
      },
      markAllAsCompleted: () => {
        set((state) => {
          return {
            items: state.items.map((item) => {
              return { ...item, completed: true };
            }),
          };
        });
      },
      markAllAsInComplete: () => {
        set((state) => {
          return {
            items: state.items.map((item) => {
              return { ...item, completed: false };
            }),
          };
        });
      },
    }),
    { name: 'items' }
  )
);
