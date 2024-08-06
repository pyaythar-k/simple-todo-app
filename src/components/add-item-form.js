'use client';
import { useItemsStore } from '@/stores/items-store';
import { useRef, useState } from 'react';
import { FaPlus } from 'react-icons/fa6';

export default function AddItemForm() {
  const [itemText, setItemText] = useState('');
  const inputRef = useRef();
  const addItem = useItemsStore((state) => state.addItem);

  const handleOnChange = (e) => {
    setItemText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!itemText) {
      alert('item cannot be empty');
      inputRef.current.focus();
      return;
    }
    addItem(itemText);
    setItemText('');
  };

  return (
    <form className="flex flex-row gap-2" onSubmit={handleSubmit}>
      <input
        ref={inputRef}
        value={itemText}
        onChange={(e) => {
          setItemText(e.target.value);
        }}
        placeholder="Add new item here..."
        className="w-full p-5 rounded"
        autoFocus
      />
      <button className="w-20 bg-slate-50 rounded p-3 flex items-center justify-center">
        <FaPlus />
      </button>
    </form>
  );
}
