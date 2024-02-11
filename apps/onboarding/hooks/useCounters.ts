import { useState } from 'react';

export function useCounters() {
  const [itemsCount, setItemsCount] = useState<number>(0);
  return {
    itemsCount,
    addToCart: () => setItemsCount((i) => i + 1),
    clearCart: () => setItemsCount(0),
  };
}

export default useCounters;
