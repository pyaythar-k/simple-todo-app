'use client';
import { useItemsStore } from '@/stores/items-store';
import {
  FaListCheck,
  FaPowerOff,
  FaRotateRight,
  FaTrash,
} from 'react-icons/fa6';

export default function ButtonGroup() {
  const resetToInitialItems = useItemsStore(
    (state) => state.resetToInitialItems
  );
  const clearCompletedItems = useItemsStore(
    (state) => state.clearCompletedItems
  );
  const markAllAsCompleted = useItemsStore((state) => state.markAllAsCompleted);
  const markAllAsInComplete = useItemsStore(
    (state) => state.markAllAsInComplete
  );

  const buttons = [
    {
      text: <FaPowerOff />,
      onClick: resetToInitialItems,
    },
    {
      text: <FaTrash />,
      onClick: clearCompletedItems,
    },
    {
      text: <FaListCheck />,
      onClick: markAllAsCompleted,
    },
    {
      text: <FaRotateRight />,
      onClick: markAllAsInComplete,
    },
  ];

  return (
    <div className="flex flex-row w-full gap-5">
      {buttons.map((button, i) => (
        <button
          key={i}
          onClick={button.onClick}
          className="w-1/4 h-14 bg-slate-50 rounded p-3 flex items-center justify-center"
        >
          {button.text}
        </button>
      ))}
    </div>
  );
}
