'use client';
import { useItemsStore } from '@/stores/items-store';

export default function ItemList() {
  const items = useItemsStore((state) => state.items);
  const toggleItem = useItemsStore((state) => state.toggleItem);
  const deleteItem = useItemsStore((state) => state.deleteItem);

  return (
    <div className="w-full bg-slate-50 h-[560px] rounded overflow-scroll">
      <ul className="p-5 space-y-2">
        {items.map((item) => {
          return (
            <Item
              key={item.id}
              item={item}
              onToggleItem={toggleItem}
              onDeleteItem={deleteItem}
            />
          );
        })}
      </ul>
    </div>
  );
}

function Item({ item, onToggleItem, onDeleteItem }) {
  return (
    <li className="shadow-sm flex flex-row bg-slate-300 p-5 border border-1  w-full rounded">
      <label className="w-4/5 cursor-pointer">
        <input
          checked={item.completed}
          onChange={() => onToggleItem(item.id)}
          type="checkbox"
          className="mr-5"
        />
        {item.title}
      </label>
      <button
        onClick={() => onDeleteItem(item.id)}
        className="flex justify-end w-1/5"
      >
        ❌
      </button>
    </li>
  );
}
